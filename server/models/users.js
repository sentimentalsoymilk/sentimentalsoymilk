var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: { type: String }
  //   password: { type: String, required: true },
  //   trips: [{
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'Trip'
  // }]
});

var User = mongoose.model('User', userSchema);
module.exports = User;