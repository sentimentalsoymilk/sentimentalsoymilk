var controller = require('../controllers/controller.js');
var userController = require('../controllers/userController.js');
var dbController = require('../models/dbroutes.js');

module.exports = function(app, express) {

  app.post('/api/login', userController.login);
  app.post('/api/signup', userController.signup);
  app.get('/api/user/*', userController.find);
  app.put('/api/user/*', userController.addTrips);
  app.get('/logout', userController.logout);
  //app.get('/user', controller.checkAuth);

  app.get('/activities/*', controller.fetchCityData);
  // app.get('/db/activities', dbController.retrieveActivities);
  // app.post('/db/activities', dbController.storeActivities);


  // app.post('/trips', controller.createTrip);
  // app.get('/trips', controller.getTrips);
  // app.delete('/trips', controller.deleteTrip);

}