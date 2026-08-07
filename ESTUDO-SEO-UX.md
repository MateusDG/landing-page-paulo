# Estudo de SEO orgânico e UX/UI — Valdecir Imóveis

Data da pesquisa: 7 de agosto de 2026  
Escopo: pesquisa de público e intenção de busca, auditoria técnica do projeto local,
auditoria visual desktop/mobile e plano de trabalho. Nesta etapa, o site não foi
redesenhado nem teve o conteúdo dos imóveis alterado.

## 1. Resumo executivo

O projeto novo já tem uma base técnica forte: é estático, rápido, tem títulos e
descrições próprios, URLs canônicas, sitemap com imagens, dados estruturados,
hierarquia de títulos e textos alternativos. O build gerou 16 páginas sem erros,
avisos ou hints.

O maior risco não é técnico; é de verdade e de intenção:

1. Todas as quatro fichas estão marcadas como `rascunho: true`, mas são públicas,
   entram na carteira e no sitemap.
2. A ficha afirma “Conferido em campo” de forma fixa, sem um campo específico que
   registre essa verificação; ao mesmo tempo, `croquiVerificado` está como `false`.
3. O imóvel de Santa Teresa diverge da informação dada para o anúncio: o site
   informa cerca de 7 mil pés de café; o anúncio informa 6 mil e acrescenta a
   localidade Rio Saltinho. A área de 20 mil m² equivale aos 2 ha do site.
4. A versão que o Google ainda mostra é a página antiga, com outro título,
   arquitetura e afirmações como “150+ terrenos”, “500+ clientes” e “15+ anos”.
   A futura publicação precisa ser tratada como uma atualização de identidade e
   conteúdo, seguida por recrawl no Search Console.
5. O usuário pesquisa principalmente por **tipo de imóvel + cidade/região +
   característica**. O site novo organiza a oferta por quatro macrorregiões e por
   finalidade, mas ainda não permite procurar diretamente por cidade, tipo, preço
   ou característica.
6. No celular, os filtros e o cabeçalho da ficha ocupam muito espaço antes de o
   visitante chegar aos imóveis, ao preço e à ação principal.

Tese recomendada: competir menos com portais nacionais por termos genéricos e
dominar buscas locais e específicas com informação própria de campo, dados
consistentes, fotos reais e contato contextual no WhatsApp.

## 2. Método e limitações

Foram usados:

- inspeção do código e do HTML final;
- build completo do projeto;
- navegação real em 1440 × 900 px e 390 × 844 px;
- amostra de resultados de busca e previsões do Google Autocomplete em pt-BR;
- fontes oficiais do Google, Governo do Espírito Santo, Incaper e Prefeitura de
  Santa Teresa;
- leitura da estrutura usada por portais concorrentes.

