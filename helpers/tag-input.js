"use strict";

var present = require("./wait").present;
var scroll = require("./scroll");

exports.comboSearchAndSelect = function (combo, search, select) {
    exports.clearCombo(combo);
    element(by.css(combo + " input")).sendKeys(search);
    return getVisibleTypeAheadOptions().element(by.linkText(select)).click();
};

exports.comboAddTag = function (combo, search, select) {
    element(by.css(combo + " input")).sendKeys(search);
    return getVisibleTypeAheadOptions().element(by.linkText(select)).click();
};

exports.clearCombo = function (combo) {
    var tags = element.all(by.css(combo + " [data-role='remove']"));
    return tags.count().then(function next(i) {
        if (i === 0) {
            return;
        }
        scroll.toElement(tags.get(i - 1)).click().then(next.bind(null, i - 1));
    });
};

/**
 * Confere se o conteúdo das tags são iguais ao esperado.
 *
 * @param {string} selector : onde o valor deve ser conferido
 * @param {array} tags : array a ser percorrido e validado
 * @returns {el}
 */
exports.assertTextTags =  function (selector, tags) {
    var el = element.all(by.css(selector + " .tag.label"));
    el.map(function (tag) {
        return tag.getText();
    }).then(function (filledTags) {
        if (!(filledTags.length === tags.length && filledTags.every(function(u, i) {
                return u === tags[i];
            }))) {
            throw new Error("Eram esperados as tags [" + tags + "], mas foram encontradas as tags [" + filledTags + "]");
        }
    });
    return el;
};

function getVisibleTypeAheadOptions() {
    return present(element(by.css("[typeahead-popup][aria-hidden=false]")));
}
exports.getVisibleTypeAheadOptions = getVisibleTypeAheadOptions;