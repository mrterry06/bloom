var express = require('express');
var app	    = express();
var path    = require('path');
var logger  = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'www')));



module.exports = app;

