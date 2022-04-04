let { getMenu } = require('../database/dataBase') 


let controller = {

    index: function(req, res) {
        
        res.render('index', {
            getMenu
        });
    },


}

module.exports = controller