export const DADOS_DE_EXEMPLO = false;

export const corretor = {
  nome: 'Valdecir Francisco',
  nomeCurto: 'Valdecir Francisco',
  papel: 'Compra e Venda de Imóveis',
  uf: 'ES',
  /* Formato internacional, só dígitos: 55 + DDD + número.
     Sobrescrito por PUBLIC_WHATSAPP no .env. */
  whatsapp: '5527999309535',
} as const;

export const navPrincipal = [
  { rotulo: 'Imóveis', href: '/imoveis/' },
  { rotulo: 'Regiões', href: '/#regioes' },
  { rotulo: 'Quero vender', href: '/quero-vender/' },
] as const;

export const navRodape = {
  carteira: [
    { rotulo: 'Imóveis rurais à venda', href: '/imoveis/' },
    { rotulo: 'Montanhas Capixabas', href: '/regiao/montanhas-capixabas/' },
    { rotulo: 'Norte Capixaba', href: '/regiao/norte-capixaba/' },
    { rotulo: 'Sul e Caparaó', href: '/regiao/sul-e-caparao/' },
    { rotulo: 'Litoral e Franja', href: '/regiao/litoral-e-franja/' },
  ],
  site: [
    { rotulo: 'Diário de campo', href: '/diario/' },
    { rotulo: 'Quero vender minha área', href: '/quero-vender/' },
    { rotulo: 'Sobre', href: '/sobre/' },
    { rotulo: 'Privacidade', href: '/privacidade/' },
    { rotulo: 'Termos de uso', href: '/termos/' },
  ],
} as const;

export const meta = {
  titulo: `Imóveis rurais à venda no Espírito Santo | ${corretor.nome}`,
  descricao:
    'Fazendas, sítios, chácaras e terrenos rurais à venda no Espírito Santo. ' +
    `Veja fotos, localização, área, acesso e fale diretamente com ${corretor.nome}.`,
  locale: 'pt_BR',
} as const;
