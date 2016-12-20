// required modules

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var responseTime = require('response-time');


// require in other files
var router = require('./router.js');

var port = process.env.PORT || 8000;
var app = express();


// middleware
app.use(responseTime());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// serve up client side assets
app.use(express.static(path.join(__dirname, "../client")));

// redirect http requests to router
app.use('/', router);

// start the server
app.listen(port, function () {
	console.log('App running at: ' + port);
});

return;
