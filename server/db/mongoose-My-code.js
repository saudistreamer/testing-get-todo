var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost:'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://saudi:0551701747@ds127506.mlab.com:27506/testing-get-todo-db'
}
//Comment out when you want to push to herku
mongoose.connect(db.localhost, (error) =>{
    if(error){
    mongoose.connect(db.mlab);
            //console.log(error);
            return console.log(`connection successful on db.mlab`);
    }
            console.log(`connection successful on db.localhost`);
});
//mongoose.connect(db.localhost);


// var dbconnect = mongoose.connect(db.localhost, function(error){
//     if(error)
//     Mongoose.connect(db.mlab);
//
//         console.log("connection successful");
// });

module.exports = {mongoose};
