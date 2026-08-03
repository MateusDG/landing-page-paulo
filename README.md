# Corretor rural no Espírito Santo

Site de um corretor de imóveis rurais no ES: fazendas, chácaras, sítios e
terrenos. Astro 7, estático, sem framework de UI, sem dependência de terceiros
em runtime.

A estratégia, a direção de arte e as decisões por trás de cada seção estão em
[PLANO-LANDING-PAGE.md](PLANO-LANDING-PAGE.md). **Este README é o manual de
operação:** como rodar, como publicar um imóvel e o que precisa ser trocado
antes de o site ir ao ar.

---

## A tese, em uma frase

O site não vende imóveis — vende o **critério** de quem seleciona os imóveis.
Portfólio muda toda semana e é parcialmente compartilhado com concorrentes; o
método de verificação é o que não se copia. Por isso o protocolo de 14 pontos,
o croqui do perímetro em cada ficha e a seção "o que essa área não tem" são
inegociáveis: são eles que sustentam tudo o mais.

---

## Rodar

```bash
npm install
npm run dev
```

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Gera `dist/` (estático) |
| `npm run preview` | Serve o `dist/` já construído |
| `npm run check` | Tipagem TypeScript + diagnóstico Astro |
| `npm run fonts` | Regenera as fontes subsetadas em `public/fonts/` |
| `npm run pdf` | Regenera `public/checklist-14-pontos.pdf` |
| `npm run shot -- <url> <saida.png> [--w=] [--h=] [--full] [--y=]` | Captura de tela para QA visual |

> **Nota do ambiente de desenvolvimento:** com `trailingSlash: 'always'`, o
> servidor de dev só responde às imagens OG com barra no fim
> (`/og/padrao.png/`). No build de produção os arquivos saem no caminho exato
> (`/og/padrao.png`) — que é o que os robôs e o WhatsApp buscam. Não é bug.

### Publicação na Hostinger

A branch `main` guarda somente o código-fonte. O workflow
`.github/workflows/deploy-hostinger.yml` valida o projeto, executa
`npm run build` e publica apenas o conteúdo de `dist/` na branch `hostinger`.

No hPanel, em **Git**, configure:

1. Repositório: `MateusDG/landing-page-paulo`
2. Branch: `hostinger`
3. Caminho de instalação: vazio, para publicar diretamente em `public_html`
4. Implantação automática: ativada com o webhook fornecido pela Hostinger

Não aponte a Hostinger para a branch `main`. Isso colocaria o código-fonte em
`public_html` e deixaria arquivos internos acessíveis pela internet.

---

## Antes de publicar

Checklist de bloqueio. Enquanto o primeiro item não for feito, o site mostra
uma faixa laranja avisando que os dados são fictícios — **inclusive em
produção**, de propósito.

### 1. Trocar os dados de exemplo

Tudo em [`src/data/site.ts`](src/data/site.ts), marcado com `// PREENCHER`:

- [x] `nome`: Valdecir Francisco
- [x] `whatsapp`: `5527999309535`
- [ ] `cidadeBase` e `desde`
- [ ] `sla` — **só prometa o que você cumpre.** Prometer resposta e falhar é
      pior que não prometer.
- [ ] `emCampo` — os seis números da ficha "Em campo". Precisam ser
      verdadeiros e contados. A linha **"Áreas que recusei"** é a mais valiosa
      da página; nenhum concorrente publica isso. Não remova.
- [ ] `coordenadaBase`
- [ ] Virar `DADOS_DE_EXEMPLO = false` — some a faixa de aviso.

### 2. Ambiente

```bash
cp .env.example .env
```

- [ ] `PUBLIC_SITE_URL` — domínio final, sem barra no fim
- [ ] `PUBLIC_WHATSAPP`
- [ ] Atualizar `PUBLIC_SITE_URL` no ambiente de produção

### 3. Conteúdo real

