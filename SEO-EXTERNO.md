# Plano externo de SEO para valdecimoveis.com.br

Este roteiro começa depois que a versão otimizada do site estiver publicada.
Siga a ordem. As primeiras etapas cuidam da descoberta e da identidade do
negócio; as seguintes constroem relevância e autoridade ao longo dos meses.

## 1. Publicar e conferir a versão oficial

1. Faça commit e push das alterações para a branch `main`.
2. Aguarde a ação `Publicar na Hostinger` terminar sem erros no GitHub.
3. Abra `https://valdecimoveis.com.br/robots.txt` e confirme que aparecem os
   dois sitemaps.
4. Abra `https://valdecimoveis.com.br/sitemap-index.xml`.
5. Abra `https://valdecimoveis.com.br/sitemap-images.xml`.
6. Acesse `https://www.valdecimoveis.com.br/` e confirme que o navegador muda
   para `https://valdecimoveis.com.br/`. O redirecionamento precisa ser 301.

O domínio já usa HTTPS. A versão sem `www` é a versão oficial indicada pelas
URLs canônicas do site.

## 2. Criar e verificar o Google Search Console

1. Entre em [Google Search Console](https://search.google.com/search-console/)
   com a conta Google que ficará responsável pelo negócio.
2. Clique em `Adicionar propriedade`.
3. Escolha `Domínio`.
4. Digite somente `valdecimoveis.com.br`, sem `https` e sem `www`.
5. Copie o registro TXT mostrado pelo Google.
6. Na Hostinger, abra a zona DNS do domínio e adicione esse TXT no domínio
   raiz. O campo de nome costuma ser `@` ou ficar vazio.
7. Salve, aguarde a propagação e volte ao Search Console para clicar em
   `Verificar`.

A propriedade de domínio é a melhor opção porque reúne HTTP, HTTPS, `www` e
sem `www`. Se a verificação por DNS não for possível, use uma propriedade de
prefixo de URL e a tag HTML. Nesse caso, coloque apenas o código da tag na
variável `PUBLIC_GOOGLE_SITE_VERIFICATION` do GitHub.

## 3. Enviar os sitemaps

1. Dentro do Search Console, abra `Indexação` e depois `Sitemaps`.
2. Envie `sitemap-index.xml`.
3. Envie também `sitemap-images.xml`.
4. Confirme que o status dos dois aparece como `Sucesso`.
5. Volte depois de sete dias e confira se não surgiram erros de leitura.

## 4. Solicitar a atualização das páginas prioritárias

O Google ainda pode mostrar título e texto de uma versão antiga do domínio.
Depois do novo deploy, use `Inspeção de URL`, execute `Testar URL publicada` e
clique em `Solicitar indexação` nesta ordem:

1. `https://valdecimoveis.com.br/`
2. `https://valdecimoveis.com.br/imoveis/`
3. Cada imóvel que estiver disponível.
4. `https://valdecimoveis.com.br/quero-vender/`
5. As quatro páginas de região.
6. `https://valdecimoveis.com.br/sobre/`

Não é necessário solicitar novamente todos os dias. O sitemap avisa o Google
sobre as demais alterações.

## 5. Criar ou assumir o Perfil da Empresa no Google

1. Acesse [Adicionar Perfil da Empresa](https://business.google.com/add).
2. Pesquise por `Valdecir Francisco` para evitar criar uma ficha duplicada.
3. Se já existir, solicite a propriedade. Se não existir, crie uma nova.
4. Use `Valdecir Francisco` como nome, sem acrescentar cidades ou palavras
   repetidas apenas para tentar aparecer mais.
5. Escolha a categoria principal mais específica disponível para a atividade,
   próxima de `Agente imobiliário`.
6. Informe o telefone `(27) 99930-9535` e o site
   `https://valdecimoveis.com.br/`.
7. Informe horários reais de atendimento.
8. Se clientes não são recebidos em um escritório com placa e atendimento no
   local, oculte o endereço e configure a ficha como negócio de área de
   serviço.
9. Cadastre somente cidades realmente atendidas. O Google permite até 20 áreas
   e recomenda uma área coerente com o deslocamento a partir da base.
10. Adicione serviços como `Compra de imóvel rural`, `Venda de imóvel rural`,
    `Atendimento a proprietários` e `Visita a propriedades rurais`.
11. Faça a verificação solicitada pelo Google.

Depois de publicar a ficha, copie a URL pública do Google Maps e salve no
GitHub como `PUBLIC_GOOGLE_BUSINESS_URL`. Isso liga o perfil oficial aos dados
estruturados do site.

## 6. Completar o Perfil da Empresa

Use informações reais e mantenha tudo atualizado:

1. Adicione uma foto profissional de Valdecir.
2. Adicione uma imagem de capa com uma propriedade real do Espírito Santo.
3. Publique fotos próprias de acessos, paisagens, plantações, água e áreas de
   lazer.
4. Escreva uma descrição curta sobre compra e venda de imóveis rurais no
   Espírito Santo e atendimento direto.
5. Faça duas a quatro atualizações de fotos por mês.
6. Revise telefone, site, horários e áreas de atendimento a cada mês.

## 7. Conseguir avaliações verdadeiras

1. No Perfil da Empresa, abra `Ler avaliações` e `Receber mais avaliações`.
2. Copie o link de avaliação.
3. Depois de um atendimento ou negociação real, envie o link pelo WhatsApp.
4. Peça que a pessoa descreva espontaneamente a experiência. Não entregue um
   texto pronto.
5. Responda todas as avaliações com mensagens curtas e específicas.
6. Nunca ofereça dinheiro, desconto ou presente em troca de avaliação.

Comece por clientes que realmente já foram atendidos. Regularidade é mais
natural e segura do que receber muitas avaliações no mesmo dia.

## 8. Manter nome, telefone e site iguais na internet

Use sempre estes dados públicos:

- Nome: `Valdecir Francisco`
- Telefone: `(27) 99930-9535`
- Site: `https://valdecimoveis.com.br/`
- Atuação: `Espírito Santo`

Atualize Instagram, Facebook, Perfil da Empresa, páginas de parceiros e
cadastros locais. Evite versões diferentes do telefone ou do nome.

No GitHub, em `Settings`, `Secrets and variables`, `Actions`, `Variables`,
adicione as URLs oficiais disponíveis:

- `PUBLIC_GOOGLE_BUSINESS_URL`
- `PUBLIC_INSTAGRAM_URL`
- `PUBLIC_FACEBOOK_URL`

O fluxo de publicação já está preparado para inserir esses perfis nos dados
estruturados do site.

## 9. Criar conteúdo local que ajude compradores e proprietários

Publique conteúdo baseado em visitas e conhecimento próprio, sem produzir
textos genéricos apenas para preencher o site. Uma frequência sustentável é
duas publicações úteis por mês.

Boas pautas:

- Como é o acesso rural em Ibiraçu.
- O perfil das chácaras para lazer nas Montanhas Capixabas.
- O que muda entre uma área para café e uma área para lazer em Santa Teresa.
- Distância e tempo de viagem de Vitória até as regiões atendidas.
- Características de água, relevo e produção no Norte Capixaba.
- Como preparar boas fotos para anunciar uma propriedade rural.

Cada publicação deve ter:

1. Título que explique claramente o assunto e a cidade ou região.
2. Informação própria, obtida em visita ou atendimento real.
3. Fotos originais com legenda.
4. Link para a região ou imóvel relacionado.
5. Data verdadeira de publicação e atualização.
6. Um convite simples para conversar pelo WhatsApp.

Não crie dezenas de páginas quase iguais trocando apenas o nome da cidade.
Uma página municipal só vale a pena quando houver imóveis ou conteúdo próprio
suficiente para realmente ajudar quem pesquisa.

## 10. Conseguir menções e links locais legítimos

Links de outros sites ajudam quando surgem de relações reais. Priorize:

1. Associações, cooperativas e negócios rurais com os quais exista relação.
2. Sites de turismo rural e portais municipais das regiões atendidas.
3. Parceiros que participaram de uma visita, evento ou conteúdo.
4. Matérias em jornais e blogs locais sobre mercado rural ou produção.
5. Proprietários que tenham site e possam apontar para a ficha do próprio
   imóvel.

Ao compartilhar um imóvel, envie a URL exata da ficha, não apenas a página
inicial. Não compre pacotes de links, não use redes privadas de sites e não
troque centenas de links sem relação com o negócio.

## 11. Acompanhar toda semana no Search Console

Uma vez por semana:

1. Abra `Desempenho` e compare os últimos 28 dias com o período anterior.
2. Veja quais consultas geram impressões.
3. Veja quais páginas recebem cliques.
4. Observe consultas com posição média entre 4 e 15. Elas costumam ser as
   melhores oportunidades para melhorar conteúdo e ligações internas.
5. Observe páginas com muitas impressões e poucos cliques. Revise título e
   descrição somente depois de acumular dados suficientes.
6. Abra `Indexação de páginas` e trate erros reais.
7. Abra `Principais métricas da Web` e confira celular e computador.
8. Confirme que não existem `Ações manuais` nem `Problemas de segurança`.

No Umami, acompanhe quais páginas levam ao evento `whats_clique`. Tráfego sem
conversa não é o resultado final do negócio.

## 12. Rotina dos primeiros 90 dias

### Primeira semana

- Publicar o site otimizado.
- Corrigir o redirecionamento de `www`.
- Verificar o Search Console.
- Enviar os dois sitemaps.
- Solicitar indexação das páginas prioritárias.
- Criar ou completar o Perfil da Empresa.

### Primeiro mês

- Conseguir as primeiras avaliações de clientes reais.
- Completar fotos e serviços do Perfil da Empresa.
- Publicar duas anotações locais com fotos próprias.
- Corrigir qualquer erro de indexação mostrado no Search Console.

### Segundo e terceiro mês

- Manter duas publicações úteis por mês.
- Buscar duas ou três menções locais legítimas.
- Melhorar páginas que já aparecem entre as posições 4 e 15.
- Atualizar imediatamente imóveis vendidos, reservados ou com preço alterado.
- Comparar cliques orgânicos, páginas acessadas e conversas iniciadas.

SEO não garante uma posição específica e não é imediato. O objetivo é criar
uma presença local consistente, útil e verificável, que acumula autoridade a
cada imóvel, visita, avaliação e menção real.

## Referências oficiais

- [Guia do Google para desenvolvedores](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [Conteúdo útil e feito para pessoas](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Sitemaps no Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [SEO para imagens](https://developers.google.com/search/docs/appearance/google-images)
- [Adicionar propriedade no Search Console](https://support.google.com/webmasters/answer/34592?hl=pt)
- [Inspeção de URL](https://support.google.com/webmasters/answer/9012289)
- [Melhorar o posicionamento local](https://support.google.com/business/answer/7091)
- [Áreas de serviço no Perfil da Empresa](https://support.google.com/business/answer/9157481)
- [Solicitar avaliações](https://support.google.com/business/answer/16816815)
