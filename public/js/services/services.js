angular.module('app.services',[])

.factory('ActivitiesData', function($http){
  var data = {};
  data.searchedCity = {};
  data.cityCache = {};

  data.getActivities = function(city, callback){
    //checks if the city has been searched before
    if(data.searchedCity[city]){
      //sends a callback with the cache data
      callback(data.cityCache[city]);
      return;
    }
    //call get request to our server, with the city
    $http.get('/activities/' + city)
    .then(function(results){
      //our server calls a get request to the foursquare api
      //posts it to our database
      //gets data back out of our database and returns it
      console.log('getActivities success data: ', results)
      data.searchedCity[city] = true;
      data.cityCache[city] = results;
      callback(results);
    })
    .catch(function(err){
      console.log("Error Getting Activity Data: ", err)
    })
  };

  data.getUsersTrips = function(userId, callback){
    $http.get('/trips/' + userId)
    .then(function(results){
      //our server calls a get request to the foursquare api
      //posts it to our database
      //gets data back out of our database and returns it
      console.log('Trip Results for ' +userId +': ' + results)
      callback(results);
    })
    .catch(function(err){
      console.log("Error Getting User Trip Data: ", err)
    })
  };

  data.getIndividualTrip = function(userId, tripId){
    $http.get('/trips/' + userId + '/' + tripId)
    .then(function(results){
      //our server calls a get request to the foursquare api
      //posts it to our database
      //gets data back out of our database and returns it
      console.log('Trip Result for ' + tripId +': ' + results)
      callback(results);
    })
    .catch(function(err){
      console.log("Error Getting Individual Trip Data: ", err)
    })
  }

  data.postActivity = function(activityData){
    $http.post('/activities', activityData)
    .then(function(){
      console.log("Activity Created");
    })
    .catch(function(err){
      console.log("Error Creating Activity: ", err)
    })
  };

  data.createTrip = function(tripData){
    $http.post('/trips', tripData)
    .then(function(){
      console.log("Trip Created");
    })
    .catch(function(err){
      console.log("Error Creating Trip: ", err)
    })
  };

  data.saveTrip = function(tripId,tripData){
    $http.put('/trips/' + tripId, tripData)
    .then(function(){
      console.log('Trip Saved: ', tripID)
    })
    .catch(function(err){
      console.log("Error Saving Trip: ", err)
    })
  }

  // data.getAllPublicTrips = function(){}
  // data.signIn = function(){}
  // data.signUp = function(){}



  return data;
});

.factory('Auth', function($http){

});