'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('org.moreliahacks.sentimental', [ 'sentiment'])
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-nomodel')
    .run()
    .catch(
        function(error){
            console.log(error);
        }
    );
