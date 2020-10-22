const { Driver } = require('selenium-webdriver/chrome');
const helpers = require('../helpers');
const { browser } = require("protractor");
const { generate : gerarCPF } = require ('gerador-validador-cpf');
const { generate : gerarCNPJ } = require('cnpj');

const inicioNovoCadastro = () => {
    helpers.elementClick("[data-testid='splitbutton']");
    helpers.elementClick("[data-testid='splitbutton-signup-option']");
    helpers.fillText("[id='cpf']", gerarCPF());
    return helpers.elementClick("[data-testid='continue-button']");
}

const trabalhoEmLojas = () => {
    helpers.elementClick("[data-testid='store-radio']");
    helpers.elementClick("[id='employeeOccupation']");
    helpers.elementClick("[value='a4e91adb-f68e-4dfc-b759-e91222c7d9e0']");
    helpers.fillText("[id='cnpj']", gerarCNPJ());
    helpers.fillText("[id='mobileNumber']", `11911111111`);
    return helpers.elementClick("[data-testid='continue-button']");
}

const preencherDadosPessoais = () => {
    helpers.fillText("[data-testid='name-input']", `Teste Automação Proprietário`);
    helpers.fillText("[data-testid='birthdate-input']", `01011990`);
    helpers.elementClick("[id='gender']");
    helpers.elementClick("[value='male']");
    helpers.fillText("[data-testid='email-input']", `teste@teste.com.br`);
    helpers.elementClick("[name='refeerer']");
    helpers.elementClick("[value='03bacf34-2df2-48ae-9aca-5719654164c0']");
    return helpers.elementClick("[data-testid='last-step-button']");
}

const preencherDadosLoja = () => {
    helpers.fillText("[data-testid='store-name-input']", `Teste Automação Loja 1`);
    helpers.fillText("[data-testid='store-phone-number-input']", `1155115511`);
    helpers.elementClick("[id='storeProfile']");
    helpers.elementClick("[value='Elétrica']");
    helpers.fillText("[data-testid='store-email-input']", `teste_loja@teste.com.br`);
    helpers.fillText("[data-testid='store-zip-code-input']", `04547-006`);
    helpers.elementClick("[data-testid='zipcode-autocomplete']");
    helpers.fillText("[data-testid='store-address-number-input']", `111`);
    helpers.fillText("[data-testid='store-address-complement-input']", `111`);
    return helpers.elementClick("[data-testid='last-step-button']");
}


const preencherSenha = () => {
    helpers.fillText("[data-testid='password-input']", `q1w2e3r4`);
    helpers.fillText("[id='confirmPassword']", `q1w2e3r4`);
    return helpers.elementClick("[data-testid='store-password-definition-button']");
}


const assertConclusaoDeCadastro = message => {
    return helpers.elementClick("[data-testid='finish-button']");
    //return helpers.assertText("[data-testid='finish-title']", `Parabéns! Você já faz parte do Juntos Somos +`);
}

// const consultationSuggestions = suggestion => {
//     return helpers.elementByTextClick(".neemu-suggestions-container", suggestion);
// }

module.exports = {
    inicioNovoCadastro,
    trabalhoEmLojas,
    preencherDadosPessoais,
    preencherDadosLoja,
    preencherSenha,
    assertConclusaoDeCadastro
    

}