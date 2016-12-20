var express = require('express');

var app = require('./server.js');
var bodyParser = require('body-parser');



var router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


module.exports = router;
