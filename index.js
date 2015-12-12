'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('sentimental-language.moreliahacks.org')
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-nomodel')
    .run();
