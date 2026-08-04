/* ==========================================================================
   WHATSAPP
   Regra absoluta do projeto: nenhum link de WhatsApp sai sem contexto.
   `wa.me/5527…` puro faz o corretor receber "oi, tem chácara?". Com contexto,
   ele já sabe qual área, qual seção da página e qual referência rastrear.
   ========================================================================== */

import { PUBLIC_WHATSAPP } from 'astro:env/client';
import { corretor } from '../data/site';

const NUMERO = String(PUBLIC_WHATSAPP || corretor.whatsapp).replace(/\D/g, '');

export interface ContextoWhats {
  /** Código interno do imóvel, ex.: FA-0142 */
  imovel?: string;
  areaHa?: number;
  municipio?: string;
  /** De onde na página o clique veio, vira a ref rastreável. */
  origem: string;
  /** Substitui o corpo padrão quando a mensagem precisa ser outra. */
  mensagem?: string;
}

function montarTexto(ctx: ContextoWhats): string {
  if (ctx.mensagem) return `${ctx.mensagem}\n\n(ref: ${ctx.origem})`;

  const linhas = ['Oi, vim pelo site.'];

  if (ctx.imovel) {
    const area = ctx.areaHa
      ? `${ctx.areaHa.toLocaleString('pt-BR')} ha`
      : null;
    const local = [area, ctx.municipio].filter(Boolean).join(' em ');
    linhas.push(
      local
        ? `Quero falar sobre a área ${ctx.imovel}, ${local}.`
        : `Quero falar sobre a área ${ctx.imovel}.`,
    );
  } else {
    linhas.push('Queria conversar sobre área rural.');
  }

  linhas.push('', `(ref: ${ctx.origem})`);
  return linhas.join('\n');
}

export function linkWhats(ctx: ContextoWhats): string {
  return `https://wa.me/${NUMERO}?text=${encodeURIComponent(montarTexto(ctx))}`;
}

export function formatarNumeroWhats(numero = NUMERO): string {
  const nacional = numero.startsWith('55') ? numero.slice(2) : numero;
  if (nacional.length !== 11) return numero;
  return `(${nacional.slice(0, 2)}) ${nacional.slice(2, 7)}-${nacional.slice(7)}`;
}

export const numeroWhats = NUMERO;
export const numeroWhatsVisivel = formatarNumeroWhats();
