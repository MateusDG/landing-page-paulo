/* ==========================================================================
   BRIEFING, a conversão principal do site.

   Substitui o formulário de contato. Uma pergunta por tela, resposta por
   clique, digitação só no último passo. As respostas viram uma mensagem
   estruturada no WhatsApp, o corretor recebe um lead qualificado e
   rastreável em vez de "oi, tem chácara?".

   As cinco finalidades espelham as cinco personas do plano. É o que permite
   servir públicos muito diferentes sem escrever nada genérico.
   ========================================================================== */

export type Finalidade = 'produzir' | 'morar' | 'lazer' | 'investir' | 'turismo';

export interface Opcao {
  valor: string;
  rotulo: string;
  /** Linha de apoio, desambigua sem virar texto de ajuda. */
  detalhe?: string;
}

export interface Passo {
  id: string;
  numero: number;
  pergunta: string;
  /** Nota curta do corretor. Mantém a voz humana dentro do formulário. */
  nota?: string;
  tipo: 'unica' | 'multipla' | 'contato';
  opcoes?: Opcao[];
}

export const passos: Passo[] = [
  {
    id: 'finalidade',
    numero: 1,
    pergunta: 'O que você quer fazer com a área?',
    nota: 'É a pergunta que muda todo o resto. Não tem resposta errada.',
    tipo: 'unica',
    opcoes: [
      { valor: 'produzir', rotulo: 'Produzir', detalhe: 'Café, gado, lavoura, floresta' },
      { valor: 'morar', rotulo: 'Morar', detalhe: 'Sair da cidade, morar no campo' },
      { valor: 'lazer', rotulo: 'Fim de semana', detalhe: 'Chácara de lazer, casa na serra' },
      { valor: 'investir', rotulo: 'Investir', detalhe: 'Reserva de valor, arrendamento' },
      { valor: 'turismo', rotulo: 'Turismo', detalhe: 'Pousada, glamping, agroturismo' },
    ],
  },
  {
    id: 'regiao',
    numero: 2,
    pergunta: 'Onde faz sentido pra você?',
    nota: 'Pode marcar mais de uma. Se não souber, marque a última, eu sugiro.',
    tipo: 'multipla',
    opcoes: [
      { valor: 'montanhas-capixabas', rotulo: 'Montanhas Capixabas', detalhe: 'Domingos Martins, Venda Nova, Santa Teresa' },
      { valor: 'norte-capixaba', rotulo: 'Norte Capixaba', detalhe: 'Linhares, Jaguaré, São Mateus' },
      { valor: 'sul-e-caparao', rotulo: 'Sul e Caparaó', detalhe: 'Cachoeiro, Alegre, Guaçuí' },
      { valor: 'litoral-e-franja', rotulo: 'Litoral e Franja', detalhe: 'Guarapari, Anchieta, Santa Leopoldina' },
      { valor: 'indiferente', rotulo: 'Ainda não sei', detalhe: 'Quero sugestão' },
    ],
  },
  {
    id: 'area',
    numero: 3,
    pergunta: 'Que tamanho você tem em mente?',
    nota: 'Em hectare. 1 ha = 10.000 m², mais ou menos um campo de futebol e meio.',
    tipo: 'unica',
    opcoes: [
      { valor: 'ate-5', rotulo: 'Até 5 ha' },
      { valor: '5-20', rotulo: '5 a 20 ha' },
      { valor: '20-50', rotulo: '20 a 50 ha' },
      { valor: '50-150', rotulo: '50 a 150 ha' },
      { valor: '150+', rotulo: 'Acima de 150 ha' },
      { valor: 'depende', rotulo: 'Depende do que a área oferece' },
    ],
  },
  {
    id: 'investimento',
    numero: 4,
    pergunta: 'Qual faixa de investimento?',
    nota: 'Serve para eu não te mostrar o que não faz sentido. Fica entre nós.',
    tipo: 'unica',
    opcoes: [
      { valor: 'ate-300k', rotulo: 'Até R$ 300 mil' },
      { valor: '300k-700k', rotulo: 'R$ 300 a 700 mil' },
      { valor: '700k-1.5m', rotulo: 'R$ 700 mil a 1,5 milhão' },
      { valor: '1.5m-4m', rotulo: 'R$ 1,5 a 4 milhões' },
      { valor: '4m+', rotulo: 'Acima de R$ 4 milhões' },
      { valor: 'conversar', rotulo: 'Prefiro conversar sobre isso' },
    ],
  },
  {
    id: 'prazo',
    numero: 5,
    pergunta: 'E quando?',
    tipo: 'contato',
    opcoes: [
      { valor: 'agora', rotulo: 'Já estou procurando' },
      { valor: '6-meses', rotulo: 'Nos próximos 6 meses' },
      { valor: 'estudando', rotulo: 'Estudando o mercado' },
      { valor: 'vender', rotulo: 'Tenho área para vender também' },
    ],
  },
];

/** Rótulos legíveis para montar a mensagem do WhatsApp. */
export const rotulos: Record<string, string> = Object.fromEntries(
  passos.flatMap((p) => (p.opcoes ?? []).map((o) => [o.valor, o.rotulo])),
);

export const textoSucesso = {
  titulo: 'Recebi.',
  corpo:
    'Abri o WhatsApp com o seu briefing já escrito. Se não abriu, o botão ' +
    'abaixo tenta de novo.',
  sugestoes: 'Enquanto isso, essas áreas batem com o que você marcou:',
};
