
angular.module('app', ['app.login', 'app.signup', 'app.landing', 'app.landing', 'app.services', 'ngRoute'])

// template for setting up routes
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './js/templates/landing.html',
      controller: 'LandingController'
    })
    .when('/login', {
      templateUrl: './js/templates/login.html',
      controller: 'LoginController'
    })
    .when('/signup', {
      templateUrl: './js/templates/signup.html',
      controller: 'LoginController'
    })
    .when('/create', {
      templateUrl: './js/templates/createTrip.html',
      controller: 'CreateTripController'
    })
    .otherwise('/');
});