As sugestões do Autocomplete refletem buscas reais, padrões da web, idioma,
localização e tendências, mas não equivalem a um ranking de volume. O próprio
Google faz essa ressalva em [Como funcionam as previsões do
Autocomplete](https://support.google.com/websearch/answer/7368877?hl=pt-BR).

Não há acesso, nesta etapa, ao Planejador de Palavras-chave nem aos dados do
Search Console da propriedade. Portanto, não são apresentados números inventados
de buscas mensais. A validação quantitativa deve ser feita com impressões, cliques
e CTR reais depois da publicação.

## 3. Público-alvo

### 3.1 Comprador para moradia e lazer

Procura chácara, sítio ou terreno rural próximo de uma cidade conhecida. Quer
tranquilidade, natureza e espaço, mas também precisa entender acesso, distância,
água, energia, internet, segurança, vizinhança, casa existente e preço.

Termos observados no Autocomplete incluem combinações de “chácara à venda” com
Guarapari, Viana, Colatina, Vitória, Santa Teresa e Domingos Martins; e “sítio à
venda” com Serra, Guarapari, Fundão, Viana, Muqui, Alegre, Pancas, Iúna e Guaçuí.

### 3.2 Produtor rural e família agricultora

Procura área produtiva, principalmente relacionada a café, pecuária ou cultivo.
Compara hectares e alqueires, água, produtividade, idade e variedade da lavoura,
solo, relevo, estrada, energia, estruturas e documentação.

Esse público é especialmente relevante no estado. O Governo do Espírito Santo
informa que a agricultura familiar está presente em 75% das propriedades rurais e
em 78% dos estabelecimentos produtores de café. O Incaper informa que o café está
presente em aproximadamente 60 mil das 90 mil propriedades agrícolas capixabas;
73% dos produtores são de base familiar, com propriedade média de 8 ha.
[Governo do ES](https://www.es.gov.br/Noticia/tres-em-cada-quatro-estabelecimentos-rurais-no-espirito-santo-sao-de-agricultura-familiar) ·
[Incaper](https://incaper.es.gov.br/cafeicultura)

Em Santa Teresa, dados compilados pelo Incaper indicam que o café representava
86,9% da área de lavouras permanentes do município no levantamento citado. Isso
torna “sítio/fazenda de café” uma especialização coerente e não apenas uma palavra-
chave oportunista.
[Programa municipal do Incaper](https://incaper.es.gov.br/media/incaper/proater/municipios/Santa_Teresa.pdf)

### 3.3 Investidor e empreendedor de turismo rural

Compara preço por hectare, acesso, proximidade de Vitória ou polos turísticos,
potencial de valorização, produção existente e possibilidade de pousada,
agroturismo ou locação. Santa Teresa vem reforçando oficialmente sua posição no
turismo rural, inclusive com a RuralTur 2026.
[Prefeitura de Santa Teresa](https://www.santateresa.es.gov.br/noticias_individual/1931)

### 3.4 Proprietário que deseja vender

Busca avaliação, corretor especializado, divulgação, documentação e segurança na
negociação. É um público diferente do comprador e deve ter página e jornada
próprias, sem dividir a mensagem principal da home.

## 4. O que esse público busca

### 4.1 Núcleo comercial prioritário

| Grupo de busca | Exemplos | Intenção | Página recomendada |
|---|---|---|---|
| Imóveis rurais no estado | imóveis rurais à venda no Espírito Santo | Comparar oferta | Home e `/imoveis/` |
| Chácara | chácara à venda no Espírito Santo; chácara à venda em Santa Teresa ES | Compra para lazer/moradia | Categoria quando houver estoque + imóvel/cidade |
| Sítio | sítio à venda no Espírito Santo; sítio à venda em Fundão ES | Compra para morar, lazer ou produzir | Categoria quando houver estoque + imóvel/cidade |
| Fazenda | fazenda à venda no Espírito Santo; fazenda no Norte/Sul do ES | Produção ou investimento | Categoria/região |
| Terreno rural | terreno rural à venda no Espírito Santo | Construção ou investimento | Categoria quando houver estoque |
| Café | fazenda de café à venda no Espírito Santo; sítio de café em Santa Teresa | Produção especializada | Imóvel + guia de cafeicultura/local |
| Cidade | chácara/sítio/fazenda à venda em `[cidade]` ES | Alta intenção local | Página municipal somente com conteúdo real |

As páginas fortes dos grandes portais usam exatamente a combinação
**transação + tipo + localização**. A amostra encontrada mostrava 944 imóveis
rurais, 640 chácaras, 184 fazendas e 124 sítios no Imovelweb. Esses números são
estoque do portal, não volume de busca; servem para mostrar o nível de concorrência
dos termos genéricos.
[Imóveis rurais](https://www.imovelweb.com.br/rurais-venda-espirito-santo.html) ·
[Chácaras](https://www.imovelweb.com.br/rurais-chacara-venda-espirito-santo.html) ·
[Fazendas](https://www.imovelweb.com.br/rurais-fazenda-venda-espirito-santo.html) ·
[Sítios](https://www.imovelweb.com.br/rurais-sitio-venda-espirito-santo.html)

Conclusão competitiva: um site pequeno não deve depender de “fazenda à venda”
sozinho. Tem melhor chance com “sítio de café à venda em Rio Saltinho, Santa
Teresa”, “chácara com nascente em Ibiraçu” e variações locais equivalentes.

### 4.2 Modificadores de decisão

Devem aparecer quando forem verdadeiros, em títulos, subtítulos, ficha técnica,
legendas e texto corrido:

- cidade, comunidade/distrito e região;
- área em m², hectares e alqueires;
- preço total e preço por hectare;
- nascente, córrego, lagoa, poço ou disponibilidade de água;
- café, quantidade de pés, variedade, idade e produção comprovada;
- casa, curral, galpão, energia e internet;
- quilômetros de asfalto e estrada de terra;
- distância/tempo até a cidade e até Vitória;
- topografia e aptidão de uso;
- situação documental efetivamente conferida.

### 4.3 Conteúdo informacional que aproxima a conversão

O Autocomplete destacou “financiamento imóvel rural como funciona” e variações
por banco. Também são recorrentes as dúvidas sobre escritura, CAR, CCIR, ITR,
acesso, água e diferença entre hectare e alqueire.

Pautas recomendadas:

1. Como analisar os documentos antes de comprar um imóvel rural no ES.
2. Financiamento de imóvel rural: o que perguntar ao banco e ao corretor.
3. Hectare e alqueire no Espírito Santo: como comparar sem errar.
4. Como avaliar água, acesso e topografia numa visita.
5. O que verificar numa lavoura de café antes de comprar a propriedade.
6. Imóveis rurais em Santa Teresa: café, relevo, acesso e perfil das áreas.
7. Como preparar e anunciar um imóvel rural no Espírito Santo.

Conteúdo jurídico, ambiental ou financeiro deve ser revisto pelo profissional
competente e datado. O diferencial deve vir da experiência real de visita, não de
texto genérico. Essa orientação está alinhada ao guia de [conteúdo útil e feito
para pessoas](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
do Google.

## 5. Diagnóstico de SEO do projeto

### Pontos fortes

- HTML estático e build rápido, sem dependência de JavaScript para o conteúdo.
- Um `<h1>` por página e hierarquia semântica coerente.
- Títulos, descrições, canônicas, Open Graph e idioma `pt-BR`.
- `robots.txt` e `sitemap-index.xml` válidos; o sitemap principal inclui fotos.
- Dados estruturados de agente imobiliário, site, listagem, breadcrumbs e imóveis.
- URLs legíveis e fichas individuais persistentes.
- Fotos locais, `alt` específico e dimensões informadas.
- Links internos entre home, regiões, carteira, imóveis semelhantes e venda.
- Botões de filtro usam `aria-pressed`; contagem usa `aria-live`.
- `astro check`: 0 erros, 0 avisos e 0 hints.

### Riscos prioritários

#### P0 — Integridade do conteúdo

- As quatro fichas estão como rascunho e ainda assim são indexáveis.
- “Conferido em campo” é exibido sem um estado próprio que comprove essa etapa;
  os quatro croquis estão marcados como não verificados.
- A ficha SI-0202 precisa reconciliar 6 mil versus 7 mil pés de café e adicionar
  Rio Saltinho se essa for a localidade correta.
- Dados ainda “a confirmar” não podem receber linguagem de verificação.

Isso afeta confiança do usuário e a qualidade percebida pelo Google. Conteúdo
útil também precisa ser confiável e sem erros factuais verificáveis.

#### P0 — Versão pública e identidade

A busca pública ainda apresenta a home antiga (“Terrenos e Chácaras no Interior
do ES | Valdecir Imóveis”), enquanto o projeto novo usa “Valdecir Francisco”. É
necessário definir um nome principal consistente no site, Perfil da Empresa,
Facebook e demais perfis. Após o deploy, o Search Console deve solicitar a nova
leitura das páginas prioritárias.

#### P1 — Cobertura de intenção

- O H1 da home usa “Compra e venda”, enquanto a intenção principal é “imóveis
  rurais à venda”.
- A carteira menciona fazendas, sítios e chácaras no título, mas deixa “terrenos
  rurais” apenas na descrição.
- As páginas regionais são amplas; o Autocomplete mostra forte comportamento por
  cidade.
- Filtros no navegador não geram páginas rastreáveis — o que é correto para evitar
  duplicação, mas exige landing pages estáticas seletivas para categorias/cidades
  com conteúdo suficiente.

#### P1 — Risco de páginas finas

Não criar uma página para cada cidade apenas trocando o nome. Uma página municipal
só deve existir quando houver ao menos um imóvel real e conteúdo local próprio —
idealmente mais de um imóvel, notas de campo, acesso, produção e perguntas comuns.

#### P2 — Dados estruturados

A marcação atual é extensa e bem formada, mas não se deve contar com um resultado
enriquecido específico para imóveis rurais: o Google não promete isso. O ganho
principal virá de conteúdo, arquitetura, links, Perfil da Empresa e comportamento
do usuário; schema serve para clareza, não para garantir posição.

O [Guia inicial de SEO do Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
reforça títulos descritivos, navegação clara, texto útil e imagens bem descritas.

## 6. Auditoria UX/UI

### Fluxo auditado

1. Entrada pela home.
2. Acesso à carteira.
3. Uso do filtro “Produção”.
4. Abertura da ficha do sítio de café.
5. Localização do preço, fotos e CTA de WhatsApp.
6. Repetição do fluxo no celular.

### O que funciona

- Identidade visual própria e coerente; o site não parece um portal genérico.
- Hierarquia tipográfica forte e CTA principal claro.
- Fichas facilitam comparar área, água, acesso e preço.
- O filtro responde imediatamente e atualiza a contagem.
- A ficha do imóvel tem preço, preço por hectare, fotos, ficha técnica e CTA.
- A barra móvel oferece carteira e WhatsApp.
- Navegação, breadcrumbs, foco e semântica são sólidos.

### Fricções observadas

#### Home

- O visitante não consegue começar pela pergunta natural “onde e que tipo de
  imóvel você procura?”. Precisa rolar até a carteira.
- No desktop, a ficha técnica ocupa uma parte importante da primeira tela sem
  ajudar a localizar uma propriedade.
- Os cards sem foto preservam a linguagem documental, mas aumentam o custo de
  reconhecimento. Para imóveis, uma foto real de capa tende a ajudar a decisão e
  ainda alimenta a busca por imagens.

#### Carteira

- No desktop, a primeira tela fica quase toda tomada por título e filtros; os
  imóveis começam abaixo.
- No celular, os grupos de filtros ocupam várias telas antes do primeiro imóvel.
- Faltam filtros por município, tipo do imóvel, preço e características.
- O estado do filtro não aparece na URL; não é possível compartilhar uma busca.
- A grande distância visual entre contagem e primeiro card enfraquece a relação
  entre ação e resultado.

#### Ficha do imóvel

- No celular, croqui, breadcrumb e título empurram preço e CTA para depois da
  primeira tela.
- A foto principal aparece depois da ficha técnica, embora seja uma das maiores
  provas do imóvel.
- A barra fixa de WhatsApp usa mensagem genérica; numa ficha deveria incluir
  automaticamente código e título do imóvel.
- A informação “Conferido em campo” precisa ser condicional e comprovável.
- A localidade dentro do município, quando segura para publicar, deve aparecer
  perto do título.

### Acessibilidade: riscos e limites

- Os controles têm boa semântica, foco e áreas de toque adequadas.
- O texto monoespaçado em caixa alta, com 12 px e espaçamento amplo, pode ser
  cansativo para pessoas mais velhas; recomenda-se testar 13–14 px nas informações
  essenciais, especialmente no celular.
- A inspeção visual não comprova conformidade WCAG. Ainda é necessário testar
  teclado, leitor de tela, zoom de 200%, reflow a 320 px e contraste calculado de
  todos os estados interativos.

## 7. Plano de arquitetura e conteúdo

### Estrutura imediata

- `/` — intenção ampla de compra; vendedor como caminho secundário.
- `/imoveis/` — carteira completa, com filtros usáveis e não indexáveis por
  combinação.
- `/imovel/[slug]/` — página mais importante para long-tail e conversão.
- `/regiao/[slug]/` — guia regional com notas reais e imóveis disponíveis.
- `/quero-vender/` — jornada exclusiva do proprietário.
- `/diario/` — autoridade de campo e atualização contínua.

### Estrutura futura, apenas quando houver densidade

- `/imoveis/chacaras/`
- `/imoveis/sitios/`
- `/imoveis/fazendas/`
- `/imoveis/terrenos-rurais/`
- `/imoveis/santa-teresa/`, `/imoveis/ibiracu/`, `/imoveis/fundao/`

Cada página futura deve ter oferta real, introdução original, contexto local,
perguntas úteis e links para imóveis. Sem isso, é melhor não publicá-la.

### URLs de filtros

Filtros podem usar parâmetros compartilháveis, por exemplo:

`/imoveis/?tipo=sitio&municipio=santa-teresa&preco-max=600000`

Essas combinações devem apontar canonicamente para `/imoveis/` e não virar milhares
de páginas indexáveis. Landing pages estáticas ficam reservadas aos agrupamentos
que realmente merecem ranquear.

## 8. Plano de mudanças UX/UI

### Fase 0 — verdade antes de tráfego

1. Conferir dados, disponibilidade, preço, fotos, autorização e localização dos
   quatro imóveis.
2. Corrigir a divergência do imóvel SI-0202.
3. Exibir “Conferido em campo” apenas quando verdadeiro.
4. Excluir rascunhos do sitemap ou aplicar `noindex` até a validação final.
5. Escolher e padronizar o nome público do negócio.

### Fase 1 — descoberta e conversão

1. Trocar o H1 da home para “Imóveis rurais à venda no Espírito Santo”.
2. Incluir busca compacta por município e tipo na abertura.
3. Compactar os filtros; no celular, usar resumo + botão “Filtrar”.
4. Adicionar filtros por município, tipo, preço e características.
5. Mostrar contagem e botão “Ver X imóveis” junto aos filtros.
6. Inserir uma foto real de capa nos cards, mantendo croqui e ficha técnica.
7. Reordenar a ficha móvel: título/localidade → foto → preço/CTA → fatos-chave →
   croqui e detalhes.
8. Tornar a barra móvel contextual ao imóvel.

### Fase 2 — relevância local

1. Ajustar títulos e descrições conforme o mapa de palavras-chave.
2. Transformar páginas de região sem estoque em guias honestos, com alerta de
   interesse, em vez de prometer imóveis inexistentes.
3. Criar página municipal somente quando houver conteúdo suficiente.
4. Publicar duas notas de campo úteis por mês, sempre com foto e experiência
   própria.
5. Completar Perfil da Empresa, avaliações e consistência de nome, telefone e
   site. O Google informa que resultados locais dependem principalmente de
   relevância, distância e popularidade.
   [Google Business Profile](https://support.google.com/business/answer/7091?hl=pt-BR)

### Fase 3 — medição e melhoria

1. Verificar Search Console e enviar sitemap.
2. Acompanhar consultas não relacionadas à marca, páginas, impressões, CTR e
   posição como tendência.
3. Medir cliques de WhatsApp por página, imóvel e origem.
4. Medir uso de filtros e buscas sem resultado.
5. Melhorar primeiro páginas com muitas impressões e baixo CTR, e consultas entre
   posições aproximadas 4 e 15.

O relatório de desempenho do Search Console permite ver consultas, páginas,
cliques, impressões e CTR; ele deve ser a fonte de verdade para decidir quais
termos merecem expansão após a publicação.
[Search Console](https://support.google.com/webmasters/answer/17010961?hl=pt-BR)

## 9. Prioridades e critérios de aceite

### P0 — antes de pedir indexação

- Nenhuma ficha indexável continua como rascunho.
- Nenhuma afirmação de verificação aparece sem evidência.
- Dados do site, Facebook e proprietário coincidem.
- Nome, telefone e identidade coincidem em todos os canais.
- Sitemap contém somente páginas que podem ser apresentadas ao público.

### P1 — primeira entrega de produto

- Usuário encontra imóveis por cidade, tipo, preço e características.
- No celular, preço e CTA aparecem sem uma longa rolagem.
- Filtros podem ser limpos e compartilhados.
- CTA de WhatsApp informa automaticamente o imóvel e a origem.
- Títulos/H1 refletem a intenção de busca sem repetição artificial.

### P2 — primeiros 90 dias

- Search Console mostra indexação válida e consultas relevantes.
- Perfil da Empresa está completo e consistente.
- Conteúdo local original é publicado com frequência sustentável.
- Decisões de novas páginas são baseadas em estoque e dados reais, não em lista
  genérica de palavras-chave.

## 10. Evidências visuais

As capturas estão em `.audit-seo-ux/`:

Limite da captura: nas imagens desktop, o navegador interno recortou a faixa mais
à direita da viewport. Por isso, elas sustentam apenas as conclusões sobre a área
visível central/esquerda. Presença, texto e estado dos valores no painel direito
foram conferidos separadamente no DOM e não são tratados como falha visual.

1. `01-home-desktop.png` — entrada desktop.
2. `03-listagem-desktop.png` — título e filtros da carteira.
3. `04-listagem-filtrada-desktop.png` — filtro de produção aplicado.
4. `05-imovel-desktop.png` — abertura da ficha.
5. `06-imovel-galeria-desktop.png` — CTA e início da galeria.
6. `07-home-mobile.png` — entrada mobile.
7. `08-listagem-mobile.png` — filtros mobile.
8. `09-imovel-mobile.png` — primeira tela da ficha mobile.
9. `10-imovel-mobile-cta.png` — preço e CTA após rolagem.

## 11. Relação com o plano já existente

O arquivo `SEO-EXTERNO.md` já cobre corretamente publicação, Search Console,
Perfil da Empresa, avaliações, consistência de dados, conteúdo local e links. Este
estudo não substitui esse roteiro: acrescenta a pesquisa de intenção, o diagnóstico
da versão atual, as prioridades de integridade e o plano de UX/UI.

SEO não garante primeira posição nem resultado imediato. O objetivo é fazer cada
página corresponder a uma procura real, oferecer prova suficiente para a decisão e
transformar o tráfego orgânico certo em conversas qualificadas.
