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
  { rotulo: 'Carteira', href: '/imoveis/' },
  { rotulo: 'Regiões', href: '/#regioes' },
  { rotulo: 'Quero vender', href: '/quero-vender/' },
] as const;

export const navRodape = {
  carteira: [
    { rotulo: 'Todas as áreas', href: '/imoveis/' },
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
  titulo: `${corretor.nome}, compra e venda de imóveis no Espírito Santo`,
  descricao:
    'Compra e venda de fazendas, chácaras, sítios e terrenos rurais no Espírito Santo. ' +
    'Atendimento direto em quatro regiões do estado.',
  locale: 'pt_BR',
} as const;
