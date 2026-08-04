// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { DADOS_DE_EXEMPLO } from './src/data/site.ts';

// O domínio final entra aqui e em .env (PUBLIC_SITE_URL).
// Ele alimenta sitemap, canonical, og:url e o JSON-LD.
/** @param {string} valor */
function validarSite(valor) {
  const url = new URL(valor);
  if (url.protocol !== 'https:' || url.username || url.password) {
    throw new Error('PUBLIC_SITE_URL precisa ser uma URL HTTPS sem credenciais.');
  }
  if (url.pathname !== '/' || url.search || url.hash) {
    throw new Error('PUBLIC_SITE_URL deve conter somente a origem, sem caminho, busca ou hash.');
  }
  return url.origin;
}

const SITE = validarSite(process.env.PUBLIC_SITE_URL ?? 'https://valdecimoveis.com.br');
const SITE_ORIGIN = SITE;

/* O sitemap principal também carrega as fotos de cada anúncio. Assim o
   Google processa páginas e imagens na mesma leitura, sem depender de um
   segundo sitemap que alguns painéis classificam como desconhecido. */
const IMAGENS_IMOVEIS = Object.fromEntries(
  readdirSync(resolve('src/content/imoveis'))
    .filter((arquivo) => arquivo.endsWith('.md'))
    .map((arquivo) => {
      const slug = arquivo.replace(/\.md$/, '');
      const conteudo = readFileSync(resolve('src/content/imoveis', arquivo), 'utf8');
      const fotos = [...conteudo.matchAll(/^\s*-\s*src:\s*['"]([^'"]+)['"]\s*$/gm)].map(
        ([, src]) => ({ url: new URL(src, `${SITE_ORIGIN}/`).href }),
      );
      return [slug, fotos];
    }),
);

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    /* O CSS crítico é pequeno e o título do hero é o LCP. Inlinar remove
       duas viagens de rede antes da primeira pintura, especialmente valiosas
       no 4G; a compressão do HTML mantém o custo de transferência contido. */
    inlineStylesheets: 'always',
    format: 'directory',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  image: {
    // Formatos e larguras que o astro:assets pode gerar.
    responsiveStyles: true,
    layout: 'constrained',
  },
  /* Variáveis de ambiente pela API oficial `astro:env`, e não por
     `import.meta.env`. Duas razões:
       1. São validadas e tipadas no build — errar o nome quebra o build, não
          o site em produção.
       2. Evitam espalhar leituras diretas de `import.meta.env` pelos
          componentes. */
  env: {
    schema: {
      PUBLIC_WHATSAPP: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_UMAMI_SRC: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
      }),
      PUBLIC_UMAMI_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
      }),
      PUBLIC_GTM_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
      }),
      PUBLIC_GOOGLE_ADS_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
      }),
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
      }),
      PUBLIC_GOOGLE_BUSINESS_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
      }),
      PUBLIC_INSTAGRAM_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
      }),
      PUBLIC_FACEBOOK_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
      }),
    },
  },

  integrations: DADOS_DE_EXEMPLO ? [] : [
    sitemap({
      filter: (page) =>
        !page.includes('/privacidade') &&
        !page.includes('/termos'),
      changefreq: 'weekly',
      serialize(item) {
        if (item.url === `${SITE}/`) item.priority = 1.0;
        else if (item.url.includes('/imovel/')) {
          item.priority = 0.9;
          const slug = item.url.split('/imovel/')[1]?.replace(/\/$/, '');
          const fotos = slug ? IMAGENS_IMOVEIS[slug] : undefined;
          if (fotos?.length) {
            /** @type {import('sitemap').SitemapItemLoose} */
            const itemComImagens = item;
            itemComImagens.img = fotos;
          }
        }
        else if (item.url.includes('/regiao/')) item.priority = 0.8;
        else item.priority = 0.6;
        return item;
      },
    }),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
