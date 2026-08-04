/**
 * Finaliza a saida estatica com uma CSP baseada em hashes e impede que
 * artefatos de desenvolvimento sejam publicados por engano.
 *
 * Os hashes sao calculados depois que o Astro termina porque ele gera alguns
 * scripts inline diferentes em cada pagina. Isso permite bloquear
 * `unsafe-inline` sem quebrar os componentes nem o Google Tag Manager.
 */
import { createHash } from 'node:crypto';
import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const RAIZ = process.cwd();
const DIST = path.resolve(RAIZ, 'dist');
const ORIGEM_SITE = 'https://valdecimoveis.com.br';
const MARCADOR_CSP = '__CSP_POLICY__';
const fontesGoogleScript = [
  'https://www.googletagmanager.com',
  'https://www.googleadservices.com',
  'https://www.google.com',
  'https://www.google.com.br',
  'https://pagead2.googlesyndication.com',
  'https://googleads.g.doubleclick.net',
];
const origensScriptPermitidas = new Set([
  ...fontesGoogleScript,
  'https://cloud.umami.is',
]);

async function listarArquivos(diretorio) {
  const itens = await readdir(diretorio, { withFileTypes: true });
  const arquivos = [];

  for (const item of itens) {
    const absoluto = path.join(diretorio, item.name);
    if (item.isDirectory()) arquivos.push(...(await listarArquivos(absoluto)));
    else if (item.isFile()) arquivos.push(absoluto);
  }

  return arquivos;
}

if (!(await stat(DIST).catch(() => null))?.isDirectory()) {
  throw new Error('A pasta dist nao existe. Execute este script somente depois do build.');
}

const arquivos = await listarArquivos(DIST);
const htmls = arquivos.filter((arquivo) => arquivo.endsWith('.html'));
const hashes = new Set();
const origensScripts = new Set();

for (const arquivo of htmls) {
  const html = await readFile(arquivo, 'utf8');
  const scripts = html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi);

  for (const [, atributos, conteudo] of scripts) {
    const src = atributos.match(/\bsrc\s*=\s*(["'])(.*?)\1/i)?.[2];

    if (src) {
      const url = new URL(src, ORIGEM_SITE);
      if (!['https:', 'http:'].includes(url.protocol)) {
        throw new Error(`Script com protocolo proibido em ${arquivo}: ${url.protocol}`);
      }
      if (url.protocol !== 'https:' && url.origin !== ORIGEM_SITE) {
        throw new Error(`Script externo sem HTTPS em ${arquivo}: ${url.href}`);
      }
      if (url.origin !== ORIGEM_SITE) {
        if (!origensScriptPermitidas.has(url.origin)) {
          throw new Error(
            `Origem de script nao autorizada em ${arquivo}: ${url.origin}. ` +
              'Adicione-a explicitamente a lista de confianca depois de revisar o fornecedor.',
          );
        }
        origensScripts.add(url.origin);
      }
      continue;
    }

    if (!conteudo) continue;
    const digest = createHash('sha256').update(conteudo, 'utf8').digest('base64');
    hashes.add(`'sha256-${digest}'`);
  }
}

const fontesScript = [
  "'self'",
  ...[...hashes].sort(),
  ...fontesGoogleScript,
  ...[...origensScripts].sort(),
];

const politica = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  `script-src ${fontesScript.join(' ')}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  [
    "img-src 'self' data:",
    'https://www.googletagmanager.com',
    'https://*.google-analytics.com',
    'https://*.g.doubleclick.net',
    'https://googleads.g.doubleclick.net',
    'https://www.googleadservices.com',
    'https://pagead2.googlesyndication.com',
    'https://www.google.com',
    'https://google.com',
    'https://www.google.com.br',
    'https://google.com.br',
  ].join(' '),
  [
    "connect-src 'self'",
    'https://www.googletagmanager.com',
    'https://*.google-analytics.com',
    'https://*.analytics.google.com',
    'https://*.g.doubleclick.net',
    'https://googleads.g.doubleclick.net',
    'https://ad.doubleclick.net',
    'https://www.googleadservices.com',
    'https://pagead2.googlesyndication.com',
    'https://www.google.com',
    'https://google.com',
    'https://www.google.com.br',
    'https://google.com.br',
    ...[...origensScripts].sort(),
  ].join(' '),
  'frame-src https://www.googletagmanager.com',
  "media-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  'upgrade-insecure-requests',
].join('; ');

if (politica.length > 7_500) {
  throw new Error(`CSP excedeu o limite preventivo de 7.500 bytes: ${politica.length}`);
}

for (const nome of ['.htaccess', '_headers']) {
  const destino = path.join(DIST, nome);
  const modelo = await readFile(destino, 'utf8');
  if (!modelo.includes(MARCADOR_CSP)) {
    throw new Error(`Marcador ${MARCADOR_CSP} ausente em public/${nome}`);
  }
  await writeFile(destino, modelo.replaceAll(MARCADOR_CSP, politica), 'utf8');
}

const relativos = arquivos.map((arquivo) => path.relative(DIST, arquivo));
const proibidos = relativos.filter((arquivo) => {
  const normalizado = arquivo.split(path.sep).join('/');
  const base = path.posix.basename(normalizado);
  return (
    /(^|\/)(?:\.env(?:\.|$)|\.git(?:\/|$)|node_modules(?:\/|$)|src(?:\/|$))/.test(
      normalizado,
    ) ||
    /^(?:package(?:-lock)?\.json|astro\.config\.|tsconfig\.json$)/.test(base) ||
    /\.(?:bak|log|map|orig|pem|key|sql)$/i.test(base)
  );
});

if (proibidos.length) {
  throw new Error(`Arquivos proibidos encontrados em dist:\n${proibidos.join('\n')}`);
}

const pastaConteudo = path.resolve(RAIZ, 'src/content');
const arquivosConteudo = (await listarArquivos(pastaConteudo)).filter((arquivo) =>
  arquivo.endsWith('.md'),
);
for (const arquivo of arquivosConteudo) {
  const conteudo = await readFile(arquivo, 'utf8');
  if (/<\/?[a-z][^>]*>/i.test(conteudo) || /javascript\s*:/i.test(conteudo)) {
    throw new Error(
      `HTML bruto ou URL javascript: proibido no conteudo editorial: ${path.relative(RAIZ, arquivo)}`,
    );
  }
}

for (const nome of ['.htaccess', '_headers']) {
  const conteudo = await readFile(path.join(DIST, nome), 'utf8');
  if (conteudo.includes(MARCADOR_CSP)) {
    throw new Error(`A CSP nao foi finalizada em dist/${nome}`);
  }
}

console.log(
  `Seguranca do build: ${htmls.length} HTML, ${hashes.size} hashes CSP, ` +
    `${politica.length} bytes e nenhum artefato sensivel.`,
);
