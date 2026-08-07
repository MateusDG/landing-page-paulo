import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';

import { svgOg } from '../../lib/og';
import { territorios, CONTORNO_ES, VIEWBOX_ES, rotuloTerritorio } from '../../data/territorios';
import { formatarArea } from '../../lib/unidades';
import { preco, mesAno, areas as fmtAreas } from '../../lib/format';
import { imovelPublicado } from '../../lib/publicacao';

/* Uma rota, três famílias de imagem: a padrão do site, uma por imóvel e uma
   por região. Todas rasterizadas no build, nenhuma requisição em runtime. */

interface Params {
  kicker: string;
  titulo: string;
  referencia?: string;
  destaque?: { valor: string; unidade: string };
  meta?: { rotulo: string; valor: string }[];
  croqui?: string;
  croquiViewBox?: string;
  carimbo?: string;
}

export async function getStaticPaths() {
  const imoveis = (await getCollection('imoveis')).filter(imovelPublicado);

  const rotas: { params: { slug: string }; props: Params }[] = [
    {
      params: { slug: 'padrao' },
      props: {
        kicker: 'Fazendas, sítios, chácaras e terrenos · ES',
        titulo: 'Imóveis rurais à venda no Espírito Santo.',
        croqui: CONTORNO_ES,
        croquiViewBox: VIEWBOX_ES,
        meta: [
          { rotulo: 'Regiões', valor: '4' },
          { rotulo: 'Atendimento', valor: 'direto' },
        ],
      },
    },
  ];

  for (const i of imoveis) {
    const d = i.data;
    rotas.push({
      params: { slug: `imovel-${i.id}` },
      props: {
        kicker: `${d.municipio} · ${rotuloTerritorio(d.regiao)}`,
        referencia: d.codigo,
        titulo: d.titulo,
        ...(d.areaHa != null
          ? { destaque: { valor: formatarArea(d.areaHa), unidade: 'ha' } }
          : {}),
        croqui: d.croqui,
        croquiViewBox: d.croquiViewBox,
        carimbo:
          d.status === 'vendida' && d.vendidaEm
            ? `Vendida ${mesAno(d.vendidaEm)}`
            : d.status === 'reservada'
              ? 'Reservada'
              : undefined,
        meta: [
          { rotulo: 'De Vitória', valor: d.tempoDeVitoria },
          { rotulo: 'Valor', valor: preco(d.preco) },
        ],
      },
    });
  }

  for (const t of territorios) {
    const daRegiao = imoveis.filter(
      (i) => i.data.regiao === t.slug && i.data.status === 'ativa',
    );
    rotas.push({
      params: { slug: `regiao-${t.slug}` },
      props: {
        kicker: 'Região de atuação · Espírito Santo',
        titulo: t.nome,
        croqui: t.path,
        croquiViewBox: VIEWBOX_ES,
        meta: [
          { rotulo: 'Municípios', valor: String(t.municipios.length) },
          { rotulo: 'Em carteira', valor: fmtAreas(daRegiao.length) },
        ],
      },
    });
  }

  return rotas;
}

export const GET: APIRoute = async ({ props }) => {
  const svg = svgOg(props as Params);
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
