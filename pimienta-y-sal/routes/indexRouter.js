var express = require('express');
let controller = require('../controllers/indexController')

var router = express.Router();

/* GET home page. */
router.get('/', controller.index);



module.exports = router;
