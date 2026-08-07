export const tiposImovel = [
  { valor: 'chacara', rotulo: 'Chácara', plural: 'Chácaras' },
  { valor: 'sitio', rotulo: 'Sítio', plural: 'Sítios' },
  { valor: 'fazenda', rotulo: 'Fazenda', plural: 'Fazendas' },
  { valor: 'terreno-rural', rotulo: 'Terreno rural', plural: 'Terrenos rurais' },
] as const;

export type TipoImovel = (typeof tiposImovel)[number]['valor'];

export function rotuloTipoImovel(tipo: string): string {
  return tiposImovel.find((item) => item.valor === tipo)?.rotulo ?? tipo;
}

export const caracteristicasImovel = [
  { valor: 'agua', rotulo: 'Com água' },
  { valor: 'nascente', rotulo: 'Com nascente' },
  { valor: 'energia', rotulo: 'Com energia' },
  { valor: 'casa', rotulo: 'Com casa' },
  { valor: 'cafe', rotulo: 'Com café' },
] as const;
