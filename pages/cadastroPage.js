const { Driver } = require('selenium-webdriver/chrome');
const helpers = require('../helpers');
const { browser } = require("protractor")


const inicioNovoCadastro = () => {
    helpers.buttonClick("Quero participar");
    helpers.elementClick("[data-testid='splitbutton-signup-option']");
    helpers.fillText("[id='cpf']", `80508956021`);
    return helpers.elementClick("[class='Button-module_children__2Wm0_']");
}

const trabalhoEmLojas = () => {
    helpers.elementClick("[data-testid='store-radio']");
    browser.sleep(3000);
    helpers.elementClick("[id='employeeOccupation']");
    helpers.elementClick("[value='a4e91adb-f68e-4dfc-b759-e91222c7d9e0']");
    helpers.fillText("[id='cnpj']", `23786070000112`);
    helpers.fillText("[id='mobileNumber']", `11911111111`);
    return helpers.elementClick("[class='Button-module_children__2Wm0_']");
}

const preencherDadosPessoais = () => {
    helpers.fillText("[data-testid='name-input']", `Teste Automação Proprietário`);
    helpers.fillText("[data-testid='birthdate-input']", `01011990`);
    browser.sleep(3000);
    helpers.elementClick("[id='gender']");
    helpers.elementClick("[class=' css-5s9up6']");
    helpers.fillText("[data-testid='email-input']", `teste@teste.com.br`);
    helpers.elementClick("[name='refeerer']");
    helpers.elementClick("[value='03bacf34-2df2-48ae-9aca-5719654164c0']");
    return helpers.elementClick("[class='Button-module_children__2Wm0_']");
}


// const productNotFound = message => {
//     return helpers.assertText(".message1", message);
// }

// const consultationSuggestions = suggestion => {
//     return helpers.elementByTextClick(".neemu-suggestions-container", suggestion);
// }

module.exports = {
    inicioNovoCadastro,
    trabalhoEmLojas,
    preencherDadosPessoais
    

}