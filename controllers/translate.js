'use strict';

module.exports = function(app){

    var Translate     = app.dao.Translate
    ,   json    = new app.views.Json();

    return {
        index: function(req, res, next){
            var translate = new Translate();
            json.promise(translate.index(req.query.text || ''), res, next);
        }
    };

};
