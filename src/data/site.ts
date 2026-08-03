/* ==========================================================================
   DADOS DO SITE
   ┌────────────────────────────────────────────────────────────────────────┐
   │ ▸ TODO valor marcado com «PREENCHER» é de EXEMPLO e precisa ser        │
   │   substituído antes de publicar. Enquanto DADOS_DE_EXEMPLO for true,   │
   │   o site mostra um aviso em desenvolvimento. Ver README.md §"Antes de  │
   │   publicar".                                                           │
   └────────────────────────────────────────────────────────────────────────┘
   ========================================================================== */

export const DADOS_DE_EXEMPLO = true; // PREENCHER: virar false ao publicar

export const corretor = {
  nome: 'Nome do Corretor', // PREENCHER
  nomeCurto: 'Nome do Corretor', // PREENCHER
  papel: 'Corretor de imóveis rurais',
  creci: '00000-F', // PREENCHER — obrigatório em toda peça publicitária (Lei 6.530/78)
  cidadeBase: 'Venda Nova do Imigrante', // PREENCHER
  uf: 'ES',
  desde: 2011, // PREENCHER
  email: 'contato@exemplo.com.br', // PREENCHER
  /* Formato internacional, só dígitos: 55 + DDD + número.
     Sobrescrito por PUBLIC_WHATSAPP no .env. */
  whatsapp: '5527999999999', // PREENCHER
  whatsappVisivel: '(27) 99999-9999', // PREENCHER
  /* SLA declarado no site. Só prometa o que você cumpre —
     prometer resposta e falhar é pior que não prometer. */
  sla: 'Respondo até as 20h do mesmo dia.',
} as const;

/* Números da ficha "Em campo".
   Estes são o ativo de credibilidade da página inteira: precisam ser
   VERDADEIROS e verificáveis pelo próprio corretor. Números redondos
   ("500+ clientes") não convencem ninguém — números contados, sim.
   A linha "recusadas" é a mais valiosa da página. Não remova. */
export const emCampo = [
  { rotulo: 'Desde', valor: '2011' }, // PREENCHER
  { rotulo: 'Municípios visitados', valor: '63' }, // PREENCHER
  { rotulo: 'Áreas andadas a pé', valor: '480' }, // PREENCHER
  { rotulo: 'Matrículas lidas', valor: '1.100' }, // PREENCHER
  { rotulo: 'Áreas que recusei', valor: '71' }, // PREENCHER
  { rotulo: 'Km rodados em 2025', valor: '41.300' }, // PREENCHER
] as const;

export const navPrincipal = [
  { rotulo: 'Carteira', href: '/imoveis/' },
  { rotulo: 'Regiões', href: '/#regioes' },
  { rotulo: 'Método', href: '/#metodo' },
  { rotulo: 'Guias', href: '/guia/' },
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
  guias: [
    { rotulo: 'Comprar fazenda no ES', href: '/guia/comprar-fazenda-no-espirito-santo/' },
    { rotulo: 'Documentos do imóvel rural', href: '/guia/documentos-do-imovel-rural/' },
    { rotulo: 'Água e outorga', href: '/guia/agua-e-outorga/' },
    { rotulo: 'Custo de manter uma chácara', href: '/guia/quanto-custa-manter-uma-chacara/' },
    { rotulo: 'Glossário do comprador rural', href: '/guia/glossario-do-comprador-rural/' },
  ],
  site: [
    { rotulo: 'Diário de campo', href: '/diario/' },
    { rotulo: 'Quero vender minha área', href: '/quero-vender/' },
    { rotulo: 'Sobre', href: '/sobre/' },
    { rotulo: 'Privacidade', href: '/privacidade/' },
    { rotulo: 'Termos de uso', href: '/termos/' },
  ],
} as const;

/* Coordenada exibida no topo do hero — o "tell" cartográfico do sistema.
   Vale usar a do escritório ou a da cidade-base. */
export const coordenadaBase = { texto: '20°19′S 40°20′W', local: 'Vitória, ES' };

export const meta = {
  titulo: `${corretor.nome} — corretor de imóveis rurais no Espírito Santo`,
  descricao:
    'Fazendas, chácaras, sítios e terrenos rurais no Espírito Santo. ' +
    'Ando a área, leio a matrícula e confiro o CAR antes de anunciar. ' +
    'Montanhas, Norte, Sul e Caparaó e Litoral.',
  locale: 'pt_BR',
} as const;
