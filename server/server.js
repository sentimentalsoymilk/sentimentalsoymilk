var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');

var session = require('express-session');

var app = express();

var port = process.env.PORT || 8080;

app.use(session({secret: 'abstractedChalupas', cookie: {}, resave: false, saveUninitialized: false }));
// use cors to send requests
app.use(cors());
// use passport
app.use( passport.initialize());
// store passport authentication in the session
app.use( passport.session());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


require('./routers/router.js')(app, express);
require('./models/dbroutes.js')(app, express);

app.use(express.static(__dirname+'/../public'));


app.listen(port);
console.log('Listening on ' + port);

module.exports = app;