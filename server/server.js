var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var router = express.Router();
//var router = require(./routers/router.js);
var db = require('./models/dbconnect.js');
var User = require('./models/users.js');
var Trips = require('./models/trips.js');
var TripItems = require('./models/tripItem.js');

// var user = new user({ name: 'Tessa' , password: 'password'});
// console.log(silence.name);

var app = express();
var port = process.env.PORT || 8080;

var user = new User({username:'tessa'});
console.log(user.username);

app.use(express.static(__dirname+'/../public'));
//app.use(express.static(path.join(__dirname, "../client")));


app.listen(port);
console.log('Listening on ' + port);

// module.exports = app; 

