angular.module('app.auth', ['app.services'])

.controller('AuthController', function ($scope, $http, $location, Auth) {


  // login function to be called when input form submitted
  $scope.login = function (user) {
    $scope.error = '';
    if(!user) {
      var userData = {
        "username":$scope.username,
        "password":$scope.password
      }
    } 
    console.log("Attempting to login", userData)
    Auth.login(userData)
      .then(function(message){
          $scope.clearFields();
          $scope.error = message;
      })
  };

  // sign up function to be called when input form submitted
  $scope.signup = function () {
    $scope.signUpError = '';
    var userData = {
      "username":$scope.signUpUsername,
      "password":$scope.signUpPassword
    }
    console.log('User entered signup data',userData)
    Auth.signup(userData)
    .then(function(message){
      $scope.clearFields();
      $scope.signUpError = message;
    })
  };

  $scope.clearFields = function (){
    $scope.signUpUsername='';
    $scope.signUpPassword='';
    $scope.username='';
    $scope.password='';
  };
})
