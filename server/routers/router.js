var controller = require('../controllers/controller.js');
var userController = require('../controllers/userController.js');
var dbController = require('../models/dbroutes.js');
var passport = require('passport');

module.exports = function(app, express) {

  //####### Documentation in Controller
  app.post('/api/login', userController.login);
  app.post('/api/signup', userController.signup);
  app.get('/logout', userController.logout);
  //originally stored data if it was the first time
  //removed storage because that data changes over time

  // app.get('/activities/*', controller.searchStoredData, controller.fetchCityData);
  app.get('/activities/*', controller.fetchCityData);
  app.post('/trips', controller.createTrip);
  app.get('/trips/:id', controller.accessTrip);
  app.get('/trips', controller.getAllTrips);
  app.get('/auth/instagram', passport.authenticate('instagram'));
  app.get('/auth/instagram/callback',
    passport.authenticate('instagram', { failureRedirect: '/login' }),
    function(req, res) {
      console.log('logged in user', req.user);
      res.redirect('/#');
    });

 //###### Live but not used in production############
  app.get('/api/user/*', userController.findUser);
  app.put('/api/user/*', userController.addTrips);
  app.get('/api/user/trips/*', userController.findAllUserTrips);


  //############Pending Routes#####################
  // app.get('/api/user/*/*', userController.findOneUserTrip);
  //app.get('/user', controller.checkAuth);
  // app.get('/activities/*', controller.fetchCityData);
  // app.get('/db/activities', dbController.retrieveActivities);
  // app.post('/db/activities', dbController.storeActivities);
  // app.delete('/trips', controller.deleteTrip);

}