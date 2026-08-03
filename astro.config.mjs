// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// O domínio final entra aqui e em .env (PUBLIC_SITE_URL).
// Ele alimenta sitemap, canonical, og:url e o JSON-LD.
const SITE = process.env.PUBLIC_SITE_URL ?? 'https://corretorrural.es.br';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
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
       2. `import.meta.env` no frontmatter de um layout dispara um bug de
          transformação no SSR de desenvolvimento (Vite 6.4 + Astro 5.18):
          "Cannot split a chunk that has already been edited". */
  env: {
    schema: {
      PUBLIC_WHATSAPP: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_LEAD_WEBHOOK: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
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
    },
  },

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/privacidade') &&
        !page.includes('/termos'),
      changefreq: 'weekly',
      lastmod: new Date(),
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
