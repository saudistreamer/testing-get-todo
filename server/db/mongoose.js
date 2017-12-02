var mongoose = require('mongoose');
var config = require('./../config/config');

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGOdb_URI);

module.exports = {mongoose};
