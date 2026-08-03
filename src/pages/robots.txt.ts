import type { APIRoute } from 'astro';
import { DADOS_DE_EXEMPLO } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const origem = site?.href.replace(/\/$/, '') ?? 'https://valdecimoveis.com.br';
  const linhas = DADOS_DE_EXEMPLO
    ? ['User-agent: *', 'Disallow: /']
    : [
        'User-agent: *',
        'Allow: /',
        'Disallow: /privacidade/',
        'Disallow: /termos/',
        `Sitemap: ${origem}/sitemap-index.xml`,
      ];

  return new Response(`${linhas.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