- [ ] Substituir os 9 imóveis de exemplo em `src/content/imoveis/`
- [ ] Preencher [`src/data/deslocamento.ts`](src/data/deslocamento.ts) com
      tempos **medidos por você**
- [ ] Revisar os 14 pontos em [`src/data/protocolo.ts`](src/data/protocolo.ts)
      contra o seu processo real — se você não faz um dos pontos, **tire o
      ponto**, não invente processo
- [ ] Confirmar as faixas de preço por região
- [ ] Confirmar o fator de conversão do alqueire praticado em cada sub-região
      (ver [`src/lib/unidades.ts`](src/lib/unidades.ts)) — o alqueire **não é
      uniforme no Brasil** e negociação com medidas trocadas já travou negócio
- [ ] Substituir o caso em `src/content/casos/` por um real, com autorização
- [ ] Fotografar (ver §Fotografia)

### 4. Jurídico — obrigatório

- [ ] **Revisão por advogado** de `/privacidade`, `/termos`, dos guias e do
      glossário. O que está escrito descreve a prática corrente, mas prazos e
      obrigatoriedades mudam.
- [ ] Autorização por escrito dos proprietários para publicar foto e
      localização de cada área.
- [ ] Autorização por escrito para publicar depoimento com nome.

### 5. Fora do site

- [ ] Google Business Profile (categoria "Corretor de imóveis", com área de
      atendimento em vez de endereço único)
- [ ] Search Console + envio do `sitemap-index.xml`
- [ ] **Testar todos os links de WhatsApp** e conferir a mensagem
      pré-preenchida em cada um

---

## Publicar um imóvel

Um arquivo Markdown em `src/content/imoveis/`. O nome do arquivo vira a URL.

```
src/content/imoveis/fa-0142-alfredo-chaves.md  →  /imovel/fa-0142-alfredo-chaves/
```

O schema em [`src/content.config.ts`](src/content.config.ts) **derruba o
build** se três coisas faltarem. É de propósito: qualidade forçada pelo
sistema, não pela disciplina.

| Regra | Por quê |
|---|---|
| `croqui` obrigatório | É o que faz cada ficha ser única e a carteira não virar galeria de estoque |
| `oQueFalta` com ao menos 1 item | Anúncio sem defeito é anúncio mentindo — e o comprador rural sente isso |
| 6 fotos se `status: ativa` | Enquanto não houver, marque `rascunho: true`: a área entra no site com ficha e croqui, e o sistema deixa claro que falta foto |

Campos que costumam ser esquecidos:

- `preco: null` → vira "Valor sob consulta". O preço, quando existe, é sempre
  exibido **exato** (`R$ 1.450.000`), nunca arredondado para "1,5 milhão".
- `status: vendida` exige `vendidaEm`. **Nunca apague um imóvel vendido:** a
  ficha vira prova social e a URL nunca 404.
- `atualizadoEm` alimenta a data que aparece no hero e no rodapé.

### Croquis

Em produção o croqui é o perímetro **real**, extraído do CAR ou do SIGEF:

