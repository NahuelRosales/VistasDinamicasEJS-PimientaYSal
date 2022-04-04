var express = require('express');
let controller = require('../controllers/menuController')

var router = express.Router();

/* GET home page. */


router.get('/:id', controller.detalleMenu);




module.exports = router;
