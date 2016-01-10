angular.module('app.mytrips', ['app.services'])

.controller('MyTripsController', function ($scope, $http, ActivitiesData) {
  ActivitiesData.getTrips()
  .then(function(results){
    $scope.tripResults = results.data;
  })
})