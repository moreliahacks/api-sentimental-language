'use strict';

module.exports = function(app){

    var apiKey = process.env.TRANSLATE_KEY
    ,   sentiment = require('sentiment')
    ,   googleTranslate = require('google-translate')(apiKey);

    return {
        index: function(phrase){
            return q.resolve(sentiment(phrase));
        }
    };

};
