const { Given, When, Then, After, Before } = require("cucumber");
const driver = browser.driver;
const home = require('../pages/cadastroPage');
const printscreen = require('../helpers/printScreen');

Given('que eu inicie o processo de novo cadastro', function () {
    return home.inicioNovoCadastro()
   
});

Given('me cadastre com um perfil Proprietário', function () {
    return home.trabalhoEmLojas();
    
});

When('preencho os meus dados pessoais', function () {
    return home.preencherDadosPessoais();
});

When('preencho os dados da loja', function () {
    return home.preencherDadosLoja();
});

Then('preencho com a minha senha', function () {
    return home.preencherSenha();
});

Then('o cadastro é concluído com sucesso', function () {
    return home.assertConclusaoDeCadastro();
});


After(function () {
    let self = this;
    return printscreen.stepPrintScreen(self);
});

Before(function () {
    return driver.get("https://colosseum.qa.juntossomosmaisi.com.br/").then(() => {
        browser.ignoreSynchronization = true;
    });
});
