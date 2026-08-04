// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { DADOS_DE_EXEMPLO } from './src/data/site.ts';

// O domínio final entra aqui e em .env (PUBLIC_SITE_URL).
// Ele alimenta sitemap, canonical, og:url e o JSON-LD.
const SITE = process.env.PUBLIC_SITE_URL ?? 'https://valdecimoveis.com.br';

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
        else if (item.url.includes('/imovel/')) item.priority = 0.9;
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
