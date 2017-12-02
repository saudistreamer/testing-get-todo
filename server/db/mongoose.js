var mongoose = require('mongoose');


var env = process.env.NODE_ENV || 'development';
var MONGOdb_URI = "";
if (env ==='production'){
	 process.env.PORT = 27506;
  MONGOdb_URI = 'mongodb://saudi:0551701747@ds127506.mlab.com:27506/testing-get-todo-db';
}else if (env === 'development') {
  process.env.PORT = 3000;
  MONGOdb_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  MONGOdb_URI = 'mongodb://localhost:27017/TodoAppTest';
}


mongoose.Promise = global.Promise;
mongoose.connect(MONGOdb_URI);

module.exports = {mongoose};
