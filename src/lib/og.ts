/* ==========================================================================
   IMAGEM OG, gerada no build, uma por imóvel e uma por região.

   Por que isso importa mais que quase todo o resto de SEO neste negócio: o
   link vai circular no WhatsApp, colado no grupo da família e no grupo de
   produtores. O cartão que aparece ali é a primeira impressão, e o padrão
   ("print da página") é sempre ilegível.

   Decisão de projeto: a arte é GEOMETRIA, não tipografia. O rasterizador do
   sharp/libvips usa fontes do sistema e ignora @font-face embutido (testado),
   então depender do Fraunces daria resultado diferente em cada máquina de
   build. Em vez disso, quem carrega a identidade é o croqui do perímetro, a
   paleta e os filetes, que são vetor puro e saem idênticos em qualquer
   lugar. O texto usa pilhas genéricas que existem no macOS e no Linux.
   ========================================================================== */

export const OG_LARGURA = 1200;
export const OG_ALTURA = 630;

const COR = {
  papel: '#f7f6f1',
  papel2: '#eeece4',
  grafite: '#1f2721',
  grafite70: '#505850',
  grafite40: '#626a62',
  filete: '#d1d0c7',
  terra: '#b75b34',
};

const SERIF = "Georgia,'Iowan Old Style','Liberation Serif','DejaVu Serif',serif";
const MONO = "'SF Mono',Menlo,'DejaVu Sans Mono','Liberation Mono',monospace";

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Quebra por largura estimada. Serif ≈ 0.5em por caractere em média. */
function quebrar(texto: string, tamanho: number, larguraMax: number, maxLinhas = 3): string[] {
  const porChar = tamanho * 0.5;
  const limite = Math.floor(larguraMax / porChar);
  const palavras = texto.split(/\s+/);
  const linhas: string[] = [];
  let atual = '';

  for (const p of palavras) {
    const teste = atual ? `${atual} ${p}` : p;
    if (teste.length > limite && atual) {
      linhas.push(atual);
      atual = p;
      if (linhas.length === maxLinhas) break;
    } else {
      atual = teste;
    }
  }
  if (atual && linhas.length < maxLinhas) linhas.push(atual);
  if (linhas.length === maxLinhas && palavras.join(' ').length > linhas.join(' ').length) {
    linhas[maxLinhas - 1] = `${linhas[maxLinhas - 1].replace(/[.,;:]$/, '')}…`;
  }
  return linhas;
}

interface BaseOg {
  /** Rótulo mono do topo esquerdo. */
  kicker: string;
  titulo: string;
  /** Linha mono do topo direito. */
  referencia?: string;
  /** Números grandes: valor + unidade. */
  destaque?: { valor: string; unidade: string };
  /** Pares mono do rodapé. */
  meta?: { rotulo: string; valor: string }[];
  /** Path do croqui. */
  croqui?: string;
  croquiViewBox?: string;
  /** Faixa diagonal de VENDIDA. */
  carimbo?: string;
}

export function svgOg(o: BaseOg): string {
  const M = 64; // margem
  const colTexto = 640;

  const linhasTitulo = quebrar(o.titulo, 58, colTexto, 3);
  const tituloY = o.destaque ? 300 : 268;

  const croquiTam = 300;
  const croquiX = OG_LARGURA - M - croquiTam;
  const croquiY = (OG_ALTURA - croquiTam) / 2 - 10;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_LARGURA}" height="${OG_ALTURA}" viewBox="0 0 ${OG_LARGURA} ${OG_ALTURA}">
  <rect width="${OG_LARGURA}" height="${OG_ALTURA}" fill="${COR.papel}"/>
  <rect x="24" y="24" width="${OG_LARGURA - 48}" height="${OG_ALTURA - 48}" fill="none" stroke="${COR.filete}" stroke-width="1"/>

  <!-- topo -->
  <text x="${M}" y="${M + 26}" font-family="${MONO}" font-size="17" letter-spacing="2.4" fill="${COR.terra}">${esc(o.kicker.toUpperCase())}</text>
  ${
    o.referencia
      ? `<text x="${OG_LARGURA - M}" y="${M + 26}" text-anchor="end" font-family="${MONO}" font-size="17" letter-spacing="2.4" fill="${COR.grafite40}">${esc(o.referencia.toUpperCase())}</text>`
      : ''
  }
  <line x1="${M}" y1="${M + 46}" x2="${OG_LARGURA - M}" y2="${M + 46}" stroke="${COR.filete}" stroke-width="1"/>

  ${
    o.destaque
      ? `<text x="${M}" y="216" font-family="${SERIF}" font-size="128" fill="${COR.grafite}" letter-spacing="-4">${esc(o.destaque.valor)}<tspan font-family="${MONO}" font-size="30" letter-spacing="2.4" fill="${COR.grafite70}" dx="14" dy="-6">${esc(o.destaque.unidade)}</tspan></text>`
      : ''
  }

  <!-- título -->
  ${linhasTitulo
    .map(
      (l, i) =>
        `<text x="${M}" y="${tituloY + i * 66}" font-family="${SERIF}" font-size="56" fill="${COR.grafite}" letter-spacing="-1">${esc(l)}</text>`,
    )
    .join('\n  ')}

  <!-- croqui -->
  ${
    o.croqui
      ? `<g transform="translate(${croquiX} ${croquiY})">
    <svg width="${croquiTam}" height="${croquiTam}" viewBox="${o.croquiViewBox ?? '0 0 100 100'}" overflow="visible">
      <path d="${o.croqui}" fill="none" stroke="${COR.grafite}" stroke-width="0.9" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
    </svg>
  </g>`
      : ''
  }

  <!-- rodapé -->
  <line x1="${M}" y1="${OG_ALTURA - M - 52}" x2="${OG_LARGURA - M}" y2="${OG_ALTURA - M - 52}" stroke="${COR.filete}" stroke-width="1"/>
  ${(o.meta ?? [])
    .map(
      (m, i) =>
        `<text x="${M + i * 250}" y="${OG_ALTURA - M - 20}" font-family="${MONO}" font-size="17" letter-spacing="1.6" fill="${COR.grafite40}">${esc(m.rotulo.toUpperCase())}  <tspan fill="${COR.grafite}">${esc(m.valor)}</tspan></text>`,
    )
    .join('\n  ')}
  ${
    o.carimbo
      ? `<g transform="translate(${OG_LARGURA - 300} 150) rotate(-8)">
    <rect x="0" y="0" width="236" height="52" fill="${COR.papel}" stroke="#8b2e20" stroke-width="3" opacity="0.95"/>
    <text x="118" y="35" text-anchor="middle" font-family="${MONO}" font-size="22" font-weight="bold" letter-spacing="3" fill="#8b2e20">${esc(o.carimbo.toUpperCase())}</text>
  </g>`
      : ''
  }
</svg>`;
}
