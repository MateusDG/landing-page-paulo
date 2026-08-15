/* ==========================================================================
   TERRITÓRIOS DE ATUAÇÃO
   Quatro regiões, não 78 municípios. Município individual no mapa vira
   sujeira visual e não ajuda ninguém a decidir.

   Sobre a geometria:
   O contorno do estado e a partição em quatro territórios são desenhados à
   mão num sistema de coordenadas próprio (viewBox 0 0 420 660), derivado de
   uma projeção linear simples:
       x = (lon + 42.0) / 2.35 * 420        lon −42.0 … −39.65
       y = (−17.85 − lat) / 3.50 * 660      lat −17.85 … −21.35
   É uma silhueta de projeto, reconhecível e leve (~4 KB), não uma base
   cartográfica. Se um dia precisar de precisão de limite municipal, troque
   por um TopoJSON do IBGE e recalcule os `path`.
   ========================================================================== */

export type SlugTerritorio =
  | 'montanhas-capixabas'
  | 'norte-capixaba'
  | 'sul-e-caparao'
  | 'litoral-e-franja'
  | 'a-confirmar';

export interface Territorio {
  slug: SlugTerritorio;
  nome: string;
  nomeCurto: string;
  /** Polígono do território, recortado pelo contorno do estado via clipPath. */
  path: string;
  /** Ponto de ancoragem do rótulo dentro do mapa. */
  rotulo: { x: number; y: number };
  municipios: string[];
  /** Aparece na barra de territórios e no hover do mapa. */
  municipioReferencia: string;
  producao: string[];
  acesso: string[];
  relevo: string;
  resumo: string;
  /** Descrição curta e exclusiva para o resultado no Google. */
  descricaoSeo: string;
  /** Quem compra aqui, alimenta o filtro de atendimento. */
  perfis: string[];
  /** Nota de campo do corretor. Primeira pessoa. É o que nenhum portal tem. */
  notaDeCampo: string;
}

/** Contorno do Espírito Santo. Serve de clipPath para os quatro territórios. */
export const CONTORNO_ES =
  'M188 94 L250 9 L322 13 L366 57 L411 94 L409 145 L383 207 L407 283 ' +
  'L362 377 L308 464 L268 532 L223 575 L197 613 L170 651 L116 641 ' +
  'L80 603 L50 571 L27 509 L54 481 L80 434 L111 396 L134 349 L170 315 ' +
  'L152 273 L175 217 L193 164 L170 132 Z';

export const VIEWBOX_ES = '0 0 420 660';

