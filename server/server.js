var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var InstagramStrategy = require('passport-instagram').Strategy;
var session = require('express-session');

var app = express();

var port = process.env.PORT || 8080;


var INSTAGRAM_CLIENT_ID = '46a6338865e6484db60c273857442b3f';
var INSTAGRAM_CLIENT_SECRET = 'dd1f97c3a1dd4b709fbc14b7a7f88b06';

app.use(session({secret: "abstractedChalupas", cookie: {}, resave: false, saveUninitialized: false }));
// use cors to send requests to google
app.use(cors());
// use passport
app.use( passport.initialize());
// store passport authentication in the session
app.use( passport.session());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

//find using one proprety in the schema
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new InstagramStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/instagram/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Instagram profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Instagram account with a user record in your database,
      // and return that user instead.
      console.log('IG profile', profile);
      console.log('token', accessToken);
      return done(null, profile);
    });
  }
));


require('./routers/router.js')(app, express);
require('./models/dbroutes.js')(app, express);

app.use(express.static(__dirname+'/../public'));


app.listen(port);
console.log('Listening on ' + port);

module.exports = app;