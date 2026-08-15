/* ==========================================================================
   FORMATAÇÃO, pt-BR em todo lugar, sem exceção.
   ========================================================================== */

const MESES = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
];

/** 2026-07-12 → "12.jul.2026", formato de carimbo, não de post de blog. */
export function dataCurta(d: Date | string): string {
  const data = typeof d === 'string' ? new Date(`${d}T00:00:00Z`) : d;
  const dia = String(data.getUTCDate()).padStart(2, '0');
  return `${dia}.${MESES[data.getUTCMonth()]}.${data.getUTCFullYear()}`;
}

/** 2024-11-05 → "11/2024", usado no carimbo VENDIDA. */
export function mesAno(d: Date | string): string {
  const data = typeof d === 'string' ? new Date(`${d}T00:00:00Z`) : d;
  return `${String(data.getUTCMonth() + 1).padStart(2, '0')}/${data.getUTCFullYear()}`;
}

export function dataLonga(d: Date | string): string {
  const data = typeof d === 'string' ? new Date(`${d}T00:00:00Z`) : d;
  return data.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** ISO puro para <time datetime> e JSON-LD. */
export function iso(d: Date | string): string {
  const data = typeof d === 'string' ? new Date(`${d}T00:00:00Z`) : d;
  return data.toISOString().slice(0, 10);
}

/**
 * Preço, sempre o valor exato.
 *
 * A tentação é escrever "R$ 1,5 milhão" porque lê melhor. Mas R$ 1.450.000
 * arredondado para 1,5 milhão esconde R$ 50 mil, e este site inteiro se
 * sustenta em dizer o número certo. Se o preço vale para negociar, vale
 * para escrever por extenso.
 *
 * `null` vira "sob consulta", nunca a string seca "Consulte".
 */
export function preco(valor: number | null | undefined): string {
  if (valor == null) return 'Valor sob consulta';
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  });
}

/** Preço por hectare, o número que o comprador de área produtiva compara. */
export function precoPorHa(valor: number | null | undefined, areaHa: number): string | null {
  if (valor == null || !areaHa) return null;
  return `${(valor / areaHa).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  })}/ha`;
}

/** Índice de seção: 1 → "01". Parte da linguagem visual. */
export function indice(n: number): string {
  return String(n).padStart(2, '0');
}

export function numero(n: number): string {
  return n.toLocaleString('pt-BR');
}

/** "1 área" / "9 áreas", concordância importa num site que vende precisão. */
export function plural(n: number, singular: string, plural: string): string {
  return `${numero(n)} ${n === 1 ? singular : plural}`;
}

export const areas = (n: number) => plural(n, 'área', 'áreas');
export const municipios = (n: number) => plural(n, 'município', 'municípios');

/** Valor estável para parâmetros de busca e atributos de filtro. */
export function slugBusca(valor: string): string {
  return valor
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** "7 km de asfalto + 4 km de terra" a partir dos dois números. */
export function descreverAcesso(asfaltoKm: number, terraKm: number): string {
  const partes: string[] = [];
  if (asfaltoKm > 0) partes.push(`${numero(asfaltoKm)} km de asfalto`);
  if (terraKm > 0) partes.push(`${numero(terraKm)} km de terra`);
  if (partes.length === 0) return 'Acesso a confirmar';
  return partes.join(' + ');
}
