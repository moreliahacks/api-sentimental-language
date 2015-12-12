'use strict';

module.exports = function(app){

    var sentiment = require('sentiment');

    return {
        index: function(phrase){
            return q.resolve(sentiment(phrase));
        }
    };

};