1. Baixe o shapefile/GeoJSON do perímetro.
2. Simplifique para ~20 vértices (QGIS: *Vetor → Geometrias → Simplificar*;
   ou [mapshaper.org](https://mapshaper.org)).
3. Exporte como SVG, normalize para um `viewBox` de `0 0 100 100`.
4. Cole o atributo `d` no campo `croqui` do frontmatter.

`scripts/gerar-croquis.mjs` só existe para popular o conteúdo de exemplo —
não use em produção.

---

## Fotografia

**Regra zero: nenhuma foto de banco de imagens. Nenhuma. Nunca.** Uma foto de
stock destrói mais credibilidade do que dez fotos amadoras somam. É por isso
que a página de um imóvel sem fotos mostra a *shot list* em vez de um
placeholder genérico — o estado vazio vira a lista de tarefas do fotógrafo.

Doze fotos por área, na ordem em que aparecem na ficha:

1. **A chegada** — a estrada de acesso, do carro. Acesso é a objeção nº 1.
2. A porteira / entrada
3. A vista de onde a casa está (ou estaria)
4. **A água** — nascente, córrego, açude ou poço. Fator de preço nº 1.
5. O solo na mão, close
6. A lavoura ou o pasto, plano médio
7. **As benfeitorias, incluindo o que está ruim**
8. Cerca e divisa
9. Energia — poste, padrão
10. A vizinhança, o que se vê da divisa
11. **Uma aérea só**, baixa altitude, para entender a forma
12. O detalhe humano — botina, mão, cachorro, café no fogão

Tratamento: primeira hora da manhã ou última da tarde; neblina é ativo na
serra; verdes **dessaturados em ~10%** (verde estourado é a assinatura de
"foto de anúncio"); sem vinheta, sem céu substituído, sem HDR crocante.

`alt` específico, sempre. Não `"fazenda"`, mas
`"estrada de acesso à área, últimos 3 km em leito de terra, após chuva"`.

---

## Arquitetura

```
src/
├─ content/            imóveis · guias · diário · casos   (Markdown + Zod)
├─ data/               dados estruturados que não são conteúdo editorial
│  ├─ site.ts          ← o arquivo que você mais vai editar
│  ├─ territorios.ts   4 regiões + geometria do mapa
│  ├─ protocolo.ts     os 14 pontos
│  ├─ deslocamento.ts  índice de tempo até cada município
│  ├─ glossario.ts     12 verbetes
│  └─ briefing.ts      os 5 passos
├─ lib/                whatsapp · unidades · format · og
├─ styles/             tokens → base → tipografia → componentes → impressão
├─ components/         14 componentes, todos com escopo de estilo próprio
├─ layouts/            Base (SEO, fontes, scripts globais) · Editorial
└─ pages/
   ├─ index.astro                     a home simplificada
   ├─ imoveis/                        carteira com filtros no cliente
   ├─ imovel/[slug].astro             ficha completa
   ├─ regiao/[slug].astro             4 páginas de território
   ├─ guia/                           hub + guias + glossário + deslocamento
   ├─ og/[slug].png.ts                imagens OG geradas no build
   └─ checklist.astro                 origem do PDF de 14 pontos
```

### Três elementos identitários

Repetidos no site inteiro. São eles que fazem um print de qualquer parte da
página ser reconhecível:

| Componente | O que é |
|---|---|
| `FichaTecnica` | Pares rótulo/valor em monoespaçado, separados por filete |
| `Croqui` | Polígono do perímetro real, traço fino, sem preenchimento |
| `CotaDimensional` | Linha com setas nas pontas e um número, como em desenho técnico |

### Decisões que parecem erro e não são

- **A ficha da carteira não tem foto.** Foto vai para a página do imóvel. Sem
  foto a lista fica escaneável e densa — quem compra 40 ha compara água,
  acesso e documento, não decoração.
- **`border-radius: 0` e nenhum `box-shadow` em todo o sistema.** Elevação se
  resolve com fundo + filete. Raio grande e sombra difusa são a assinatura
  visual de template.
- **Uma única animação com graça** no site inteiro: o croqui se desenhando na
  ficha do imóvel. Uma bem colocada vale mais que vinte.
- **A imagem OG é geometria, não tipografia.** O rasterizador ignora
  `@font-face` embutido (testado), então quem carrega a identidade ali é o
  croqui e a paleta — que saem idênticos em qualquer máquina de build.
- **A faixa topográfica do hero é um desenho de projeto**, não enfeite: ocupa
  o lugar da fotografia de abertura enquanto o acervo autoral não existe.
  Quando a foto chegar, troque `<FaixaTopografica />` por `<Image />` em
  `src/pages/index.astro` — o resto do hero não muda.

---

## Verificação

Estado atual do build:

| Métrica | Valor | Teto do projeto |
|---|---|---|
| `astro check` | 0 erros · 0 avisos · 0 hints | 0 erros |
| Páginas geradas | 29 | — |
| Links internos quebrados | 0 nas 29 páginas | 0 |
| Âncoras inexistentes | 0 | 0 |
| JSON-LD inválido | 0 de 29 | 0 |
| HTML da home | 100 KB · **20 KB** gzip | — |
| CSS da home | 28,3 KB · **6,7 KB** gzip | — |
| JS total | 8,6 KB · **3,9 KB** gzip | 35 KB |
| Fontes (3 variáveis, subsetadas) | 107 KB | — |
| Requisições na primeira visita | 6 | 25 |
| Contraste WCAG | 18 de 18 pares em AA ou AAA | AA |

O que **não** foi verificado e precisa ser antes do lançamento:

- Lighthouse em rede real (as medidas acima são de peso de arquivo, não de
  Core Web Vitals medidos)
- Leitor de tela de verdade (VoiceOver / NVDA) — a auditoria feita foi
  estrutural: hierarquia de títulos, `alt`, rótulos, foco e contraste
- Aparelho físico (iPhone SE e Android médio)

### Testes funcionais executados

Briefing passo a passo, validação obrigatória do prazo, filtro de vendidas,
links de WhatsApp e inspeção de console. A auditoria estática também verifica
links, âncoras, JSON-LD, proteção de indexação e conteúdo removido.

---

## Scripts

| Arquivo | Para quê |
|---|---|
| `scripts/build-fonts.py` | Subseta as três fontes variáveis para pt-BR. Fixa `SOFT`/`WONK` do Fraunces e mantém `opsz` variável — é o que faz o título de 6,5rem e o h3 de 1,375rem terem desenhos diferentes em vez de escala burra. Os `.woff2` são versionados; o build não depende de Python. |
| `scripts/gerar-pdf.mjs` | Imprime `/checklist/` em A4 e salva em `public/`. |
| `scripts/shot.mjs` | Captura de tela para QA visual (viewport, página inteira ou a partir de um scroll). |
| `scripts/gerar-croquis.mjs` | Só para o conteúdo de exemplo. Ver §Croquis. |

---

## Publicação

Estático puro. Qualquer host serve; o projeto foi pensado para **Cloudflare
Pages**:

- Comando de build: `npm run build`
- Diretório de saída: `dist`
- Variáveis: as do `.env.example`

Os cabeçalhos básicos estão em `public/_headers`. Fontes e imagens OG usam
cache de um dia porque seus nomes são estáveis; os assets com hash podem ser
configurados com cache imutável na plataforma de hospedagem.

### Analytics

O site sai sem nenhum rastreador. Se ligar o Umami (`PUBLIC_UMAMI_*`), ele não
usa cookie e **dispensa banner de consentimento** — foi por isso que ele foi
escolhido em vez do GA4. Se trocar por GA4 ou adicionar qualquer pixel, a
página `/privacidade` precisa mudar **e** um banner passa a ser necessário.

Eventos já instrumentados: `briefing_inicio`, `briefing_passo`,
`briefing_envio`, `whats_clique`, `checklist_download`.

O agregado de `briefing_envio` é inteligência de mercado: mostra qual
finalidade e qual região têm demanda reprimida — ou seja, **onde captar**.

---

## O filtro final

Antes de considerar qualquer alteração pronta:

> **Teste do print.** Tire um print de qualquer parte da página, tape o logo e
> mostre para alguém do mercado imobiliário do ES. Se essa pessoa não
> conseguir dizer que é de um corretor rural do Espírito Santo, a página
> falhou.

> **Teste do parágrafo.** Pegue qualquer parágrafo e pergunte: outro corretor
> poderia publicar isso literalmente? Se sim, ele não diz nada. Reescreva com
> um número, um município ou uma recusa.

A lista negra de copy e o checklist anti-clichê completo estão na seção 20 do
[plano](PLANO-LANDING-PAGE.md).
