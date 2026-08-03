/* ==========================================================================
   GLOSSÁRIO DO COMPRADOR RURAL

   Serve a dois públicos ao mesmo tempo: quem tem dúvida real antes de
   comprar, e o buscador (cauda longa: "o que é CAR", "CCIR obrigatório",
   "módulo fiscal ES"). Cada verbete vira também um item de FAQPage no
   JSON-LD.

   ▸ REVISÃO JURÍDICA OBRIGATÓRIA antes de publicar. O conteúdo abaixo é
     informativo e reflete a prática corrente; prazos, faixas e
     obrigatoriedades mudam. O disclaimer da seção 17 do plano é parte da
     entrega, não enfeite.
   ========================================================================== */

export interface Verbete {
  termo: string;
  sigla?: string;
  resumo: string;
  /** Por que o comprador deveria se importar — não é definição, é consequência. */
  porQueImporta: string;
  destaqueNaHome?: boolean;
}

export const glossario: Verbete[] = [
  {
    termo: 'Matrícula do imóvel',
    resumo:
      'É a certidão do registro de imóveis que descreve a área, os limites e ' +
      'toda a história de quem foi dono, incluindo ônus e gravames.',
    porQueImporta:
      'É o único documento que diz de quem o imóvel é. Contrato de gaveta, ' +
      'recibo e escritura antiga não substituem. Se a área da matrícula não ' +
      'bate com a área que te mostraram, você está comprando outra coisa.',
    destaqueNaHome: true,
  },
  {
    termo: 'Cadastro Ambiental Rural',
    sigla: 'CAR',
    resumo:
      'Registro eletrônico obrigatório de todo imóvel rural, feito no SICAR, ' +
      'em que se declaram as áreas de reserva legal, APP e uso consolidado.',
    porQueImporta:
      'Sem CAR ativo, o imóvel trava para crédito rural e para regularização. ' +
      'E o detalhe que quase ninguém confere: importa não só se existe CAR, ' +
      'mas ONDE a reserva legal foi proposta dentro da área.',
    destaqueNaHome: true,
  },
  {
    termo: 'Reserva legal e APP',
    resumo:
      'Reserva legal é o percentual da propriedade que deve ser mantido com ' +
      'vegetação nativa. APP é a área de preservação permanente — margem de ' +
      'curso d’água, topo de morro, nascente.',
    porQueImporta:
      'Juntas, definem quanto da área você pode efetivamente usar. Uma área ' +
      'de 40 ha com 20% de reserva e 6 ha de APP não é uma área de 40 ha ' +
      'produtivos — e o preço por hectare tem que refletir isso.',
    destaqueNaHome: true,
  },
  {
    termo: 'Georreferenciamento',
    resumo:
      'Levantamento técnico que define o perímetro do imóvel com coordenadas ' +
      'certificadas pelo INCRA, no sistema SIGEF.',
    porQueImporta:
      'É exigência para registrar a transmissão em boa parte dos casos, com ' +
      'prazos escalonados por faixa de área. Comprar área sem ' +
      'georreferenciamento significa assumir esse custo e esse prazo — e ' +
      'descobrir divergência de área no meio do processo.',
    destaqueNaHome: true,
  },
  {
    termo: 'Certificado de Cadastro de Imóvel Rural',
    sigla: 'CCIR',
    resumo:
      'Documento emitido pelo INCRA que comprova a inscrição do imóvel no ' +
      'cadastro rural.',
    porQueImporta:
      'É exigido para escritura, desmembramento, arrendamento e hipoteca. ' +
      'CCIR desatualizado costuma indicar que ninguém mexeu na regularização ' +
      'do imóvel há anos.',
  },
  {
    termo: 'Imposto sobre a Propriedade Territorial Rural',
    sigla: 'ITR',
    resumo:
      'Imposto federal anual sobre imóvel rural, declarado pelo próprio ' +
      'proprietário.',
    porQueImporta:
      'A dívida acompanha o imóvel. Se o vendedor deve sete exercícios, quem ' +
      'compra herda o problema — a menos que isso seja levantado e abatido ' +
      'na negociação.',
    destaqueNaHome: true,
  },
  {
    termo: 'Módulo fiscal',
    resumo:
      'Unidade de medida agrária definida por município, que serve de ' +
      'referência para classificar o tamanho da propriedade. No Espírito ' +
      'Santo varia conforme o município.',
    porQueImporta:
      'Define se a propriedade é pequena, média ou grande, o que muda o ' +
      'acesso a linhas de crédito, a isenção de ITR e o limite para ' +
      'desmembrar a área. Sempre confirmar o valor do município na tabela ' +
      'oficial do INCRA.',
  },
  {
    termo: 'Outorga de uso da água',
    resumo:
      'Autorização para captar água de rio, córrego, nascente ou poço. No ' +
      'Espírito Santo, quando o corpo hídrico é estadual, a competência é do ' +
      'órgão gestor de recursos hídricos do estado.',
    porQueImporta:
      'Área produtiva sem outorga é passivo, não detalhe burocrático. E é o ' +
      'item que mais aparece pendente nas fazendas do Norte — justamente ' +
      'onde a água define o preço.',
    destaqueNaHome: true,
  },
  {
    termo: 'Servidão de passagem',
    resumo:
      'Direito de passar por imóvel de terceiro para chegar ao seu, quando ' +
      'devidamente constituído e registrado na matrícula.',
    porQueImporta:
      'Acesso "que sempre foi assim" e acesso registrado são coisas ' +
      'diferentes. Se o único caminho até a área passa pelo vizinho e não ' +
      'está na matrícula, você comprou uma área sem entrada garantida.',
    destaqueNaHome: true,
  },
  {
    termo: 'Alqueire e hectare',
    resumo:
      'Hectare é a unidade legal, com 10.000 m². Alqueire é medida ' +
      'costumeira, cujo valor muda de região para região do país.',
    porQueImporta:
      'Negociação em alqueire entre pessoas de regiões diferentes já travou ' +
      'muito negócio. Fecho tudo em hectare e converto na frente das duas ' +
      'partes, com o fator praticado ali.',
  },
  {
    termo: 'Desmembramento rural',
    resumo:
      'Divisão de um imóvel rural em duas ou mais matrículas.',
    porQueImporta:
      'Não é livre: esbarra no módulo fiscal do município e passa por ' +
      'manifestação do INCRA. Quem compra pensando em "depois eu divido e ' +
      'vendo em partes" precisa checar isso antes, não depois.',
  },
  {
    termo: 'Aquisição por estrangeiro',
    resumo:
      'A compra de imóvel rural por pessoa física ou jurídica estrangeira é ' +
      'objeto de restrição legal específica no Brasil.',
    porQueImporta:
      'Há limites de área e exigências de autorização conforme o caso. ' +
      'Quem vive fora ou tem sociedade com participação estrangeira precisa ' +
      'tratar disso no começo da conversa, não na hora da escritura.',
  },
];

export const disclaimerGlossario =
  'Conteúdo informativo, escrito para orientar a conversa. Não substitui ' +
  'consulta a advogado, engenheiro agrônomo, cartório e órgãos competentes.';
