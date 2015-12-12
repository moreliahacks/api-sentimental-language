'use strict';

module.exports = function(app){

    return {
        index: function(){
            return q.resolve({
                'result': 'yes'
            });
        }
    };

};
