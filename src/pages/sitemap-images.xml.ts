import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const escaparXml = (valor: string) =>
  valor
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = async ({ site }) => {
  const origem = site ?? new URL('https://valdecimoveis.com.br');
  const imoveis = await getCollection('imoveis');

  const urls = imoveis
    .filter((imovel) => imovel.data.fotos.length > 0)
    .map((imovel) => {
      const pagina = new URL(`/imovel/${imovel.id}/`, origem).href;
      const imagens = imovel.data.fotos
        .map((foto) => {
          const url = new URL(foto.src, origem).href;
          return `    <image:image><image:loc>${escaparXml(url)}</image:loc></image:image>`;
        })
        .join('\n');

      return `  <url>\n    <loc>${escaparXml(pagina)}</loc>\n${imagens}\n  </url>`;
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
