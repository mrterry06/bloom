let app		= require("../app");
let mongojs = require('mongojs');
let db		= mongojs('bloom-db', ['users']);
let fs		= require("fs");






module.exports = db;