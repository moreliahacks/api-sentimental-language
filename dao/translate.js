'use strict';

module.exports = function(app){

    var sentiment = require('sentiment'),
    sentimentEs   = require('../plugins/sentiment_es.json');

    return {
        index: function(phrase){
            return q.fcall(sentiment, phrase, sentimentEs);
        }
    };
};
