export const DADOS_DE_EXEMPLO = false;

export const corretor = {
  nome: 'Valdecir Francisco',
  nomeCurto: 'Valdecir Francisco',
  papel: 'Corretor de imóveis rurais',
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
  titulo: `${corretor.nome}, corretor de imóveis rurais no Espírito Santo`,
  descricao:
    'Fazendas, chácaras, sítios e terrenos rurais no Espírito Santo. ' +
    'Ando a área, leio a matrícula e confiro o CAR antes de anunciar. ' +
    'Montanhas, Norte, Sul e Caparaó e Litoral.',
  locale: 'pt_BR',
} as const;
