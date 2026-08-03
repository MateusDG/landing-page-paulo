/* ==========================================================================
   ÍNDICE DE DESLOCAMENTO
   Tempo real porta a porta a partir de Vitória, medido pelo corretor.

   Por que isso existe: "excelente localização" não informa nada. "1h40, com
   5 km de terra que passa carro comum o ano todo" resolve a objeção nº 1 de
   quem compra chácara. É conteúdo impossível de gerar sem estar lá, e por
   isso é o tipo de coisa que ganha link e print no grupo da família.

   ▸ PREENCHER com medições reais. Os valores abaixo são de exemplo.
   ========================================================================== */

export interface LinhaDeslocamento {
  municipio: string;
  territorio: string;
  /** Tempo porta a porta a partir do centro de Vitória. */
  tempo: string;
  km: number;
  /** Percentual do trajeto em asfalto. */
  asfalto: number;
  /** Observação de campo, condição real, não descrição de folheto. */
  nota: string;
}

export const deslocamento: LinhaDeslocamento[] = [
  { municipio: 'Viana', territorio: 'Litoral', tempo: '0h35', km: 28, asfalto: 100, nota: 'BR-262, trecho urbano no início' },
  { municipio: 'Santa Leopoldina', territorio: 'Litoral', tempo: '1h00', km: 46, asfalto: 100, nota: 'ES-080, curvas fechadas' },
  { municipio: 'Domingos Martins', territorio: 'Montanhas', tempo: '1h05', km: 47, asfalto: 100, nota: 'BR-262, subida da serra bem sinalizada' },
  { municipio: 'Guarapari', territorio: 'Litoral', tempo: '1h05', km: 54, asfalto: 100, nota: 'ES-060; no verão some 40 min no trânsito' },
  { municipio: 'Marechal Floriano', territorio: 'Montanhas', tempo: '1h15', km: 57, asfalto: 100, nota: 'Sem observação' },
  { municipio: 'Santa Teresa', territorio: 'Montanhas', tempo: '1h20', km: 78, asfalto: 98, nota: 'Neblina densa de junho a agosto' },
  { municipio: 'Anchieta', territorio: 'Litoral', tempo: '1h25', km: 78, asfalto: 100, nota: 'Sem observação' },
  { municipio: 'Santa Maria de Jetibá', territorio: 'Montanhas', tempo: '1h30', km: 82, asfalto: 96, nota: 'Trânsito de caminhão de aviário' },
  { municipio: 'Venda Nova do Imigrante', territorio: 'Montanhas', tempo: '1h35', km: 105, asfalto: 100, nota: 'BR-262 duplicada até Marechal' },
  { municipio: 'Alfredo Chaves', territorio: 'Montanhas', tempo: '1h40', km: 89, asfalto: 92, nota: 'Últimos km de terra, passa o ano todo' },
  { municipio: 'Iconha', territorio: 'Litoral', tempo: '1h45', km: 96, asfalto: 100, nota: 'Sem observação' },
  { municipio: 'Conceição do Castelo', territorio: 'Montanhas', tempo: '1h50', km: 118, asfalto: 100, nota: 'Sem observação' },
  { municipio: 'Afonso Cláudio', territorio: 'Montanhas', tempo: '2h00', km: 132, asfalto: 97, nota: 'ES-164, trecho de obra recorrente' },
  { municipio: 'Linhares', territorio: 'Norte', tempo: '2h10', km: 138, asfalto: 100, nota: 'BR-101 duplicada' },
  { municipio: 'Castelo', territorio: 'Montanhas', tempo: '2h15', km: 143, asfalto: 100, nota: 'Sem observação' },
  { municipio: 'Sooretama', territorio: 'Norte', tempo: '2h25', km: 156, asfalto: 100, nota: 'Atenção à travessia de fauna na reserva' },
  { municipio: 'Cachoeiro de Itapemirim', territorio: 'Sul e Caparaó', tempo: '2h30', km: 141, asfalto: 100, nota: 'BR-101 Sul + BR-482' },
  { municipio: 'Jaguaré', territorio: 'Norte', tempo: '2h50', km: 189, asfalto: 100, nota: 'Sem observação' },
  { municipio: 'São Mateus', territorio: 'Norte', tempo: '3h00', km: 213, asfalto: 100, nota: 'Sem observação' },
  { municipio: 'Alegre', territorio: 'Sul e Caparaó', tempo: '3h10', km: 196, asfalto: 100, nota: 'Serra a partir de Cachoeiro' },
  { municipio: 'Nova Venécia', territorio: 'Norte', tempo: '3h20', km: 225, asfalto: 100, nota: 'Sem observação' },
  { municipio: 'Guaçuí', territorio: 'Sul e Caparaó', tempo: '3h30', km: 218, asfalto: 100, nota: 'Base para o Caparaó' },
  { municipio: 'Ibitirama', territorio: 'Sul e Caparaó', tempo: '4h05', km: 245, asfalto: 88, nota: 'Últimos 25 km de serra, terra boa no seco' },
  { municipio: 'Dores do Rio Preto', territorio: 'Sul e Caparaó', tempo: '4h20', km: 262, asfalto: 90, nota: 'Acesso ao Pico da Bandeira' },
];

export const notaDeslocamento =
  'Tempos medidos por mim, saindo do centro de Vitória, em dia útil, fora ' +
  'de pico. Não é o que o aplicativo estima, é o que o relógio marcou.';
