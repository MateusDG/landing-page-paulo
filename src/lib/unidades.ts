/* ==========================================================================
   UNIDADES DE ÁREA

   O alqueire não é uma unidade única no Brasil: o valor muda por região.
   No Sul do Espírito Santo e no Caparaó a influência mineira faz predominar
   o alqueire de 4,84 ha (48.400 m²); no Norte quase todo mundo negocia em
   hectare.

   Por isso o site:
     1. usa HECTARE como unidade canônica em todo dado estruturado;
     2. oferece a conversão como leitura secundária, nunca como fonte;
     3. deixa o fator explícito na interface, para não repetir o mal-entendido
        que trava negociação.

   ▸ CONFIRMAR com o corretor o fator praticado em cada sub-região antes de
     publicar. Se ele trabalhar com mais de um, transforme FATOR em um mapa
     por território.
   ========================================================================== */

export const HECTARE_M2 = 10_000;

/** Alqueire mineiro — 48.400 m². Predominante no sul capixaba. */
export const ALQUEIRE_HA = 4.84;

export type Unidade = 'ha' | 'alq';

export const nomeUnidade: Record<Unidade, string> = {
  ha: 'hectare',
  alq: 'alqueire',
};

export const sufixoUnidade: Record<Unidade, string> = {
  ha: 'ha',
  alq: 'alq',
};

export function converter(areaHa: number, unidade: Unidade): number {
  return unidade === 'alq' ? areaHa / ALQUEIRE_HA : areaHa;
}

/**
 * Formata área com precisão proporcional ao tamanho: uma chácara de 1,8 ha
 * precisa da casa decimal; uma fazenda de 412 ha não precisa.
 */
export function formatarArea(areaHa: number, unidade: Unidade = 'ha'): string {
  const v = converter(areaHa, unidade);
  const casas = v < 10 ? 1 : v < 100 ? 1 : 0;
  return v.toLocaleString('pt-BR', {
    minimumFractionDigits: casas,
    maximumFractionDigits: casas,
  });
}

export function areaComSufixo(areaHa: number, unidade: Unidade = 'ha'): string {
  return `${formatarArea(areaHa, unidade)} ${sufixoUnidade[unidade]}`;
}

/** Texto do fator, exibido junto ao alternador. Evita ambiguidade. */
export const notaConversao = `1 alqueire = ${ALQUEIRE_HA.toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
})} ha (padrão mineiro, o mais usado no sul capixaba)`;
