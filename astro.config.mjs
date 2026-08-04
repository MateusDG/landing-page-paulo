// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { DADOS_DE_EXEMPLO } from './src/data/site.ts';

// O domínio final entra aqui e em .env (PUBLIC_SITE_URL).
// Ele alimenta sitemap, canonical, og:url e o JSON-LD.
const SITE = process.env.PUBLIC_SITE_URL ?? 'https://valdecimoveis.com.br';
const SITE_ORIGIN = SITE.endsWith('/') ? SITE.slice(0, -1) : SITE;

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
    /* 'auto' inlina só as folhas pequenas e deixa a principal como arquivo
       com hash — que fica em cache entre as páginas. Com 29 páginas e um CSS
       de ~40 KB, repetir o estilo inteiro em cada HTML custaria mais do que
       a requisição extra da primeira visita. */
    inlineStylesheets: 'auto',
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
