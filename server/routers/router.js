var controller = require('../controllers/controller.js');
var dbController = require('../models/dbroutes.js');

module.exports = function(app, express) {

  // app.post('/login', dbController.login);
  // app.post('/signup', dbController.signup);
  //app.get('/user', controller.checkAuth);

  app.get('/activities', controller.fetchTripData);
  app.get('/activities/*', controller.fetchCityData);
  // app.get('/db/activities', dbController.retrieveActivities);
  // app.post('/db/activities', dbController.storeActivities);


  // app.post('/trips', controller.createTrip);
  // app.put('/trips', controller.editTrip);
  //app.delete('/trips', controller.deleteTrip);

}