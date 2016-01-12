var Yelp = require('node-yelp');

var yelp = Yelp.createClient({
  oauth:  {
    consumer_key: 'ugrWCABQsMX62effNn12-Q',
    consumer_secret: 'reY43FTjgvuhilFAqzVTERE_LAc',
    token: 'MEBOhmsmrSXiTO6CsuDQ0REcq69joRCm',
    token_secret: 'wVeYdRfBcvWQTXbOPl22O5N2R8g',
  }
})

// console.log(yelp.search)

exports.yelp = yelp


/* example usage of yelp api

var yelp = require("node-yelp");


var client = yelp.createClient({
  oauth: {
    "consumer_key": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "consumer_secret": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "token": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "token_secret": "xxxxxxxxxxxxxxxxxxxxxxxx"
  },

  // Optional settings:
  httpClient: {
    maxSockets: 25  // ~> Default is 10
  }
});


client.search({
  term: "Café de la presse",
  location: "BELGIUM"
}).then(function (data) {
  var businesses = data.businesses;
  var location = data.region;

  // ... 
});


client.business("grand-place-bruxelles-2", {
  cc: "US"
}).then(function (data) {
  // ...
});
Error handling

Every error that comes from the module has an id property attached to it:

var yelp = require("node-yelp");


client.search({
  term: "Café de la presse",
  location: "BELGIUM"
}).then(function (data) {
  // ..
}).catch(function (err) {
  if (err.type === yelp.errorTypes.areaTooLarge) {
    // ..
  } else if (err.type === yelp.errorTypes.unavailableForLocation) {
    // ..
  }
});
Types:

var types = {
  unknown: "UNKNOWN",
  internal: "INTERNAL_ERROR",
  exceededRequests: "EXCEEDED_REQS",
  missingParameter: "MISSING_PARAMETER",
  invalidParameter: "INVALID_PARAMETER",
  invalidSignature: "INVALID_SIGNATURE",
  invalidCredentials: "INVALID_CREDENTIALS",
  invalidOAuthCredentials: "INVALID_OAUTH_CREDENTIALS",
  invalidOAuthUser: "INVALID_OAUTH_USER",
  accountUnconfirmed: "ACCOUNT_UNCONFIRMED",
  passwordTooLong: "PASSWORD_TOO_LONG",
  unavailableForLocation: "UNAVAILABLE_FOR_LOCATION",
  areaTooLarge: "AREA_TOO_LARGE",
  multipleLocations: "MULTIPLE_LOCATIONS",
  businessUnavailable: "BUSINESS_UNAVAILABLE",
  unspecifiedLocation: "UNSPECIFIED_LOCATION"
};

*/