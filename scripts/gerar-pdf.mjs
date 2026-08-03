/* ==========================================================================
   GERA public/checklist-14-pontos.pdf a partir da página /checklist/.

   Fluxo (documentado no README):
     npm run build          → gera dist/ com a página /checklist/
     npm run pdf            → serve dist/, imprime a página em A4, salva o PDF
     npm run build          → o PDF de public/ entra no dist final

   O PDF é versionado no repositório, então o deploy normal não depende
   deste script. Rode-o de novo quando os 14 pontos mudarem.
   ========================================================================== */
import { spawn } from 'node:child_process';
import { readdirSync, existsSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const SAIDA = join(RAIZ, 'public', 'checklist-14-pontos.pdf');
const PORTA_SITE = 4399;

function acharChrome() {
  if (process.env.CHROME_BIN) return process.env.CHROME_BIN;
  const cache = join(homedir(), 'Library/Caches/ms-playwright');
  if (!existsSync(cache)) return null;
  for (const dir of readdirSync(cache)) {
    for (const rel of [
      'chrome-headless-shell-mac-arm64/chrome-headless-shell',
      'chrome-headless-shell-mac-x64/chrome-headless-shell',
      'chrome-mac/Chromium.app/Contents/MacOS/Chromium',
      'chrome-linux/chrome',
    ]) {
      const p = join(cache, dir, rel);
      if (existsSync(p)) return p;
    }
  }
  return null;
}

const bin = acharChrome();
if (!bin) {
  console.error(
    'Chromium não encontrado. Defina CHROME_BIN, ou gere o PDF abrindo\n' +
      'http://localhost:4321/checklist/ e usando Imprimir → Salvar em PDF (A4).',
  );
  process.exit(1);
}

const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

// 1. servir o dist/
const servidor = spawn('npx', ['astro', 'preview', '--port', String(PORTA_SITE)], {
  cwd: RAIZ,
  stdio: 'ignore',
});

async function siteNoAr() {
  for (let i = 0; i < 80; i++) {
    try {
      const r = await fetch(`http://localhost:${PORTA_SITE}/checklist/`);
      if (r.ok) return true;
    } catch {
      /* subindo */
    }
    await esperar(200);
  }
  return false;
}

if (!(await siteNoAr())) {
  console.error('O `astro preview` não respondeu. Rode `npm run build` antes.');
  servidor.kill();
  process.exit(1);
}

// 2. Chromium com depuração remota
const portaCdp = 9333;
const chrome = spawn(bin, [
  '--headless=new',
  `--remote-debugging-port=${portaCdp}`,
  '--disable-gpu',
  '--no-first-run',
  'about:blank',
]);
chrome.stderr.on('data', () => {});

async function alvo() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${portaCdp}/json/list`);
      const abas = await r.json();
      const p = abas.find((a) => a.type === 'page');
      if (p?.webSocketDebuggerUrl) return p.webSocketDebuggerUrl;
    } catch {
      /* subindo */
    }
    await esperar(150);
  }
  throw new Error('Chromium não respondeu.');
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
await cdp('Page.navigate', { url: `http://localhost:${PORTA_SITE}/checklist/` });
await esperar(2500);

const { data } = await cdp('Page.printToPDF', {
  printBackground: true,
  paperWidth: 8.27, // A4
  paperHeight: 11.69,
  marginTop: 0.47,
  marginBottom: 0.47,
  marginLeft: 0.47,
  marginRight: 0.47,
  preferCSSPageSize: true,
});

writeFileSync(SAIDA, Buffer.from(data, 'base64'));
const kb = (Buffer.from(data, 'base64').length / 1024).toFixed(1);
console.log(`public/checklist-14-pontos.pdf · ${kb} KB`);
console.log('Rode `npm run build` de novo para levá-lo ao dist/.');

ws.close();
chrome.kill();
servidor.kill();
process.exit(0);
