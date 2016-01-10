angular.module('app.services',[])

.factory('ActivitiesData', function($http, $location){
  var data = {};
  data.searchedCity = {};
  data.cityCache = {};
  $scope.user = {};

  data.getActivities = function(city){
    //checks if the city has been searched before
    if(data.searchedCity[city]){
      //sends a callback with the cache data
      return data.cityCache[city]
    }
    //call get request to our server, with the city
    return $http.get('/activities/' + city)
    .then(function(results){
      //our server calls a get request to the foursquare api
      //posts it to our database
      //gets data back out of our database and returns it
      console.log('getActivities success data: ', results)
      data.searchedCity[city] = true;
      data.cityCache[city] = results;
      return results;
    })
    .catch(function(err){
      console.log("Error Getting Activity Data: ", err)
    })
  };

  data.getTrips = function(){
    return $http.get('/trips')
    .then(function(results){
      //our server calls a get request to the foursquare api
      //posts it to our database
      //gets data back out of our database and returns it
      console.log('Trip Results: ', results);
      return results;
    })
    .catch(function(err){
      console.log("Error Getting User Trip Data: ", err)
    })
  };

  data.getUsersTrips = function(userId, callback){
    $http.get('/trips/' + userId)
    .then(function(results){
      //our server calls a get request to the foursquare api
      //posts it to our database
      //gets data back out of our database and returns it
      console.log('Trip Results for ' +userId +': ' + results)
      return results;
    })
    .catch(function(err){
      console.log("Error Getting User Trip Data: ", err)
    })
  };

  data.getIndividualTrip = function(tripId){
    $http.get('/trips/' + tripId)
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
    //activityData is a JSON object
    $http.post('db/activities/', activityData)
    .then(function(){
      console.log("Activity Created");
    })
    .catch(function(err){
      console.log("Error Creating Activity: ", err)
    })
  };

  data.createTrip = function(tripData){
    //tripData is a JSON object
    $http.post('/trips', tripData)
    .then(function(){
      console.log("Trip Created");
      $location.path('/myTrips');
    })
    .catch(function(err){
      console.log("Error Creating Trip: ", err);
    })
  };

  // data.saveTrip = function(tripId,tripData){
  //   //tripData is a JSON object
  //   $http.put('/trips/' + tripId, tripData)
  //   .then(function(){
  //     console.log('Trip Saved: ', tripID)
  //   })
  //   .catch(function(err){
  //     console.log("Error Saving Trip: ", err)
  //   })
  // }

  // data.getAllPublicTrips = function(){}



  return data;
})

.factory('Auth', function($http, $location){
  var auth = {};
  auth.user = { password : '' };
  auth.pass = '';

  auth.clearPassword = function() {
    auth.user.password = '';
    auth.pass = '';
  };

  auth.login = function(user) {
    return $http.post('/api/login', user)
      .then(function(result){
        console.log("Auth Login Hit")
        if(result.data){
          console.log("login results", result)
          console.log("Username", user.username)
          auth.getUser(user.username)
          .then(function() {
            auth.clearPassword();
            $location.path("/myTrips");
          });
        } else {
          //stay on login
          var loginError = "Please Try Again"
          return loginError;
        }
      })
  };

  auth.signup = function(userData) {
    auth.pass = userData.password;
    return $http.post('/api/signup', userData)
    .then(function(result){
      if(Array.isArray(result.data)){
        var signUpError = "Username Taken";
        return signUpError;
      } else {
        auth.user = result.data;
        auth.user.password = auth.pass;
        auth.login(auth.user);
      }
      //redirect
    })
  };

  auth.getUser = function(username) {
    return $http.get('/api/user/'+ username)
    .then(function(result){
      console.log("Result of getUser", result.data)
      auth.user = result.data;
    })
  };

  return auth;
});