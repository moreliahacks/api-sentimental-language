'use strict';

module.exports = function(app){
    log.debug(app.utilities);

    var apiKey          = process.env.TRANSLATE_KEY
    ,   sentiment       = app.utilities.sentiment
    ,   translate       = app.utilities['google-translate'](apiKey);

    return {
        index: function(phrase){
            return q.nbind(translate.translate, translate)(
                phrase, 'es', 'en'
            ).then(function(response){
                return sentiment(response.translatedText);
            });
        }
    };

};
