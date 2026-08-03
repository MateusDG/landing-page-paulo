# Plano de Landing Page — Corretor Rural | Espírito Santo

**Escopo:** fazendas, chácaras, sítios e terrenos rurais no ES
**Documento:** v1.0 — plano de execução completo (estratégia, direção de arte, copy, componentes, stack, SEO, conversão, cronograma)
**Regra-mãe do projeto:** se um trecho desta página pudesse ser copiado e colado no site de um corretor de Goiás sem mudar nada, ele está errado e precisa ser reescrito.

---

## Índice

1. [A tese: por que a maioria dos sites de corretor rural não funciona](#1-a-tese)
2. [Diagnóstico de mercado: quem compra terra no ES](#2-diagnóstico-de-mercado)
3. [Posicionamento e o ângulo criativo](#3-posicionamento-e-o-ângulo-criativo)
4. [Territórios de atuação (mapa real do estado)](#4-territórios-de-atuação)
5. [Direção criativa: o conceito visual](#5-direção-criativa)
6. [Sistema de design (tokens prontos)](#6-sistema-de-design)
7. [Arquitetura da informação e sitemap](#7-arquitetura-da-informação)
8. [Wireframe seção a seção + copy draft](#8-wireframe-e-copy)
9. [Inventário de componentes (specs)](#9-inventário-de-componentes)
10. [Conteúdo proprietário: os 4 ativos que ninguém copia](#10-conteúdo-proprietário)
11. [Direção de fotografia e arte](#11-direção-de-fotografia)
12. [Movimento e microinterações](#12-movimento-e-microinterações)
13. [Stack técnico e orçamento de performance](#13-stack-técnico)
14. [SEO local, schema e conteúdo programático](#14-seo-local)
15. [Conversão: funil, WhatsApp e CRM](#15-conversão)
16. [Acessibilidade](#16-acessibilidade)
17. [Jurídico: CRECI, LGPD, disclaimers](#17-jurídico)
18. [Roadmap de execução](#18-roadmap-de-execução)
19. [Métricas e instrumentação](#19-métricas)
20. [Checklist anti-IA / anti-clichê (o filtro final)](#20-checklist-anti-ia)
21. [Backlog v2](#21-backlog-v2)

---

<a name="1-a-tese"></a>
## 1. A tese

### O problema real

Site de corretor rural quase sempre erra por um destes três motivos:

**a) Copia o site de imóvel urbano.** Grid de cards com foto bonita, "3 quartos, 2 vagas", filtro de preço. Mas quem compra 40 hectares não decide por metragem de quarto — decide por **água, acesso, documentação, aptidão do solo e vizinhança**. O site urbano não tem campo para nada disso.

**b) Vende o "sonho".** Foto de drone no pôr do sol + frase "realize o sonho de viver no campo". Isso atrai curioso, não comprador. O comprador de terra tem medo — de comprar área com passivo ambiental, matrícula suja, sem outorga de água, com invasão, sem georreferenciamento. **O site tem que reduzir medo, não aumentar desejo.**

**c) Parece feito por template.** Hero centralizado, gradiente, três cards com ícone, seção de depoimentos com foto genérica, contador animado "500+ clientes felizes". Isso comunica: *este corretor terceirizou até a própria identidade.* Em um negócio onde a única coisa que o cliente compra antes do imóvel é **a sua credibilidade pessoal**, isso é fatal.

### A inversão

> **A página não vende imóveis. Vende o critério de quem seleciona os imóveis.**

O ativo do corretor rural não é o portfólio (que muda toda semana e é parcialmente compartilhado com outros corretores). É o **método de curadoria e verificação**. A landing page inteira é a prova documental desse método.

Consequência prática de design: o herói não é uma foto de fazenda. É **você + o critério**. O portfólio é evidência, não protagonista.

### Os três empregos da página

| # | Trabalho | Seção responsável | Métrica |
|---|---|---|---|
| 1 | Provar que o corretor conhece o território de verdade | Mapa de atuação, Diário de Campo | Tempo na página > 90s |
| 2 | Reduzir o medo técnico/jurídico da compra rural | Checklist de 14 pontos, Glossário | Scroll depth > 70% |
| 3 | Qualificar e capturar o lead com contexto | Briefing em 5 passos → WhatsApp | Lead qualificado / sessão |

---

<a name="2-diagnóstico-de-mercado"></a>
## 2. Diagnóstico de mercado: quem compra terra no ES

Cinco perfis reais. Cada um tem gatilho, objeção e caminho próprio na página. **A página serve os cinco sem virar um catálogo genérico — porque a porta de entrada é a finalidade, não o tipo de imóvel.**

### P1 — O "vou plantar de verdade" (produtor / investidor agrícola)
- **Quem:** produtor já estabelecido expandindo, ou investidor de Vitória/SP/MG comprando área produtiva.
- **Busca:** café conilon (Norte), arábica de altitude (Caparaó/Montanhas), pecuária de corte e leite, eucalipto (eixo Aracruz/São Mateus), mamão e coco (Linhares/Sooretama), pimenta-do-reino (região de São Mateus/Jaguaré).
- **Vocabulário:** sacas por hectare, arrobas, espaçamento, idade do cafezal, ciclo de corte, aptidão do solo, disponibilidade hídrica, energia trifásica.
- **Objeção nº1:** "a produtividade declarada é real ou é conversa de vendedor?"
- **O que a página precisa entregar:** ficha técnica com dados de produção auditáveis, ano de plantio, fonte de água com outorga, se há CAR ativo e georreferenciamento feito.

### P2 — O "quero a casa da serra" (segunda residência / lazer)
- **Quem:** família de Vitória, Vila Velha, Serra, Cariacica — ou mineiro de BH/Juiz de Fora, que já vem para a região há anos.
- **Busca:** 2 a 20 ha em Domingos Martins, Marechal Floriano, Venda Nova do Imigrante, Santa Teresa, Santa Maria de Jetibá, Alfredo Chaves, Afonso Cláudio.
- **Gatilho emocional:** clima ameno, altitude, névoa de manhã, distância de Vitória em minutos (não em km).
- **Objeção nº1:** "consigo chegar de carro comum no inverno? Tem internet? Tem energia? A estrada é do município?"
- **O que a página precisa entregar:** tempo real de deslocamento porta a porta, condição do acesso (asfalto até onde / quantos km de terra), sinal de operadora, energia, água, vizinhança.

### P3 — O "vou sair da cidade" (mudança de vida / renda passiva)
- **Quem:** 40–60 anos, casal, muitas vezes com aposentadoria ou venda de imóvel urbano. Quer morar e ter alguma renda.
- **Busca:** 5 a 30 ha num raio de 1h a 1h30 da Grande Vitória — Santa Leopoldina, Viana rural, Guarapari interior, Anchieta, Iconha, Rio Novo do Sul.
- **Objeção nº1:** "dá para viver disso? E se eu me arrepender, revendo?"
- **O que a página precisa entregar:** liquidez da região, conteúdo sobre custo real de manutenção, honestidade sobre o que a área rende ou não.

### P4 — O "quero terra como reserva de valor" (investidor patrimonial)
- **Quem:** empresário, médico, sócio de indústria. Compra para proteger capital e/ou arrendar.
- **Busca:** área com liquidez, documentação impecável, preferência por eixos de valorização — BR-101 Norte, entorno do polo logístico de Presidente Kennedy/Marataízes, franja urbana de Linhares e São Mateus.
- **Objeção nº1:** "quanto tempo até virar dinheiro de novo? Tem passivo?"
- **O que a página precisa entregar:** histórico de valorização por microrregião, matrícula limpa, georreferenciamento, cenário de arrendamento.

### P5 — O "quero fazer turismo/pousada/glamping"
- **Quem:** empreendedor, muitas vezes de fora do estado, atraído pelo agroturismo consolidado da região serrana.
- **Busca:** 1 a 10 ha com vista, água corrente, acesso bom, perto de rota turística (Pedra Azul, Rota do Imigrante, Caparaó, Rota do Vinho).
- **Objeção nº1:** "posso construir? Tem restrição ambiental? Zoneamento permite?"
- **O que a página precisa entregar:** APP mapeada, reserva legal averbada, distância de atrativo, viabilidade de licenciamento.

### Matriz de decisão → como isso vira interface

O **Briefing** (seção 8.7) abre exatamente com essas cinco finalidades. Escolher a finalidade reconfigura as perguntas seguintes e o texto do WhatsApp. É o único jeito de servir cinco públicos sem escrever nada genérico.

---

<a name="3-posicionamento-e-o-ângulo-criativo"></a>
## 3. Posicionamento e o ângulo criativo

### Declaração de posicionamento (interna, não vai para o site)

> Para quem vai comprar terra no Espírito Santo e tem mais medo de errar do que pressa de comprar, [NOME] é o corretor que anda a área antes de anunciar e mostra a matrícula antes da foto — porque em compra rural o problema nunca é achar imóvel, é achar imóvel sem problema.

### O ângulo criativo escolhido: **"O Caderno de Campo"**

Toda a página é construída como o **caderno de campo de um agrimensor/corretor**: fichas, medições, coordenadas, croquis de perímetro, anotações datadas, carimbos de verificação.

Por que este ângulo funciona:
- É **nativo do domínio** — quem lida com terra convive com memorial descritivo, planta, matrícula, CAR. Não é metáfora forçada.
- É **visualmente distintivo** — nenhum concorrente usa. Gera identidade instantânea.
- É **antiestético-IA** — a estética default de IA é gradiente + glass + card arredondado. Caderno de campo é o oposto: régua, monoespaçado, linha fina, papel, ângulo reto.
- **Escala com o conteúdo** — cada imóvel novo é uma ficha nova. O sistema não quebra.

### Os três "tells" da identidade

Três elementos que aparecem em toda a página e fazem qualquer print ser reconhecível:

1. **A ficha (`ficha-tecnica`)** — bloco de metadados em monoespaçado, alinhado à direita, com filete separando pares chave/valor. Usado em imóveis, no perfil do corretor, nas regiões, até no rodapé.
2. **O perímetro (`croqui`)** — polígono SVG do contorno real da área, traço fino, sem preenchimento. Vira ícone, marca d'água, divisor, thumbnail.
3. **A cota (`cota-dimensional`)** — linha com setas nas pontas + número, como em desenho técnico. Usada para medir espaço na tela e para exibir área/distância. Detalhe pequeno, efeito grande.

### Tom de voz

**Primeira pessoa do singular. Sempre.** Não "nossa equipe", não "a imobiliária". Uma pessoa fala.

| Diretriz | Exemplo ruim (banido) | Exemplo correto |
|---|---|---|
| Números específicos > adjetivos | "excelente localização" | "18 km de Venda Nova, 9 deles de terra batida, boa o ano todo" |
| Admita o defeito | (silêncio sobre o problema) | "A sede precisa de reforma. Refleti isso no preço e te digo quanto orçei." |
| Verbo concreto | "oferecemos assessoria completa" | "leio a matrícula, puxo o CAR e ando o perímetro com você" |
| Sem hype de manchete | "A oportunidade que você esperava!" | "Área de 32 ha em Alfredo Chaves. Café e pasto. Documentação ok." |
| Regionalismo com precisão | "terreno grande" | "62 ha — uns 12,8 alqueires no padrão que se usa aqui" |

### Lista negra de copy (proibido em qualquer lugar do site)

```
realize o sonho · o imóvel dos seus sonhos · seu parceiro ideal
soluções completas · excelência e compromisso · tradição e confiança
transformamos sonhos em realidade · qualidade de vida que você merece
venha viver o melhor do campo · fuja da correria da cidade
não perca essa oportunidade única · o que você procura está aqui
atendimento personalizado · profissionais altamente qualificados
um novo conceito em · pensando em você · aqui o seu sonho cabe
```

Regra prática: **se a frase serve para vender colchão, está banida.**

---

<a name="4-territórios-de-atuação"></a>
## 4. Territórios de atuação

Definir 4 territórios. Cada um vira uma página própria (SEO) e um estado do mapa interativo. Os dados abaixo são o esqueleto — **preencher com faixas de preço reais coletadas pelo corretor** (marcado como `[VERIFICAR]`).

### T1 — Montanhas Capixabas
- **Municípios-núcleo:** Domingos Martins, Marechal Floriano, Venda Nova do Imigrante, Santa Teresa, Santa Maria de Jetibá, Afonso Cláudio, Conceição do Castelo, Castelo, Alfredo Chaves, Brejetuba.
- **Perfil:** colonização italiana, alemã e pomerana. Altitude, clima ameno, agroturismo consolidado. Propriedades menores, muito parcelamento familiar.
- **Produção:** café arábica de altitude, hortaliças, morango, flores, gado leiteiro, vinho e fermentados artesanais.
- **Acesso:** BR-262 (eixo Vitória–Minas), ES-166, ES-164.
- **Compra quem:** P2, P3, P5.
- **Nota de mercado:** áreas menores (2–20 ha) com prêmio por vista, altitude e acesso asfaltado. `[VERIFICAR faixa R$/ha]`

### T2 — Norte Capixaba
- **Municípios-núcleo:** Linhares, Sooretama, Jaguaré, São Mateus, Nova Venécia, Vila Valério, Pinheiros, Montanha, Boa Esperança, Conceição da Barra.
- **Perfil:** relevo plano a suave-ondulado, propriedades maiores, agricultura em escala.
- **Produção:** maior polo de **café conilon** do país, mamão, coco, pimenta-do-reino, eucalipto, cacau, pecuária.
- **Acesso:** BR-101 Norte, ES-137, ES-248. Proximidade de Portocel/Barra do Riacho e do porto de Vitória.
- **Compra quem:** P1, P4.
- **Nota de mercado:** disponibilidade hídrica e outorga são o fator de preço nº 1. `[VERIFICAR faixa R$/ha]`

### T3 — Sul e Caparaó
- **Municípios-núcleo:** Cachoeiro de Itapemirim, Alegre, Guaçuí, Muqui, Mimoso do Sul, Dores do Rio Preto, Ibitirama, Iúna, Muniz Freire, Bom Jesus do Norte.
- **Perfil:** herança cafeeira antiga, forte influência mineira, sedes históricas. Caparaó com café especial e turismo de montanha (Pico da Bandeira).
- **Produção:** café arábica (incluindo especial com pontuação), gado leiteiro, mármore e granito no eixo Cachoeiro.
- **Acesso:** BR-101 Sul, BR-482, BR-484.
- **Compra quem:** P1, P4, P5.
- **Nota:** aqui a unidade coloquial é frequentemente o **alqueire** — a interface precisa suportar. `[VERIFICAR o padrão de alqueire usado por sub-região]`

### T4 — Litoral e Franja Metropolitana
- **Municípios-núcleo:** Guarapari, Anchieta, Piúma, Iconha, Rio Novo do Sul, Itapemirim, Marataízes, Presidente Kennedy, Viana, Santa Leopoldina.
- **Perfil:** proximidade da Grande Vitória, pressão de urbanização, terrenos rurais e áreas de transição, forte demanda por chácara de fim de semana e por estoque de terra.
- **Acesso:** ES-060 (Rodovia do Sol), BR-101, ES-080.
- **Compra quem:** P2, P3, P4.
- **Nota de mercado:** eixo com dinâmica logística/portuária e royalties no extremo sul — atenção a expectativa especulativa vs. valor real. `[VERIFICAR]`

### Como isso vira UI

Mapa SVG do ES com os 4 territórios como áreas clicáveis (não municípios individuais — sujeira visual). Hover/foco mostra a ficha do território em painel lateral. Clique navega para `/regiao/[slug]`. Sem biblioteca de mapa, sem tiles, sem JS pesado: **um SVG desenhado e otimizado**.

---

<a name="5-direção-criativa"></a>
## 5. Direção criativa

### Conceito em uma frase
**Papel de cartório com respiro de galeria.** Precisão documental + espaço em branco generoso.

### Referências mentais (não copiar — calibrar)
- Cadernos de campo de agrimensura e memoriais descritivos brasileiros (a hierarquia tipográfica deles é ótima e ninguém usa em web).
- Cartas topográficas do IBGE — curvas de nível, hachuras, legenda.
- Editorial de revista agrícola dos anos 60/70 — serifada forte, número gigante, muito branco.
- Catálogos de leilão de gado — ficha densa, foto pequena, dado grande.

### O que **não** vamos fazer (regras duras)

| Banido | Por quê | O que fazemos no lugar |
|---|---|---|
| Hero centralizado com CTA no meio | Assinatura visual de template | Hero assimétrico, texto ancorado à esquerda, coluna de metadados à direita |
| Gradiente colorido / glassmorphism / blur blobs | Estética default de gerador | Cor chapada, filete de 1px, textura de papel sutil |
| 3 cards idênticos com ícone e título | Clichê nº1 de landing page | Lista numerada com filete e ritmo tipográfico variável |
| Ícones genéricos de biblioteca (casa, chave, aperto de mão) | Sem território, sem identidade | Croquis de perímetro reais + pictogramas cartográficos desenhados |
| Contador animado "500+ clientes" | Ninguém acredita | Números verificáveis e estranhos (ver 8.5) |
| Carrossel de depoimentos com aspas gigantes | Baixa credibilidade | Estudo de caso único, longo, com números e nome |
| Emoji em títulos ou bullets | Marcador de texto gerado | Nada. Ou o glifo `—` |
| Cantos 16px+ em tudo | "SaaS look" | Raio 0 na maioria; 2px onde precisa |
| Sombra difusa em card | Idem | Borda de 1px e mudança de fundo |
| Foto de banco de imagens | Mata a credibilidade instantaneamente | Só foto autoral do próprio corretor (seção 11) |
| Dark mode "porque sim" | Custo sem benefício aqui | Um tema só, muito bem feito. (Reavaliar na v2) |

### Assimetria como método

O grid é 12 colunas, mas **quase nenhum bloco usa as 12**. Padrão de composição:

```
┌─────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░  ┃ metadados │
│  texto principal — col 1..7                  ┃ col 10..12│
└─────────────────────────────────────────────────────────┘
   ↑ margem viva à esquerda (não é padding, é composição)
```

Blocos alternam ancoragem (esquerda/direita) e largura (7 col / 5 col / 9 col). Isso é o que faz a página parecer **desenhada**, não gerada.

---

<a name="6-sistema-de-design"></a>
## 6. Sistema de design

### 6.1 Paleta — derivada da geologia e do solo do ES

Nada de "sage green + creme", que virou o clichê da vez. A paleta sai de coisas concretas do estado: granito capixaba, terra do norte, névoa da serra, folha de café.

```css
:root {
  /* Neutros — base de papel */
  --papel:        #F5F3EE;  /* fundo principal, quente, levemente sujo */
  --papel-2:      #EBE7DE;  /* faixas alternadas, cards */
  --marmore:      #FDFCFA;  /* superfície elevada / fichas */
  --grafite:      #24251F;  /* texto principal — quase preto, com verde */
  --grafite-70:   #5A5C52;  /* texto secundário */
  --grafite-40:   #96988C;  /* legendas, metadados */
  --filete:       #C9C5B8;  /* TODAS as linhas de 1px */

  /* Acento primário — terra do norte capixaba */
  --terra:        #9C4A2A;  /* CTA, links, marcações */
  --terra-esc:    #7A3720;  /* hover / pressed */

  /* Acento secundário — folha de conilon (uso raro, <5% da tela) */
  --conilon:      #3B4A38;
  /* Sinalizador de verificação — usado só nos selos de checklist */
  --verificado:   #4A6B4E;

  /* Semânticos */
  --foco:         #9C4A2A;
  --erro:         #8B2E20;
}
```

**Regra de uso:** 80% da tela é `--papel` + `--grafite`. `--terra` só em ação e em número-chave. Se a paleta parecer "sem graça" no Figma, ela está certa — a cor vem da fotografia.

**Contraste verificado (WCAG AA):**
| Par | Ratio | Status |
|---|---|---|
| `--grafite` / `--papel` | ~14.8:1 | AAA |
| `--grafite-70` / `--papel` | ~6.4:1 | AA |
| `--grafite-40` / `--papel` | ~3.1:1 | **só ≥18.66px ou 14px bold** |
| `--terra` / `--papel` | ~6.1:1 | AA |
| `--papel` / `--terra` (botão) | ~6.1:1 | AA |

`[Recalcular no build final com um checker — os valores acima são estimativas de projeto.]`

### 6.2 Tipografia

Três famílias, todas com licença aberta e auto-hospedadas (sem Google Fonts CDN — privacidade + LCP).

| Papel | Fonte | Por quê |
|---|---|---|
| **Display / títulos** | **Fraunces** (variable: `opsz`, `wght`, `SOFT`, `WONK`) | Serifa com personalidade agrícola/almanaque. O eixo `WONK` dá irregularidade que quebra o "cheiro de IA". Usar `WONK=1` só em display grande. |
| **Texto corrido / UI** | **Inter Tight** ou **Archivo** | Neutra, ótima em corpo pequeno, boa em número tabular. |
| **Dados / fichas / cotas** | **JetBrains Mono** ou **Söhne Mono** (alt. livre: **IBM Plex Mono**) | O monoespaçado é o que transforma metadado em "documento". Elemento identitário. |

**Escala tipográfica** — razão 1.25 mobile / 1.333 desktop, com `clamp()`:

```css
:root {
  --t-display: clamp(2.75rem, 7vw + 1rem, 6.5rem);   /* hero */
  --t-h1:      clamp(2rem,  4vw + 0.5rem, 3.5rem);
  --t-h2:      clamp(1.5rem, 2vw + 0.5rem, 2.25rem);
  --t-h3:      clamp(1.125rem, 1vw + 0.5rem, 1.375rem);
  --t-corpo:   clamp(1rem, 0.3vw + 0.95rem, 1.125rem);
  --t-peq:     0.875rem;
  --t-micro:   0.75rem;   /* metadado mono, sempre com tracking +0.08em e uppercase */
}
```

**Regras tipográficas não negociáveis:**
- Medida de linha do texto corrido: **62–72 caracteres** (`max-width: 34em`).
- `line-height`: 1.15 em display, 1.62 em corpo.
- Números sempre `font-variant-numeric: tabular-nums` em fichas e tabelas.
- Título em display **nunca** centralizado, exceto no bloco de fechamento.
- Hifenização em PT-BR ligada: `hyphens: auto; lang="pt-BR"`.
- Aspas tipográficas corretas: `"…"` e travessão `—` (nunca `-` fazendo papel de travessão).

### 6.3 Espaçamento e grid

Base 4px. Escala não-linear (evita ritmo mecânico):

```css
:root {
  --s-1: 0.25rem; --s-2: 0.5rem;  --s-3: 0.75rem; --s-4: 1rem;
  --s-5: 1.5rem;  --s-6: 2rem;    --s-7: 3rem;    --s-8: 4.5rem;
  --s-9: 7rem;    --s-10: 11rem;  /* respiro entre seções no desktop */
}
```

Grid: 12 colunas, `gutter: var(--s-5)`, margem lateral `clamp(1.25rem, 5vw, 6rem)`, `max-width: 1440px`.
Breakpoints: `560 / 900 / 1200 / 1600`.

### 6.4 Traço, borda, raio

```css
--borda:   1px solid var(--filete);
--borda-2: 2px solid var(--grafite);   /* uso raro: destaque de ficha */
--raio:    0;        /* padrão */
--raio-sm: 2px;      /* botões e inputs, só isso */
```

Nenhum `box-shadow` no sistema. Elevação se resolve com **fundo + filete**.

### 6.5 Textura

Um único ruído sutil aplicado no `body` para tirar o "digital limpo demais":

```css
body::before {
  content: "";
  position: fixed; inset: 0; pointer-events: none; z-index: 1;
  opacity: .035;
  background-image: url("data:image/svg+xml,…feTurbulence baseFrequency='0.9'…");
  mix-blend-mode: multiply;
}
```
Peso máximo: **inline SVG < 400 bytes**. Não usar PNG de textura.

---

<a name="7-arquitetura-da-informação"></a>
## 7. Arquitetura da informação

### Sitemap

```
/                                    ← Landing principal (o foco deste plano)
/imoveis                             ← Carteira completa, filtro por finalidade/região/área
/imovel/[slug]                       ← Ficha completa de uma área
/regiao/montanhas-capixabas          ← Página de território (SEO local)
/regiao/norte-capixaba
/regiao/sul-e-caparao
/regiao/litoral-e-franja
/como-eu-trabalho                    ← O método, expandido
/guia/                               ← Hub editorial
   /guia/comprar-fazenda-no-espirito-santo
   /guia/documentos-de-imovel-rural   (CAR, CCIR, ITR, matrícula, georreferenciamento)
   /guia/agua-e-outorga
   /guia/quanto-custa-manter-uma-chacara
   /guia/glossario-do-comprador-rural
/quero-vender                        ← Captação (o outro lado do negócio — não esquecer)
/sobre
/contato
/privacidade  ·  /termos
```

**Nota estratégica:** `/quero-vender` costuma ser esquecido e é onde está metade do negócio do corretor. Merece link no header, não só no rodapé.

### Ordem da home (e a lógica por trás)

| # | Seção | Trabalho psicológico |
|---|---|---|
| 01 | Hero | Situar: quem, onde, o quê. Em 3 segundos. |
| 02 | Barra de território | Provar cobertura geográfica real |
| 03 | O problema (a compra de terra dá errado assim) | Nomear o medo antes que ele nomeie você |
| 04 | O método — 14 pontos de verificação | Entregar a solução como processo, não como promessa |
| 05 | Carteira (6 fichas) | Evidência concreta |
| 06 | Mapa interativo dos 4 territórios | Aprofundar território + navegação SEO |
| 07 | Quem sou eu (Caderno de Campo) | Pessoalizar. Rosto, CRECI, números estranhos |
| 08 | Estudo de caso único | Prova social densa (> 10 depoimentos rasos) |
| 09 | Briefing em 5 passos | **Conversão principal** |
| 10 | Glossário / dúvidas | Cauda longa SEO + reduzir fricção final |
| 11 | Rodapé-ficha | Dados, CRECI, LGPD, contato |

---

<a name="8-wireframe-e-copy"></a>
## 8. Wireframe seção a seção + copy draft

> Copy abaixo é **draft de produção** — precisa dos dados reais do corretor nos `[colchetes]`. Está escrito no tom final, não é placeholder tipo "lorem".

### 8.0 Header

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [NOME] ─ corretor rural            Carteira  Regiões  Método  Quero vender │
│ CRECI-ES [nº]-F                                          [ Falar comigo ] │
└──────────────────────────────────────────────────────────────────────────┘
```

- Header **não** fixo no topo em desktop (fixo rouba altura e é padrão de template). Em vez disso: reaparece ao rolar para cima (`scroll-up reveal`), com filete inferior.
- Mobile: barra inferior fixa com **[ Ver carteira ]** e **[ WhatsApp ]** — o polegar está embaixo.
- CRECI visível já no header. É exigência legal *e* sinal de credibilidade. Aproveitar.

### 8.1 Hero — assimétrico, editorial

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  ┌ 20°19'S  40°20'W ─────────────────────┐        ┌──────────────────────┐  │
│                                                    │ EM CARTEIRA HOJE     │  │
│  Terra no Espírito Santo                           │ ──────────────────── │  │
│  se compra com                                     │ Áreas        [ 23 ]  │  │
│  a matrícula na mão.                               │ Municípios   [ 41 ]  │  │
│  ─────────────────────────────                     │ Menor área  [ 1,8 ha]│  │
│  Ando a área, leio o documento e só                │ Maior área  [ 412 ha]│  │
│  depois te ligo. Fazendas, chácaras e              │ Atualizado  [03.ago] │  │
│  terrenos rurais nas quatro regiões do             └──────────────────────┘  │
│  estado.                                                                     │
│                                                                              │
│  [ Ver o que tenho hoje ]   Como eu verifico uma área →                      │
│                                                                              │
└────────────────────────────────────────────────────────────────────────────┘
        ↓ foto larga, corte 21:9, cheia — sem texto por cima
```

**Copy — 3 opções de headline (escolher 1, testar depois):**

- **A (documental, recomendada):** "Terra no Espírito Santo se compra com a matrícula na mão."
- **B (território):** "Da névoa de Domingos Martins ao conilon de Jaguaré."
- **C (direta, anti-lirismo):** "23 áreas em carteira. Cada uma eu andei antes de anunciar."

**Subheadline:** "Ando a área, leio o documento e só depois te ligo. Fazendas, chácaras e terrenos rurais nas quatro regiões do estado."

**Decisões de design do hero:**
- Sem foto atrás do texto. Foto **abaixo**, largura total, respirando. Texto sobre imagem é onde 90% dos sites viram sopa ilegível.
- O painel `EM CARTEIRA HOJE` é o primeiro `ficha-tecnica` da página — planta a linguagem visual imediatamente. Números vêm do CMS, então são **verdadeiros e mudam** — isso é sentido de vida que template não tem.
- A coordenada no topo é o "tell" cartográfico. Sutil, micro, monoespaçada.
- **Zero animação de entrada além de um fade de 240ms.** Hero animado é assinatura de template.

### 8.2 Barra de território (faixa fina, alta densidade)

```
──────────────────────────────────────────────────────────────────────────────
 MONTANHAS ·10 mun.   NORTE ·14 mun.   SUL E CAPARAÓ ·11 mun.   LITORAL ·6 mun.
──────────────────────────────────────────────────────────────────────────────
```
Cada item é link para `/regiao/[slug]`. Em hover, o município mais representativo aparece embaixo em mono. Altura total: ~72px. Serve de "respiro" e de prova de cobertura.

### 8.3 O problema — nomear o medo

**Título:** "Compra de terra raramente dá errado no preço."
**Subtítulo:** "Dá errado no documento."

Lista numerada, **sem ícones**, com filete entre itens e o número em Fraunces grande e `--terra`:

```
01 ─ A área tem 40 ha na conversa e 31,4 ha na matrícula.
02 ─ O CAR está inscrito, mas com reserva legal proposta em cima
     da melhor parte da lavoura.
03 ─ A nascente que abastece tudo não tem outorga.
04 ─ O acesso passa por dentro do vizinho e não existe servidão
     registrada.
05 ─ O vendedor tem dívida de ITR de sete exercícios.
06 ─ O georreferenciamento nunca foi feito e a venda trava no cartório.
```

**Fechamento da seção:** "Nenhum desses problemas aparece na foto do drone. Todos aparecem no cartório — e aí você já pagou o sinal."

> Esta seção é a mais importante da página. É ela que separa "corretor" de "corretor que eu quero".

### 8.4 O método — os 14 pontos de verificação

Formato: **duas colunas**, cada item com um selo de verificação desenhado (não ícone de biblioteca — um carimbo simples em SVG, traço de 1px).

**Título:** "O que eu checo antes de te mostrar uma área"
**Kicker mono:** `PROTOCOLO DE CAMPO — v.[ano]`

```
DOCUMENTAL                          FÍSICO
01  Matrícula atualizada (30 dias)   08  Perímetro andado a pé ou de moto
02  Cadeia dominial — 3 titulares    09  Fonte de água conferida em campo
03  Ônus, penhora, usufruto          10  Acesso testado em dia de chuva
04  CCIR e ITR em dia                11  Energia: bitola, trifásica, distância
05  CAR ativo + reserva legal        12  Sinal de celular medido no local
06  Georreferenciamento / SIGEF      13  Vizinhança e histórico de conflito
07  Outorga de uso da água           14  Conversa com dois vizinhos
```

**Nota abaixo (crucial para credibilidade):**
> "Se algum ponto não fecha, eu te digo qual é antes da visita. Já deixei de anunciar área boa porque a reserva legal estava proposta em cima do café — e o dono não quis remanejar."

**Por que 14 e não 10:** número redondo parece inventado. 14 parece contado.

`[REVISAR com o corretor + advogado: os itens acima devem refletir o processo real dele. Ajustar nomes conforme prática local e legislação vigente — ES tem particularidades (AGERH para outorga, IDAF para questões florestais/sanitárias, INCAPER para assistência técnica).]`

### 8.5 A carteira — as fichas

O componente-assinatura da página. Cada imóvel é uma **ficha de campo**, não um card de e-commerce.

```
┌──────────────────────────────────────────────────────┐
│  ╱‾‾‾‾╲                          FA-0142             │  ← código interno
│ │      ╲___                      ─────────           │  ← croqui SVG do
│ │           ╲                    ALFREDO CHAVES/ES   │     perímetro real
│  ╲___________╱                                       │
│                                                      │
│  32,4 ha                                             │  ← número gigante
│  ─────────────────────────────────────────────────── │
│  Finalidade    Café + pasto + moradia                │
│  Água          Córrego perene · 2 nascentes          │
│  Acesso        7 km de asfalto + 4 km de terra       │
│  Documentos    Matrícula ok · CAR ativo · Geo feito  │
│  De Vitória    1h50                                  │
│  ─────────────────────────────────────────────────── │
│  R$ [ valor ]                        Ver ficha →     │
└──────────────────────────────────────────────────────┘
```

**Regras da ficha:**
- **O croqui do perímetro é obrigatório.** É o que faz cada imóvel parecer único e a página parecer artesanal. Extrair do CAR/SIGEF, simplificar para ~20 vértices, salvar como `path` SVG no frontmatter do imóvel.
- Foto **não** aparece no card da home. Só na ficha completa. Contra-intuitivo e certo: a lista fica escaneável, densa e não vira galeria de banco de imagens.
- Toggle global **ha ↔ alqueire** no topo da seção. Detalhe pequeno que grita "quem fez isso entende do assunto". `[Confirmar o fator de conversão praticado por região do ES antes de implementar — o "alqueire" não é uniforme no país.]`
- Preço: se o corretor prefere "sob consulta", usar **"Valor sob consulta — respondo em minutos no WhatsApp"**, nunca só "Consulte". Se puder mostrar, mostre: filtra curioso.
- Estado esgotado: ficha com `--filete` sobre tudo e carimbo **VENDIDA em [mês/ano]** girado -8°. Manter vendidas visíveis (com filtro) — é prova social real.

**Cabeçalho da seção:**
Título: "O que eu tenho hoje"
Subtítulo: "Atualizo essa lista toda semana. Se saiu, marco como vendida em vez de apagar."
Filtros (chips, não select): `Finalidade` · `Região` · `Faixa de área` · `Só com doc. completa`

### 8.6 Mapa dos territórios

```
┌───────────────────────┬───────────────────────────────────────┐
│                       │  NORTE CAPIXABA                       │
│    [ SVG do ES        │  ───────────────────────────────────  │
│      com 4 áreas      │  Linhares · Sooretama · Jaguaré ·     │
│      clicáveis ]      │  São Mateus · Nova Venécia · +9        │
│                       │                                       │
│                       │  Conilon, mamão, coco, pimenta,       │
│                       │  eucalipto, cacau. Relevo plano a     │
│                       │  suave-ondulado, áreas maiores.       │
│                       │                                       │
│                       │  Em carteira      [ 9 áreas ]         │
│                       │  Área média       [ 78 ha ]           │
│                       │  Ver as 9 áreas →                     │
└───────────────────────┴───────────────────────────────────────┘
```

- SVG inline, 4 `<path>` com `role="button"`, `tabindex="0"`, navegação por seta. Sem Leaflet, sem Mapbox, sem tiles: **~8 KB**.
- Hover pinta o território em `--terra` a 12% e sobe o filete para 2px. Nada mais.
- Mobile: vira lista de 4 blocos empilhados, mapa acima como imagem estática.

### 8.7 Briefing em 5 passos — a conversão principal

**Substitui o formulário de contato.** Uma pergunta por tela, resposta por clique, sem digitação até o final.

```
Passo 1/5   O que você quer fazer com a área?
            ○ Produzir (café, gado, lavoura)
            ○ Morar
            ○ Casa de fim de semana / lazer
            ○ Investir / reserva de valor
            ○ Turismo, pousada, glamping

Passo 2/5   Onde faz sentido pra você?
            [ mapa mini dos 4 territórios — múltipla escolha ]
            ○ Ainda não sei, quero sugestão

Passo 3/5   Tamanho
            ○ até 5 ha  ○ 5–20  ○ 20–50  ○ 50–150  ○ 150+  ○ depende

Passo 4/5   Faixa de investimento
            [ opções ]   ○ prefiro conversar sobre isso

Passo 5/5   Quando
            ○ Já estou procurando  ○ Nos próximos 6 meses
            ○ Estudando o mercado  ○ Tenho área pra vender também

            Como te chamo?  [ nome ]
            WhatsApp        [ (__) _____-____ ]
            [ Enviar meu briefing ]
```

**O que acontece no envio:**
1. Grava o lead (CRM / planilha / Notion via webhook).
2. Abre `wa.me` com mensagem **pré-preenchida e estruturada**:

```
Oi [NOME], vim pelo site.

Finalidade: casa de fim de semana
Região: Montanhas Capixabas
Área: 5 a 20 ha
Investimento: [faixa]
Prazo: próximos 6 meses

Meu nome é [nome do lead].
Ref: BRF-2026-0873
```

Isso muda tudo para o corretor: o lead chega **qualificado e rastreável**, não como "oi, tem chácara?".

3. Tela final: "Recebi. Te respondo hoje até as [x]h. Enquanto isso, dá uma olhada nessas 3 áreas que batem com o que você marcou:" → **3 fichas filtradas dinamicamente pelas respostas.** Isso mantém a sessão viva e é raríssimo em site de corretor.

**Detalhes de execução:**
- Progresso como **cota dimensional** (`|←—— 3/5 ——→|`), não barra de progresso arredondada.
- Volta livre entre passos, respostas preservadas.
- Funciona sem JS? Fallback: formulário único simples em `<form>` com `method=POST`. Progressive enhancement de verdade.
- Sem campo de e-mail obrigatório. No Brasil rural, **WhatsApp é o canal**. E-mail é opcional.

### 8.8 Quem sou eu — o Caderno de Campo

Layout: foto vertical à esquerda (você, em campo, botina suja, não terno em estúdio), texto e ficha à direita.

**Copy draft:**

> Sou [NOME], corretor com CRECI-ES [nº]-F. Nasci em [cidade] e trabalho com imóvel rural desde [ano].
>
> Não sou imobiliária. Sou uma pessoa só, o que significa que você fala comigo do primeiro WhatsApp até a escritura — e que eu não consigo atender todo mundo ao mesmo tempo. Prefiro assim.
>
> Meu trabalho começa antes do anúncio: eu vou até a área, ando o perímetro, converso com vizinho, peço a matrícula e puxo o CAR. Se não fecha, não anuncio. Já perdi comissão fazendo isso e continuo fazendo.

**Ficha ao lado — os "números estranhos":**

```
EM CAMPO
─────────────────────────────
Desde                 [ 2011 ]
Municípios visitados  [ 63 ]
Áreas andadas a pé    [ 480+ ]
Matrículas lidas      [ 1.100+ ]
Áreas que recusei     [ 71 ]
Km rodados em 2025    [ 41.300 ]
─────────────────────────────
CRECI-ES [nº]-F
```

**"Áreas que recusei: 71"** é a linha mais valiosa da página inteira. Nenhum concorrente vai ter coragem de publicar isso, e é exatamente o que o comprador com medo precisa ler.

### 8.9 Estudo de caso — um só, longo

Em vez de 6 depoimentos de 2 linhas: **uma história completa**, formatada como relatório.

```
CASO — 2024/11 · Venda Nova do Imigrante · 14,2 ha

O comprador       Casal de Vitória, primeira compra rural.
O que procuravam  Chácara para fim de semana, até 1h30 da capital.
O que travou      A área que eles escolheram sozinhos tinha o
                  acesso passando por dentro do vizinho, sem
                  servidão registrada. Descobri na matrícula.
O que fizemos     Recusamos aquela. Levei três semanas para achar
                  a de Venda Nova. Perímetro andado no dia 8/10.
O resultado       Escritura em 11/2024. Sem surpresa no cartório.
                  Custo total ficou 4% acima do previsto — o
                  vendedor tinha ITR atrasado e negociamos abatimento.

                  "[depoimento real, 2 a 4 linhas, com nome]"
                                        — [Nome], Vitória
```

Adicionar 2–3 destes ao longo do tempo. **Qualidade > quantidade** em prova social de ticket alto.

### 8.10 Glossário / dúvidas

Acordeão sóbrio, sem ícone de `+` girando. Só filete e mudança de peso tipográfico.

**Termos a cobrir** (cada um também vira parágrafo em `/guia/glossario-do-comprador-rural`):

| Termo | Por que o comprador precisa |
|---|---|
| Matrícula e cadeia dominial | É o documento que diz de quem é |
| CAR (Cadastro Ambiental Rural) | Sem ele não sai financiamento nem regularização |
| Reserva legal e APP | Define quanto da área você pode usar |
| Georreferenciamento / SIGEF | Sem ele a transmissão pode travar no cartório |
| CCIR | Emitido pelo INCRA; exigido em transmissão |
| ITR | Imposto federal; dívida acompanha o imóvel |
| Módulo fiscal | Varia por município; define pequena propriedade e limita desmembramento |
| Outorga de uso da água | No ES, competência estadual (AGERH) |
| Servidão de passagem | Acesso que não é seu tem que estar registrado |
| Alqueire vs. hectare | Unidade coloquial ≠ unidade legal |
| Desmembramento rural | Limitado pelo módulo; INCRA se manifesta |
| Compra por estrangeiro | Há restrição legal específica (Lei 5.709/71) |

`[Todo o conteúdo jurídico precisa de revisão por advogado imobiliário/agrário atuante no ES antes de publicar. Incluir disclaimer: "conteúdo informativo, não substitui consulta jurídica".]`

### 8.11 Rodapé-ficha

O rodapé é a última ficha da página — coerência total.

```
──────────────────────────────────────────────────────────────────────
[NOME]                       CARTEIRA          GUIAS
Corretor de imóveis rurais   Montanhas         Comprar fazenda no ES
CRECI-ES [nº]-F              Norte             Documentos rurais
                             Sul e Caparaó     Água e outorga
[WhatsApp]                   Litoral           Glossário
[e-mail]
[cidade base]/ES             Quero vender      Privacidade · Termos
──────────────────────────────────────────────────────────────────────
Última atualização da carteira: 03.ago.2026 · 23 áreas ativas
Fotos autorais. Informações sujeitas a confirmação documental.
```

---

<a name="9-inventário-de-componentes"></a>
## 9. Inventário de componentes

| Componente | Props principais | Estados | Nota |
|---|---|---|---|
| `FichaTecnica` | `titulo`, `linhas[]{rotulo,valor}`, `alinhamento` | — | Base de tudo. Mono, tabular-nums, filete entre linhas |
| `FichaImovel` | `codigo`, `croquiPath`, `area`, `municipio`, `dados[]`, `preco`, `status` | default · hover · vendida | Croqui SVG obrigatório |
| `Croqui` | `path`, `tamanho`, `traço` | — | Renderiza perímetro em `viewBox` normalizado |
| `CotaDimensional` | `valor`, `unidade`, `orientacao` | — | Elemento identitário |
| `MapaTerritorios` | `territorioAtivo` | idle · hover · foco · ativo | SVG inline, acessível por teclado |
| `Briefing` | `passos[]`, `onFinish` | 5 passos + sucesso + erro | Fallback sem JS |
| `ListaNumerada` | `itens[]`, `prefixo` | — | Substitui os "3 cards com ícone" |
| `SeloVerificacao` | `label`, `status` | ok · pendente · na | Carimbo SVG desenhado |
| `Acordeao` | `itens[]` | fechado · aberto | Sem ícone rotativo |
| `BotaoWhats` | `contexto`, `refImovel` | — | Monta mensagem pré-preenchida |
| `FaixaTerritorios` | — | — | Barra fina de alta densidade |
| `CarimboVendida` | `mesAno` | — | Rotação -8°, `--filete` |
| `ToggleUnidade` | `unidade` | ha · alqueire | Estado global (localStorage) |
| `BarraMobile` | — | — | Fixa no rodapé, só < 900px |

---

<a name="10-conteúdo-proprietário"></a>
## 10. Conteúdo proprietário: os 4 ativos que ninguém copia

Sem estes, a página vira mais um template bonito. Com eles, vira defensável.

### A1 — O Protocolo de 14 pontos
Já detalhado em 8.4. Vira também um **PDF de 1 página**, entregue como isca no rodapé: "Baixe meu checklist e use com qualquer corretor, inclusive contra mim." Essa frase é o tipo de coisa que gera captura de tela e compartilhamento no WhatsApp.

### A2 — O Diário de Campo
Seção `/diario` — posts curtos (150–400 palavras), datados, primeira pessoa, com **1 foto autoral**:

> **12.jul.2026 — Estrada de Vargem Alta**
> Fui ver uma área de 26 ha. Chegando, os últimos 3 km eram de terra e tinha chovido. Passei de caminhonete, mas passaria de carro comum? Não em julho. Coisa que só se descobre indo.

Custo: 15 minutos por post. Efeito: a página **cheira a pessoa viva**, não a build estático. É o antídoto mais forte contra "isso foi feito por IA". Meta: 2 posts por mês.

### A3 — O Índice de Deslocamento
Tabela própria: **tempo real de porta a porta** entre a Grande Vitória e os municípios de atuação, medido pelo corretor, com nota de condição de estrada.

```
Município                Tempo (Vitória)   Asfalto   Terra   Obs
Domingos Martins         1h05              100%      —       BR-262, boa
Venda Nova do Imigrante  1h35              100%      —       —
Santa Teresa             1h20              98%       —       serra, neblina
Alfredo Chaves           1h40              92%       ~5 km   ok o ano todo
Linhares                 2h10              100%      —       BR-101
Jaguaré                  2h50              100%      —       —
```

Conteúdo utilíssimo, altamente linkável, impossível de gerar sem estar lá. `[Preencher com medições reais.]`

### A4 — A Carteira Reservada
Boa parte da terra boa no ES é vendida **off-market**, antes de anunciar. Transformar isso em oferta:

> **Antes de ir para o site**
> Áreas boas costumam sair antes de eu anunciar. Se você me disser o que procura, entra na lista de quem recebe primeiro — em média [x] áreas por mês, por WhatsApp, sem spam.
> [ Entrar na lista ]

Isso é uma oferta **real**, específica do mercado rural, e converte muito melhor que "assine nossa newsletter".

---

<a name="11-direção-de-fotografia"></a>
## 11. Direção de fotografia

**Regra zero: nenhuma foto de banco de imagens. Nenhuma. Nunca.** Uma foto de stock destrói mais credibilidade do que dez fotos amadoras somam.

### O que dá errado nas fotos de imóvel rural
Drone no pôr do sol com saturação estourada, HDR crocante, céu roxo, grande angular deformando a sede, foto só de longe (esconde o problema — e o comprador sabe).

### Shot list obrigatória por imóvel (12 fotos)

| # | Foto | Por quê |
|---|---|---|
| 01 | **A chegada** — a estrada de acesso, do carro | Acesso é a objeção nº1 |
| 02 | A porteira / entrada | Ancora o lugar |
| 03 | Vista de onde a casa está (ou estaria) | É o que o comprador vai olhar todo dia |
| 04 | A água — nascente, córrego, açude, poço | Fator de preço nº1 |
| 05 | Solo na mão, close | Prova de terreno; visualmente forte |
| 06 | A lavoura/pasto, plano médio | Estado real da produção |
| 07 | Benfeitorias, **incluindo o que está ruim** | Honestidade = credibilidade |
| 08 | Cerca e divisa | Sinaliza cuidado com limites |
| 09 | Energia — poste, padrão | Objeção prática comum |
| 10 | Vizinhança / o que se vê da divisa | Ninguém mostra; todos querem saber |
| 11 | Aérea **só uma**, baixa altitude, para entender a forma | Contexto, não espetáculo |
| 12 | Detalhe humano — botina, mão, cachorro, café no fogão | É o que faz parecer real |

### Tratamento
- Luz: 1ª hora da manhã ou última da tarde. **Névoa é ativo** — na serra capixaba, fotografar na neblina é diferenciação pura.
- Cor: perfil neutro, contraste médio-baixo, verdes **dessaturados em ~10%** (o verde estourado é a assinatura do "foto de anúncio").
- Sem vinheta, sem clarity acima de +10, sem céu substituído.
- Formatos: **3:2** para galeria, **4:5** para mobile e social, **21:9** para o hero.
- Entrega: AVIF + WebP, `srcset` em 4 larguras, `loading="lazy"` (exceto hero), `decoding="async"`, dimensões explícitas para CLS zero.

### Se ainda não há acervo (fase 0)
Não lançar com stock. Alternativas honestas: (a) lançar com **menos fotos e mais croquis/dados** — combina com o conceito; (b) fotos de celular moderno com boa luz são aceitáveis e mais verdadeiras que stock; (c) contratar 1 diária de fotógrafo cobrindo 3 imóveis, e reusar como padrão.

---

<a name="12-movimento-e-microinterações"></a>
## 12. Movimento e microinterações

**Filosofia:** movimento aqui é **serviço**, não decoração. Se você percebeu a animação, ela está errada.

### Permitido

| Interação | Especificação |
|---|---|
| Entrada de seção | `opacity 0→1` + `translateY(12px→0)`, 420ms, `cubic-bezier(.2,.7,.2,1)`, **stagger de 40ms** só entre irmãos diretos |
| Hover em ficha | Fundo `--papel` → `--marmore`, filete `--filete` → `--grafite`, 160ms. **Sem transform, sem scale, sem sombra** |
| Hover no mapa | Preenchimento `--terra` a 12%, filete 1px→2px, 120ms |
| Toggle ha↔alqueire | Número faz crossfade de 180ms. Sem contador rolando |
| Briefing entre passos | Slide horizontal de 24px + fade, 260ms |
| Header reveal | Aparece ao rolar para cima, 200ms, com filete |
| Croqui do perímetro | `stroke-dasharray` desenhando o contorno em 900ms — **só na primeira vez que entra na viewport, só na ficha completa** |

O desenho do croqui é a **única** animação "com graça" da página. Uma só, bem colocada, vale mais que vinte.

### Proibido
Parallax em imagem, texto que "digita", contador numérico animado, scroll-jacking, cursor customizado, elemento seguindo o mouse, marquee de logos, `scale(1.05)` em hover de card, blur animado, confete, tilt 3D.

### Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```
Todos os conteúdos precisam ser visíveis **sem** o gatilho de scroll (nada de `opacity:0` que só some via JS — usar `@starting-style` ou classe aplicada por JS após checar suporte).

---

<a name="13-stack-técnico"></a>
## 13. Stack técnico e orçamento de performance

### Escolha: **Astro + CSS nativo + Cloudflare Pages**

| Camada | Escolha | Justificativa |
|---|---|---|
| Framework | **Astro 5** | Zero JS por padrão; content collections tipadas resolvem "cada imóvel é um markdown"; islands só onde precisa (briefing, mapa, toggle) |
| Estilo | **CSS nativo** com `@layer`, custom properties, nesting | Tailwind empurra para o visual "utility default". Aqui o CSS é curto (~10 KB) e o design é autoral. Se a equipe exigir Tailwind, usar com `theme` totalmente customizado e **proibir** classes de sombra/raio prontas |
| Conteúdo | Content collections (`src/content/imoveis/*.md`) + Zod schema | Validação de dados do imóvel no build — impede publicar imóvel sem matrícula/croqui |
| CMS | **Decap CMS** (git-based) ou **Sveltia CMS** | Corretor edita pelo navegador, commit vai pro Git, deploy automático. Zero custo de banco |
| Imagens | `astro:assets` → AVIF/WebP, `srcset` | Otimização no build |
| Deploy | **Cloudflare Pages** | Grátis, CDN forte no Brasil, preview por branch |
| Formulário | Cloudflare Worker → webhook (Notion/Sheets/CRM) + `wa.me` | Sem backend próprio |
| Analytics | **Umami** (self-host ou cloud) ou GA4 | Umami: leve, sem cookie, dispensa banner de consentimento |
| Fontes | Auto-hospedadas, subset `latin` + `latin-ext`, `woff2`, `font-display: swap`, `preload` só do display | Privacidade + LCP |

### Estrutura de arquivos

```
/
├─ src/
│  ├─ content/
│  │  ├─ imoveis/          FA-0142-alfredo-chaves.md   (+ croqui path no frontmatter)
│  │  ├─ regioes/          montanhas-capixabas.md
│  │  ├─ diario/           2026-07-12-vargem-alta.md
│  │  └─ guias/            documentos-rurais.md
│  ├─ components/          FichaImovel.astro, Croqui.astro, MapaTerritorios.astro,
│  │                       Briefing.astro, CotaDimensional.astro, …
│  ├─ layouts/             Base.astro, Ficha.astro, Guia.astro
│  ├─ pages/              index.astro, imoveis/, imovel/[slug].astro,
│  │                      regiao/[slug].astro, guia/, quero-vender.astro
│  ├─ styles/             tokens.css, base.css, tipografia.css, componentes.css
│  └─ lib/                whatsapp.ts, unidades.ts, schema.ts
├─ public/                fonts/, og/, checklist-14-pontos.pdf
└─ astro.config.mjs
```

### Schema do imóvel (`src/content/config.ts`)

```ts
const imovel = z.object({
  codigo: z.string().regex(/^[A-Z]{2}-\d{4}$/),   // FA-0142
  municipio: z.string(),
  regiao: z.enum(['montanhas','norte','sul-caparao','litoral']),
  areaHa: z.number().positive(),
  croqui: z.string(),                              // SVG path — OBRIGATÓRIO
  finalidade: z.array(z.enum(['produzir','morar','lazer','investir','turismo'])),
  agua: z.string(),
  acesso: z.object({ asfaltoKm: z.number(), terraKm: z.number(), nota: z.string() }),
  energia: z.string(),
  documentos: z.object({
    matricula: z.boolean(), car: z.boolean(),
    geo: z.boolean(), ccir: z.boolean(),
    itr: z.boolean(), outorga: z.enum(['sim','nao','na']),
  }),
  tempoDeVitoria: z.string(),
  preco: z.number().nullable(),
  status: z.enum(['ativa','reservada','vendida']),
  vendidaEm: z.string().optional(),
  fotos: z.array(z.object({ src: z.string(), alt: z.string() })).min(6),
});
```

O `.min(6)` em fotos e o `croqui` obrigatório fazem o **build falhar** se o corretor publicar um imóvel pela metade. Qualidade forçada pelo sistema, não pela disciplina.

### Orçamento de performance (hard budget — falha o CI se estourar)

| Métrica | Meta | Teto |
|---|---|---|
| LCP (4G, mobile) | < 1.4s | 1.8s |
| CLS | 0 | 0.02 |
| INP | < 120ms | 200ms |
| JS transferido (home) | < 22 KB | 35 KB |
| CSS | < 12 KB | 18 KB |
| Peso total da home (1ª visita) | < 480 KB | 700 KB |
| Lighthouse Perf / A11y / SEO / BP | 100 / 100 / 100 / 100 | 95 mínimo |
| Requests na home | < 18 | 25 |

Rodar Lighthouse CI + `@unlighthouse` em cada PR.

---

<a name="14-seo-local"></a>
## 14. SEO local, schema e conteúdo programático

### Estratégia de palavra-chave

Não brigar por "fazenda à venda" (nacional, dominado por portais). Ganhar em **cauda longa geográfica**, onde o portal é raso e você é profundo.

| Tipo | Exemplos | Página |
|---|---|---|
| Geo + tipo | "fazenda à venda em Linhares ES", "chácara em Venda Nova do Imigrante", "sítio Domingos Martins" | `/regiao/[slug]` + `/imovel/[slug]` |
| Geo + cultura | "fazenda de café conilon à venda ES", "terra para eucalipto norte capixaba" | `/regiao/norte-capixaba` |
| Intenção informacional | "documentos para comprar imóvel rural", "o que é CAR", "georreferenciamento obrigatório" | `/guia/*` |
| Objeção | "quanto custa manter uma chácara", "vale a pena comprar terra no ES" | `/guia/*` |
| Transacional local | "corretor de imóveis rurais Espírito Santo", "corretor de fazendas ES" | `/` e `/sobre` |

### Páginas programáticas (v1.5)

Gerar `/[tipo]-a-venda/[municipio]` para os ~41 municípios de atuação — **somente onde houver conteúdo real** (mínimo: 1 imóvel OU 250 palavras próprias sobre o município). Página vazia gerada em massa é penalizada e, pior, parece exatamente o que não queremos: automação sem alma.

### Schema.org (JSON-LD)

```
Home            → RealEstateAgent + Person + WebSite (+SearchAction)
/imovel/[slug]  → Product ou Accommodation + Offer + Place + GeoCoordinates
/regiao/[slug]  → CollectionPage + Place
/guia/*         → Article + FAQPage
Rodapé global   → BreadcrumbList
```

### Local SEO fora do site
- **Google Business Profile** com categoria "Corretor de imóveis" e área de atendimento (não endereço único). Postar as fotos autorais lá — mesmo acervo, dois usos.
- NAP consistente (Nome, endereço, telefone) em site, GBP e redes.
- Perfil CRECI-ES atualizado apontando para o site.

### Técnico
- `sitemap.xml` automático (integração Astro), `robots.txt`, canonical em todas as páginas.
- **OG images geradas no build** por imóvel: croqui + área + município sobre `--papel`. Distinto no WhatsApp, que é onde o link vai circular. **Isso importa mais que qualquer outra coisa de SEO neste negócio.**
- `hreflang` desnecessário (pt-BR único).
- Imóvel vendido: **manter a URL** com status vendida + link para similares. Nunca 404.

---

<a name="15-conversão"></a>
## 15. Conversão: funil, WhatsApp e CRM

### Hierarquia de CTAs (só 3 no site inteiro)

| Nível | CTA | Onde | Fricção |
|---|---|---|---|
| **Primário** | "Enviar meu briefing" | Seção 9, após fichas, fim das páginas de região | Média — mas gera o melhor lead |
| **Secundário** | "Falar no WhatsApp" | Header, barra mobile, cada ficha de imóvel | Zero |
| **Terciário** | "Entrar na lista reservada" | Rodapé, fim do diário, fim dos guias | Baixa — captura quem ainda não decidiu |

Não adicionar um quarto. Multiplicar CTA reduz conversão e é sinal visual de template.

### Contexto no WhatsApp — regra absoluta

**Todo** link de WhatsApp carrega contexto. Nunca `wa.me/55279…` puro.

```ts
// src/lib/whatsapp.ts
export function linkWhats(ctx: { imovel?: string; area?: number; municipio?: string; origem: string }) {
  const linhas = [
    'Oi, vim pelo site.',
    ctx.imovel && `Sobre a área ${ctx.imovel} — ${ctx.area} ha em ${ctx.municipio}.`,
    `(ref: ${ctx.origem})`,
  ].filter(Boolean);
  return `https://wa.me/${NUM}?text=${encodeURIComponent(linhas.join('\n'))}`;
}
```

O corretor passa a saber, em cada mensagem, **de qual imóvel e de qual seção** o lead veio. Isso vale mais que qualquer dashboard.

### Follow-up (fora do site, mas parte do sistema)
- SLA declarado no site ("respondo até as 20h do mesmo dia") — **e cumprido**. Prometer resposta e falhar é pior que não prometer.
- Sequência para a lista reservada: 1 mensagem por semana, no máximo, sempre com áreas reais. Sem "bom dia com frase motivacional".
- CRM mínimo viável: Notion ou Google Sheets com colunas `data · nome · whats · finalidade · região · área · faixa · prazo · ref · status`. Se crescer: Pipedrive ou Kommo (que integra WhatsApp).

---

<a name="16-acessibilidade"></a>
## 16. Acessibilidade

Meta: **WCAG 2.1 AA**, sem exceção. O público inclui gente de 50–70 anos comprando terra — legibilidade não é caridade, é conversão.

- Contraste conforme tabela 6.1; `--grafite-40` proibido abaixo de 18.66px.
- Foco visível **customizado e forte**: `outline: 2px solid var(--foco); outline-offset: 3px;` — nunca `outline: none`.
- Mapa SVG: cada território é `role="button"`, `tabindex="0"`, `aria-label="Norte Capixaba, 9 áreas"`, navegação por setas, `Enter`/`Space` ativa.
- Briefing: `fieldset`/`legend` por passo, `aria-live="polite"` no indicador de progresso, erro associado por `aria-describedby`.
- Acordeão: `<button aria-expanded>` + `<div role="region">`. Semântica nativa.
- Alvos de toque ≥ 44×44px. Chips de filtro incluídos.
- `alt` descritivo e **específico** em toda foto: não "fazenda", mas "estrada de acesso à área, últimos 3 km em leito de terra, após chuva".
- Toda informação transmitida por cor tem redundância textual (ex.: selos de documento vêm com rótulo, não só cor).
- Zoom até 200% sem quebra e sem scroll horizontal.
- Teste real: navegação completa só com teclado + uma passada com VoiceOver.

---

<a name="17-jurídico"></a>
## 17. Jurídico: CRECI, LGPD, disclaimers

`[Toda esta seção precisa de validação por advogado. O que segue é checklist de projeto, não parecer jurídico.]`

- **CRECI visível** — número de inscrição do corretor exibido em header e rodapé (exigência da Lei 6.530/1978 e resoluções do COFECI para publicidade imobiliária). Se a atuação for por PJ, exibir também o CRECI-J.
- **LGPD:**
  - Política de Privacidade em `/privacidade`, linkada no rodapé e no briefing.
  - Consentimento explícito no envio do briefing: checkbox **não pré-marcada** — "Autorizo o contato por WhatsApp sobre imóveis que batem com o que descrevi."
  - Base legal, finalidade, prazo de retenção e canal de exclusão declarados.
  - Se usar Umami sem cookies, **dispensa banner** — motivo forte para escolher Umami em vez de GA4.
- **Disclaimer da carteira:** "Informações fornecidas pelos proprietários e conferidas em campo e em documento na data indicada. Podem sofrer alteração. Nenhuma informação aqui substitui a análise documental completa antes da compra."
- **Disclaimer dos guias:** "Conteúdo informativo. Não substitui consulta a advogado, engenheiro agrônomo ou cartório."
- **Imagens:** confirmar autorização do proprietário para divulgar fotos e localização de cada área.
- **Preço:** se exibido, deixar claro que não constitui oferta vinculante.

---

<a name="18-roadmap-de-execução"></a>
## 18. Roadmap de execução

### Fase 0 — Matéria-prima (o corretor, 1 semana) ⚠️ *bloqueia tudo*

Sem isso, o site fica bonito e vazio.

- [ ] Escolher 6–8 imóveis para o lançamento
- [ ] Para cada um: 12 fotos (shot list 11), croqui do perímetro (CAR/SIGEF), ficha de dados completa
- [ ] Preencher o Índice de Deslocamento (A3) — pelo menos 15 municípios
- [ ] Revisar e ajustar os 14 pontos do protocolo para o processo real
- [ ] Escrever 1 estudo de caso com autorização do cliente
- [ ] Levantar os números reais da ficha "Em campo"
- [ ] Foto de perfil em campo (não estúdio, não terno)
- [ ] Confirmar CRECI, razão social, WhatsApp comercial

### Fase 1 — Fundação (3–4 dias)
- [ ] Setup Astro + content collections + Zod schema
- [ ] `tokens.css`, tipografia, fontes auto-hospedadas
- [ ] Componentes base: `FichaTecnica`, `Croqui`, `CotaDimensional`, `SeloVerificacao`
- [ ] Layout `Base` + header/rodapé
- [ ] Deploy contínuo no Cloudflare Pages + preview por branch

### Fase 2 — Home (5–6 dias)
- [ ] Hero assimétrico + painel "Em carteira hoje" dinâmico
- [ ] Faixa de territórios
- [ ] Seção do problema + protocolo de 14 pontos
- [ ] `FichaImovel` + grid da carteira + toggle ha/alqueire
- [ ] `MapaTerritorios` (desenhar SVG do ES, 4 áreas, acessível)
- [ ] Caderno de Campo (quem sou eu)
- [ ] Estudo de caso
- [ ] Glossário/acordeão + rodapé-ficha

### Fase 3 — Conversão (3–4 dias)
- [ ] `Briefing` 5 passos + fallback sem JS
- [ ] Worker de captura + webhook para CRM
- [ ] Montador de link de WhatsApp com contexto
- [ ] Tela de sucesso com 3 fichas filtradas dinamicamente
- [ ] Lista reservada + PDF do checklist

### Fase 4 — Profundidade (4–5 dias)
- [ ] `/imovel/[slug]` — ficha completa com galeria, croqui animado, mapa de contexto
- [ ] 4 páginas de região
- [ ] `/quero-vender`
- [ ] 3 guias iniciais + glossário
- [ ] Diário de campo (estrutura + 3 posts)

### Fase 5 — Polimento e lançamento (3 dias)
- [ ] Schema JSON-LD em todos os templates
- [ ] OG images geradas no build
- [ ] Auditoria de acessibilidade (teclado + leitor de tela)
- [ ] Lighthouse CI e verificação do orçamento de performance
- [ ] Revisão de copy contra a lista negra (seção 3) e o checklist anti-IA (seção 20)
- [ ] Teste em iPhone SE, Android médio, e um notebook de 1366px
- [ ] Google Business Profile + Search Console + sitemap
- [ ] **Teste do WhatsApp: enviar todos os links, conferir mensagem pré-preenchida**

**Total estimado: 18–22 dias úteis de execução, após a Fase 0.**

### Ordem de corte, se o prazo apertar
Cortar nesta ordem: Diário de Campo → páginas programáticas → guias 2 e 3 → estudo de caso.
**Nunca cortar:** protocolo de 14 pontos, croquis, briefing, contexto no WhatsApp. São eles que diferenciam.

---

<a name="19-métricas"></a>
## 19. Métricas e instrumentação

### Eventos a rastrear

| Evento | Parâmetros | Por quê |
|---|---|---|
| `briefing_inicio` | origem | Topo do funil real |
| `briefing_passo` | passo, finalidade | **Onde as pessoas desistem** |
| `briefing_envio` | finalidade, região, área, faixa, prazo | Composição da demanda |
| `whats_clique` | origem, imovel | Qual seção converte |
| `ficha_abre` | codigo, regiao | Interesse por imóvel |
| `toggle_unidade` | unidade | Diagnóstico de público (quem usa alqueire) |
| `checklist_download` | — | Interesse informacional |
| `lista_reservada` | — | Leads frios de qualidade |
| `scroll_75` | seção | Engajamento real |

### Metas de referência (3 meses após lançamento)

| Indicador | Meta |
|---|---|
| Tempo mediano na home | > 75s |
| Scroll depth mediano | > 65% |
| Conclusão do briefing (dos que iniciam) | > 45% |
| Sessões → contato (briefing + WhatsApp) | 4–7% |
| Leads qualificados / mês | `[definir com o corretor]` |
| Bounce em páginas de região | < 55% |

### Leitura estratégica dos dados
`briefing_envio` agregado é **inteligência de mercado**: mostra qual finalidade e qual região têm demanda reprimida — e portanto onde o corretor deve **captar** imóveis. O site vira ferramenta de negócio, não folheto.

---

<a name="20-checklist-anti-ia"></a>
## 20. Checklist anti-IA / anti-clichê — o filtro final

Rodar antes do lançamento. Qualquer "sim" na coluna esquerda = refazer.

### Visual
- [ ] Existe algum gradiente colorido? → remover
- [ ] Existe `border-radius` > 4px em card ou seção? → zerar
- [ ] Existe `box-shadow` difuso? → trocar por filete
- [ ] Existem três blocos idênticos lado a lado com ícone? → reescrever como lista numerada
- [ ] Algum ícone veio de biblioteca genérica? → substituir por croqui/pictograma autoral
- [ ] Hero está centralizado? → assimetrizar
- [ ] Alguma foto é de banco de imagens? → **remover ou não lançar**
- [ ] Tem emoji em título ou bullet? → remover
- [ ] Todas as seções têm a mesma largura? → variar 7/5/9/12 colunas
- [ ] Espaçamento entre todas as seções é idêntico? → variar de propósito

### Copy
- [ ] Alguma frase da lista negra (seção 3) sobreviveu?
- [ ] O texto usa "nós/nossa equipe" em vez de "eu"?
- [ ] Alguma afirmação sem número? → especificar ou cortar
- [ ] Existe adjetivo superlativo ("excelente", "incrível", "único")? → cortar
- [ ] Alguma seção admite um defeito, limite ou recusa? → **se nenhuma, a página está mentindo**
- [ ] Frases todas com o mesmo comprimento? → variar ritmo, incluir frase de 3 palavras
- [ ] Algum trecho serviria para vender qualquer outro produto? → reescrever
- [ ] Tem nome de município real em pelo menos 6 lugares diferentes?
- [ ] Tem pelo menos 3 termos técnicos do domínio (CAR, matrícula, outorga, módulo fiscal)?

### Estrutura
- [ ] Tem mais de 3 CTAs distintos? → reduzir
- [ ] Existe seção que só existe porque "todo site tem"? → deletar
- [ ] Tem depoimento genérico de duas linhas? → trocar por 1 caso longo
- [ ] Tem contador animado de números redondos? → remover
- [ ] Existe alguma data visível que prova atualização recente?

### O teste final — **o teste do print**
> Tire um print de qualquer parte da página, tape o logo e mostre para alguém do mercado imobiliário do ES.
> **Se essa pessoa não conseguir dizer que é de um corretor rural do Espírito Santo, a página falhou.**

### O teste do parágrafo
> Pegue qualquer parágrafo e pergunte: *outro corretor poderia publicar isso literalmente?*
> Se sim, ele não diz nada. Reescreva com um número, um município ou uma recusa.

---

<a name="21-backlog-v2"></a>
## 21. Backlog v2

Só depois que a v1 estiver rodando e gerando lead.

1. **Comparador de áreas** — selecionar 2–3 fichas e ver lado a lado (área, água, acesso, doc., preço/ha).
2. **Calculadora de preço por hectare** com faixa de referência da microrregião — precisa de base de dados própria, é o ativo mais defensável possível.
3. **Simulador de crédito rural** (Pronaf/Pronamp/Inovagro) — atrai P1 e P3 fortemente. `[Exige revisão de conformidade.]`
4. **Ficha em PDF** gerada no build, para o cliente mandar no WhatsApp da família.
5. **Modo campo** — versão ultraleve da ficha para abrir com 1 barra de sinal na estrada. Muito capixaba, muito útil, zero concorrente tem.
6. **Alertas por WhatsApp** quando entrar área que bate com o briefing salvo.
7. **Vista de mapa da carteira** — todos os imóveis num mapa único (só quando houver > 25 áreas).
8. **Timelapse do território** — imagem de satélite histórica mostrando evolução da região. Conteúdo altamente compartilhável.

---

## Apêndice A — Pendências que exigem decisão ou verificação

| # | Item | Responsável | Bloqueia |
|---|---|---|---|
| 1 | Nome, CRECI, cidade-base, WhatsApp comercial | Corretor | Fase 1 |
| 2 | Fator de conversão de alqueire praticado por região do ES | Corretor (checagem local) | `ToggleUnidade` |
| 3 | Faixas de preço por hectare nas 4 regiões | Corretor | Páginas de região |
| 4 | Revisão dos 14 pontos vs. processo real | Corretor | Seção 8.4 |
| 5 | Revisão jurídica dos guias e disclaimers | Advogado agrário/imobiliário ES | Fase 4 |
| 6 | Módulo fiscal por município de atuação | Consulta à tabela oficial do INCRA | Guia de documentos |
| 7 | Regras vigentes de prazo de georreferenciamento por faixa de área | Verificação da norma atual | Guia de documentos |
| 8 | Autorização de proprietários para publicar fotos/localização | Corretor | Fase 0 |
| 9 | Escolha da headline do hero (A, B ou C) | Corretor | Fase 2 |
| 10 | Definir SLA de resposta declarado no site | Corretor | Fase 3 |

---

## Apêndice B — Resumo em uma página (para colar na parede)

```
CONCEITO      Caderno de Campo — papel de cartório com respiro de galeria
TESE          A página vende o critério, não o imóvel
VOZ           Primeira pessoa do singular, número em vez de adjetivo,
              admite defeito
PALETA        Papel #F5F3EE · Grafite #24251F · Terra #9C4A2A · Filete #C9C5B8
TIPO          Fraunces (display) · Inter Tight (texto) · JetBrains Mono (dados)
RAIO          0                     SOMBRA        nenhuma
IDENTIDADE    Ficha · Croqui de perímetro · Cota dimensional
CONVERSÃO     Briefing 5 passos → WhatsApp com contexto estruturado
DIFERENCIAIS  14 pontos de verificação · Índice de Deslocamento ·
              Diário de Campo · Carteira Reservada · "71 áreas recusadas"
BANIDO        Gradiente · stock photo · 3 cards com ícone · contador animado ·
              "realize o sonho" · hero centralizado
TESTE FINAL   Tape o logo. Dá pra saber que é corretor rural do ES? Se não, refaça.
```

---

*Documento vivo. Atualizar a cada fase concluída.*
