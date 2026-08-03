/* ==========================================================================
   PROTOCOLO DE CAMPO, os 14 pontos de verificação.

   Esta é a seção mais importante do site. É ela que separa "corretor" de
   "corretor que eu quero". Duas regras:

   1. São 14 e não 10 ou 15 porque número redondo parece inventado e número
      contado parece contado. Não arredonde.
   2. O texto precisa refletir o processo REAL do corretor. Se ele não faz
      um dos pontos, tire o ponto, não invente processo.

   ▸ REVISAR com o corretor e com advogado agrário/imobiliário atuante no ES
     antes de publicar. As nomenclaturas seguem a prática corrente, mas
     prazos e obrigatoriedades mudam com a legislação.
   ========================================================================== */

export interface PontoProtocolo {
  n: number;
  titulo: string;
  detalhe: string;
}

export const protocoloDocumental: PontoProtocolo[] = [
  {
    n: 1,
    titulo: 'Matrícula atualizada',
    detalhe:
      'Certidão emitida há menos de 30 dias, no cartório do registro de ' +
      'imóveis competente. Conferir área registrada contra área declarada.',
  },
  {
    n: 2,
    titulo: 'Cadeia dominial',
    detalhe:
      'Três titulares para trás, no mínimo. É onde aparecem inventário sem ' +
      'partilha, doação com cláusula e venda a non domino.',
  },
  {
    n: 3,
    titulo: 'Ônus, penhora e usufruto',
    detalhe:
      'Hipoteca, alienação fiduciária, penhora trabalhista, usufruto ' +
      'vitalício de terceiro. Tudo consta na matrícula, se alguém olhar.',
  },
  {
    n: 4,
    titulo: 'CCIR e ITR',
    detalhe:
      'CCIR emitido pelo INCRA e comprovantes de ITR dos últimos exercícios. ' +
      'Dívida de ITR acompanha o imóvel, não o antigo dono.',
  },
  {
    n: 5,
    titulo: 'CAR e reserva legal',
    detalhe:
      'Inscrição ativa no SICAR e, principalmente, ONDE a reserva legal está ' +
      'proposta. Reserva em cima da melhor lavoura é problema caro.',
  },
  {
    n: 6,
    titulo: 'Georreferenciamento',
    detalhe:
      'Certificação do perímetro junto ao INCRA (SIGEF). Sem ela a ' +
      'transmissão pode travar no cartório. Confirmar a exigência vigente ' +
      'para a faixa de área do imóvel.',
  },
  {
    n: 7,
    titulo: 'Outorga de uso da água',
    detalhe:
      'No ES a outorga é estadual. Captação de córrego, nascente ou poço ' +
      'sem outorga é passivo, e é o que mais aparece em área produtiva.',
  },
];

export const protocoloFisico: PontoProtocolo[] = [
  {
    n: 8,
    titulo: 'Perímetro andado',
    detalhe:
      'A pé ou de moto, com o GPS ligado, comparando com a planta. ' +
      'Cerca fora de divisa é a origem de metade dos litígios de vizinhança.',
  },
  {
    n: 9,
    titulo: 'Água conferida em campo',
    detalhe:
      'Ver a nascente, o córrego ou o poço com os próprios olhos, e perguntar ' +
      'como ficam em setembro, não em março.',
  },
  {
    n: 10,
    titulo: 'Acesso testado',
    detalhe:
      'Quantos quilômetros de asfalto, quantos de terra, e se passa carro ' +
      'comum em dia de chuva. De preferência indo em dia de chuva.',
  },
  {
    n: 11,
    titulo: 'Energia',
    detalhe:
      'Monofásica ou trifásica, distância do padrão até a sede, e o custo ' +
      'estimado de estender a rede se não chegar.',
  },
  {
    n: 12,
    titulo: 'Sinal de celular',
    detalhe:
      'Medido no local, por operadora, na sede e no ponto mais baixo da área. ' +
      'Vira questão de segurança em propriedade isolada.',
  },
  {
    n: 13,
    titulo: 'Vizinhança e histórico',
    detalhe:
      'Conflito de divisa, servidão de fato sem registro, passagem de gado, ' +
      'aplicação de defensivo em área lindeira.',
  },
  {
    n: 14,
    titulo: 'Conversa com dois vizinhos',
    detalhe:
      'O ponto que ninguém faz e que mais entrega informação. Vizinho sabe ' +
      'de enchente, de disputa e de por que a área está à venda.',
  },
];

export const protocolo = [...protocoloDocumental, ...protocoloFisico];

/** Vai abaixo da lista. É a frase que compra confiança. */
export const notaProtocolo =
  'Se algum ponto não fecha, eu te digo qual é antes da visita. Já deixei de ' +
  'anunciar área boa porque a reserva legal estava proposta em cima do café ' +
  'e o dono não quis remanejar.';
