// var User = require('../models/users.js');
// var Trips = require('../models/trips.js');
// var TripItem = require('../models/tripItems.js');
var db = require('../models/dbconnect.js');
var User = require('../models/users.js');
var Trips = require('../models/trips.js');
var TripItems = require('../models/tripItem.js');
var request = require('request');
var key = require('../env/config');
var bluebird = require('bluebird');

var  filterTripData = function(responseObj) {
  // console.log("WHOLE FILTERED DATA", responseObj);
    var filteredItems = responseObj.reduce(function(totalData, item) { 
      var category = item.categories.length > 0 ? item.categories[0].name : '';
      var tripItem = {
        name: item.name,
        address: item.location.formattedAddress,
        notes: '',
        category: category,
        rating: item.stats.checkinsCountT
      };
      totalData.push(tripItem); 
      return totalData;
    }, []);
    console.log(filteredItems.length);
    return filteredItems;
};

module.exports = {
  fetchCityData: function(req, res, next) {
    var cityState = req.url.split('/')[2];
    request('https://api.foursquare.com/v2/venues/search?client_id=' +key.API+'&client_secret='+key.SECRET+'&v=20130815&near='+cityState, function(err, response, body) {
      if (err) { 
        console.log(err);
      } else {
        var filteredResults = filterTripData(JSON.parse(body).response.venues); 
        module.exports.saveCityData(filteredResults).then(function(results){
          console.log('fetched and saved DB RESULTS', results);
          res.send(JSON.stringify(results));
        }); //arr of resutls  
        //call filter functions
      }
    });
  }, 
  saveCityData: function(results, next) {
    return TripItems.create(results, function(err, results) {
      if (err) {
        console.log(err);
      }
      return results;
    });
  },
  createTrip: function(req, res, next) {
    console.log(req.body);
    var playlist = {
      name: req.body.name,
      destination: [req.body.city, req.body.state],
      activities: req.body.activities
    };
    Trips.create(playlist, function(err, results) {
      if (err) {
        console.log(err);
      }
      res.json(results);
    });
  },
  getTrips: function(req, res, next) {
    Trips.find(function(err, results) {
      if (err) {
        console.log(err);
      }
      res.json(results);
    });
  },
  deleteTrip: function(req, res, next) {

  }
};

