var mongoose = require('mongoose');

var tripsItemsSchema = mongoose.Schema({
  name: String,
  address: String,
  city: String,
  notes: String,
  category: String,
  rating: String,
  photo: String,
  url: String,
  weather: {}
});

var TripItem = mongoose.model('TripItem', tripsItemsSchema);
module.exports = TripItem;



