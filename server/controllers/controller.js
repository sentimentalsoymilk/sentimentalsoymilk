// var User = require('../models/users.js');
// var Trips = require('../models/trips.js');
// var TripItem = require('../models/tripItems.js');
var request = require('request');
var key = require('../env/config')

var  filterTripData = function(responseObj) {
    var filteredItems = responseObj.reduce(function(totalData, item) { 
      console.log(item.categories);
      var category = item.categories.length > 0 ? item.categories[0].name : '';
      var tripItem = {
        name: item.name,
        address: item.location.formattedAddress,
        notes: '',
        category: category,
        rating: item.stats.checkinsCount
      };
      totalData.push(tripItem); 
      return totalData;
    }, []);
    console.log(filteredItems.length);
    return filteredItems;
};

module.exports = {

  fetchTripData: function(req, res, next) {
    request('https://api.foursquare.com/v2/venues/search?client_id=' +key.API+'&client_secret='+key.SECRET+'&v=20130815&near=chicago,il', function(err, response, body) {
      if (!err) { 
      } else {
        console.log(err);
      }
      var filteredResults = filterTripData(JSON.parse(body).response.venues); 
      //call filter func

      res.send(filteredResults);
      });    
  },
  fetchCityData: function(req, res, next) {
    console.log(req.url.split('/'));
    var cityState = req.url.split('/')[2];
    request('https://api.foursquare.com/v2/venues/search?client_id=' +key.API+'&client_secret='+key.SECRET+'&v=20130815&near='+cityState, function(err, response, body) {
      if (err) { 
        console.log(err);
      } else {
        var filteredResults = filterTripData(JSON.parse(body).response.venues); 
        //call filter func
        res.send(JSON.stringify(filteredResults));
      }
    });    
  },

  createTrip: function(req, res, next) {

  },
  editTrip: function(req, res, next) {

  },
  deleteTrip: function(req, res, next) {

  },
  //apiData
  fetchData: function(req, res, next) {

  }
};