export const territorios: Territorio[] = [
  {
    slug: 'norte-capixaba',
    nome: 'Norte Capixaba',
    nomeCurto: 'Norte',
    // Tudo acima da linha do rio Doce, que corta o estado quase na horizontal.
    path: 'M-20 -20 L440 -20 L440 336 L-20 303 Z',
    rotulo: { x: 295, y: 168 },
    municipios: [
      'Linhares', 'Sooretama', 'Jaguaré', 'São Mateus', 'Nova Venécia',
      'Vila Valério', 'Pinheiros', 'Montanha', 'Boa Esperança',
      'Conceição da Barra', 'Água Doce do Norte', 'Barra de São Francisco',
      'Ecoporanga', 'São Gabriel da Palha',
    ],
    municipioReferencia: 'Linhares',
    producao: [
      'Café conilon', 'Mamão', 'Coco', 'Pimenta-do-reino', 'Eucalipto',
      'Cacau', 'Pecuária de corte',
    ],
    acesso: ['BR-101 Norte', 'ES-137', 'ES-248'],
    relevo: 'Plano a suave-ondulado',
    resumo:
      'Onde ficam as áreas maiores e a agricultura em escala do estado. ' +
      'Maior polo de café conilon do país, com mamão, coco e eucalipto ' +
      'dividindo o mesmo eixo logístico da BR-101 e dos portos.',
    descricaoSeo:
      'Fazendas e imóveis rurais no Norte Capixaba, com áreas para produção, café conilon, pecuária e investimento. Veja as propriedades disponíveis.',
    perfis: ['produzir', 'investir'],
    notaDeCampo:
      'Aqui o preço não é feito pelo tamanho da área, é feito pela água. ' +
      'Duas áreas vizinhas do mesmo tamanho podem ter 40% de diferença de ' +
      'valor porque uma tem água disponível o ano todo e a outra depende de ' +
      'chuva. Esse é um dos primeiros pontos que observo no Norte.',
  },
  {
    slug: 'montanhas-capixabas',
    nome: 'Montanhas Capixabas',
    nomeCurto: 'Montanhas',
    path: 'M-20 303 L300 326 L245 450 L-20 470 Z',
    rotulo: { x: 190, y: 388 },
    municipios: [
      'Domingos Martins', 'Marechal Floriano', 'Venda Nova do Imigrante',
      'Santa Teresa', 'Santa Maria de Jetibá', 'Afonso Cláudio',
      'Conceição do Castelo', 'Castelo', 'Alfredo Chaves', 'Brejetuba', 'Ibiraçu',
    ],
    municipioReferencia: 'Domingos Martins',
    producao: [
      'Café arábica de altitude', 'Hortaliças', 'Morango', 'Flores',
      'Gado leiteiro', 'Vinho e fermentados artesanais',
    ],
    acesso: ['BR-262', 'ES-166', 'ES-164'],
    relevo: 'Montanhoso, altitudes de 600 a 1.200 m',
    resumo:
      'Colonização italiana, alemã e pomerana, agroturismo consolidado e ' +
      'clima ameno o ano todo. Propriedades menores e muito parceladas por ' +
      'herança familiar, o que torna importante conhecer bem as características ' +
      'e os limites de cada área.',
    descricaoSeo:
      'Sítios, chácaras e imóveis rurais nas Montanhas Capixabas, incluindo Santa Teresa, Domingos Martins e Venda Nova do Imigrante.',
    perfis: ['morar', 'lazer', 'turismo'],
    notaDeCampo:
      'Muita área boa aqui vem de partilha de família e tem características ' +
      'próprias de acesso e ocupação. Conhecer o local e conversar com quem ' +
      'vive na região ajuda a tomar uma decisão segura.',
  },
  {
    slug: 'sul-e-caparao',
    nome: 'Sul e Caparaó',
    nomeCurto: 'Sul e Caparaó',
    path: 'M-20 470 L245 450 L205 545 L150 680 L-20 680 Z',
    rotulo: { x: 118, y: 548 },
    municipios: [
      'Cachoeiro de Itapemirim', 'Alegre', 'Guaçuí', 'Muqui',
      'Mimoso do Sul', 'Dores do Rio Preto', 'Ibitirama', 'Iúna',
      'Muniz Freire', 'Bom Jesus do Norte', 'São José do Calçado',
    ],
    municipioReferencia: 'Alegre',
    producao: [
      'Café arábica', 'Café especial de altitude', 'Gado leiteiro',
      'Mármore e granito (eixo Cachoeiro)',
    ],
    acesso: ['BR-101 Sul', 'BR-482', 'BR-484'],
    relevo: 'Ondulado a montanhoso, com o maciço do Caparaó a oeste',
    resumo:
      'Herança cafeeira antiga, sedes históricas e forte influência mineira ' +
      'no jeito de negociar. O Caparaó puxa café especial com pontuação e ' +
      'turismo de montanha; o eixo de Cachoeiro puxa rocha ornamental.',
    descricaoSeo:
      'Fazendas, sítios e imóveis rurais no Sul do Espírito Santo e Caparaó, com opções para café, pecuária, turismo e investimento.',
    perfis: ['produzir', 'investir', 'turismo'],
    notaDeCampo:
      'É a região onde mais se fala em alqueire e menos em hectare. ' +
      'Já vi negociação travar uma semana porque comprador e vendedor ' +
      'usavam medidas diferentes com o mesmo nome. Eu fecho tudo em hectare ' +
      'e converto na frente dos dois.',
  },
  {
    slug: 'litoral-e-franja',
    nome: 'Litoral e Franja Metropolitana',
    nomeCurto: 'Litoral',
    path: 'M300 326 L440 336 L440 680 L150 680 L205 545 L245 450 Z',
    rotulo: { x: 287, y: 437 },
    municipios: [
      'Guarapari', 'Anchieta', 'Piúma', 'Iconha', 'Rio Novo do Sul',
      'Itapemirim', 'Marataízes', 'Presidente Kennedy', 'Viana',
      'Santa Leopoldina', 'Fundão', 'Aracruz',
    ],
    municipioReferencia: 'Guarapari',
    producao: [
      'Coco', 'Banana', 'Pecuária leiteira', 'Olericultura',
      'Áreas de transição e estoque de terra',
    ],
    acesso: ['ES-060 (Rodovia do Sol)', 'BR-101', 'ES-080'],
    relevo: 'Plano a ondulado, com tabuleiros costeiros',
    resumo:
      'Proximidade da Grande Vitória, pressão de urbanização e demanda ' +
      'constante por chácara de fim de semana. É também onde a expectativa ' +
      'especulativa mais distorce o preço pedido.',
    descricaoSeo:
      'Chácaras, terrenos e imóveis rurais no litoral e na região próxima à Grande Vitória, com opções para moradia, lazer e investimento.',
    perfis: ['lazer', 'investir', 'morar'],
    notaDeCampo:
      'É a região onde eu mais recuso área. Muita coisa é vendida como ' +
      '"rural" mas já está dentro do perímetro urbano do município, com ' +
      'IPTU e não ITR, o que muda o imposto, a possibilidade de ' +
      'desmembramento e o crédito. Confiro isso na prefeitura antes de ' +
      'qualquer conversa de preço.',
  },
];

export const porSlug = (slug: string) =>
  territorios.find((t) => t.slug === slug);

export const rotuloTerritorio = (slug: string) =>
  slug === 'a-confirmar' ? 'Localização a confirmar' : porSlug(slug)?.nome ?? slug;
