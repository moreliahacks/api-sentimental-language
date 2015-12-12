'use strict';

module.exports = function(app){

    var apiKey = process.env.TRANSLATE_KEY
    ,   sentiment = require('sentiment')
    ,   googleTranslate = require('google-translate')(apiKey);

    return {
        index: function(phrase){
            return q.nbind(googleTranslate.translate, googleTranslate)(phrase, 'es', 'en').then(function(response){
                return sentiment(response.translatedText);
            });
        }
    };

};
