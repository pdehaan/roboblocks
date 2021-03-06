'use strict';
/* global RoboBlocks*/

RoboBlocks.locales = {
    defaultLanguage : {},
    languages: []
};

RoboBlocks.locales.getKey =function(key) {
    return this.defaultLanguage[key];
};
RoboBlocks.locales.setDefaultLang = function(langCode) {
    for (var i in this.languages){
        if (this.languages[i].langCode===langCode){
            this.defaultLanguage=this.languages[i].values;
        }
    }
};

RoboBlocks.locales.add = function (langCode, values) {
    if (!langCode) {
        return this.defaultLanguage;
    }

    if (langCode && !values) {
        if(!this.languages[langCode]) {
            throw new Error('Unknown language : ' + langCode);
        }
        //this.defaultLanguage = langCode;
    }

    if (values || !this.languages[langCode]) {
        this.languages.push({langCode:langCode, values:values});
    }
    return this;
};

RoboBlocks.locales.initialize = function() {
    this.setDefaultLang('en-GB');
    return this;
};