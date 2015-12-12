'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('org.moreliahacks.sentimental')
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-nomodel')
    .run();
