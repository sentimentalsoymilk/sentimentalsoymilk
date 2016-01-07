var mongoose = require('mongoose');

var tripsItemsSchema = mongoose.Schema({
  name: String,
  address: String,
  notes: String,
  category: String,
});

var TripItem = mongoose.model('TripItem', tripsItemsSchema);
module.exports = TripItem;

