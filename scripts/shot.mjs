/* ==========================================================================
   CAPTURA DE TELA PARA QA VISUAL

   Sobe um Chromium headless, navega e salva PNG. Serve para revisar layout
   sem depender de olhar no navegador — e para comparar antes/depois quando
   se mexe no sistema de design.

   Uso:
     node scripts/shot.mjs <url> <saida.png> [--w=1440] [--h=900] [--full]
                                             [--y=2400] [--dark]

     node scripts/shot.mjs http://localhost:4321/ /tmp/home.png --full
     node scripts/shot.mjs http://localhost:4321/ /tmp/dobra.png --y=3200
     node scripts/shot.mjs http://localhost:4321/ /tmp/mob.png --w=390 --h=844

   Requer o Chromium do Playwright em ~/Library/Caches/ms-playwright, ou a
   variável CHROME_BIN apontando para qualquer binário compatível.
   ========================================================================== */
import { spawn } from 'node:child_process';
import { readdirSync, existsSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const args = process.argv.slice(2);
const url = args[0];
const saida = args[1];
if (!url || !saida) {
  console.error('uso: node scripts/shot.mjs <url> <saida.png> [--w=] [--h=] [--full] [--y=]');
  process.exit(1);
}
const opt = (n, p) => {
  const a = args.find((x) => x.startsWith(`--${n}=`));
  return a ? Number(a.split('=')[1]) : p;
};
const largura = opt('w', 1440);
const altura = opt('h', 900);
const paginaInteira = args.includes('--full');
const scrollY = opt('y', 0);

function acharChrome() {
  if (process.env.CHROME_BIN) return process.env.CHROME_BIN;
  const cache = join(homedir(), 'Library/Caches/ms-playwright');
  if (!existsSync(cache)) return null;
  const candidatos = [];
  for (const dir of readdirSync(cache)) {
    for (const rel of [
      'chrome-headless-shell-mac-arm64/chrome-headless-shell',
      'chrome-headless-shell-mac-x64/chrome-headless-shell',
      'chrome-mac/Chromium.app/Contents/MacOS/Chromium',
      'chrome-linux/chrome',
    ]) {
      const p = join(cache, dir, rel);
      if (existsSync(p)) candidatos.push(p);
    }
  }
  return candidatos[0] ?? null;
}

const bin = acharChrome();
if (!bin) {
  console.error('Chromium não encontrado. Defina CHROME_BIN ou instale o Playwright.');
  process.exit(1);
}

const porta = 9222 + Math.floor(process.pid % 500);
const chrome = spawn(bin, [
  '--headless=new',
  `--remote-debugging-port=${porta}`,
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-first-run',
  '--force-device-scale-factor=2',
  `--window-size=${largura},${altura}`,
  'about:blank',
]);
chrome.stderr.on('data', () => {});

const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

async function alvo() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${porta}/json/list`);
      const abas = await r.json();
      const p = abas.find((a) => a.type === 'page');
      if (p?.webSocketDebuggerUrl) return p.webSocketDebuggerUrl;
    } catch {
      /* ainda subindo */
    }
    await esperar(120);
  }
  throw new Error('Chromium não respondeu na porta de depuração.');
}

const ws = new WebSocket(await alvo());
await new Promise((r) => ws.addEventListener('open', r, { once: true }));

let id = 0;
const pendentes = new Map();
ws.addEventListener('message', (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pendentes.has(m.id)) {
    pendentes.get(m.id)(m.result);
    pendentes.delete(m.id);
  }
});
const cdp = (metodo, params = {}) =>
  new Promise((res) => {
    const n = ++id;
    pendentes.set(n, res);
    ws.send(JSON.stringify({ id: n, method: metodo, params }));
  });

await cdp('Page.enable');
await cdp('Emulation.setDeviceMetricsOverride', {
  width: largura,
  height: altura,
  deviceScaleFactor: 2,
  mobile: largura < 700,
});
await cdp('Page.navigate', { url });
await esperar(1600);

if (scrollY) {
  await cdp('Runtime.evaluate', {
    expression: `window.scrollTo({top:${scrollY},behavior:'instant'})`,
  });
  await esperar(500);
}

// Dispara as revelações do IntersectionObserver que ficariam pendentes fora
// da viewport, para a captura de página inteira não sair com buracos.
if (paginaInteira) {
  await cdp('Runtime.evaluate', {
    expression: `document.querySelectorAll('.revelar').forEach(e=>e.classList.add('visivel'));
                 document.querySelectorAll('.croqui--desenhar').forEach(e=>e.classList.add('desenhado'));`,
  });
  await esperar(300);
}

const { data } = await cdp('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: paginaInteira,
  ...(paginaInteira ? { optimizeForSpeed: false } : {}),
});

writeFileSync(saida, Buffer.from(data, 'base64'));
console.log(`${saida} · ${largura}×${paginaInteira ? 'inteira' : altura}`);

ws.close();
chrome.kill();
process.exit(0);
