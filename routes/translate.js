'use strict';

module.exports = function (app) {

    var translate = new app.controllers.Translate();

    return [
        {
            method: 'get',
            url: '/translate',
            action: translate.index,
            cors: true
        }
    ];

};
