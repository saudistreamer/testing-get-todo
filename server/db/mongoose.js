var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost:'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://saudi:0551701747@ds127506.mlab.com:27506/testing-get-todo-db'
}
//Comment out when you want to push to herku
mongoose.connect(db.localhost || db.mlab);
//mongoose.connect(db.localhost);

module.exports = {mongoose};
