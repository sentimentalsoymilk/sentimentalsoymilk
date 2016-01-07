var mongoose = require('mongoose');

mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://tessa:ts174447@ds039135.mongolab.com:39135/soymilk';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports = db;