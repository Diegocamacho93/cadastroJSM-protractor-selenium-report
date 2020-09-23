# cadastroJSM-protractor-selenium-report-html

## Execução
Para correta execução da suite de testes, é necessário realizar clonar o projeto em um diretório de sua preferencia e em seguida, através do terminal da máquina executar os seguintes comandos:

```bash
# with npm
npm install && node node_modules/protractor/bin/webdriver-manager update
```

Em seguida, no mesmo terminal, para iniciar o teste, basta executar o comando:

```bash
# with npm
npm run cadastro-jsm
```

Ao termino da execução, será possível encontrar o relatório na raiz do projeto, acessando o caminho ".tmp/novo-cadastro/report/index.html"

## Estrutura

### Cenários
Os cenários estão descritos nos arquivos .feature e se encontram dentro da pasta features.

### Specs
As specs estão disponíveis no diretório specs.

### Pages
No diretório pages, estão as funções das respectivas funcionalidades

### Helpers
No diretório helpers, estão as funções que interagem com os elementos do portal.
