//Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//27017 is the default mongoDB port
const uri =
  "mongodb+srv://Admin:AdminPassword@cluster0.zyflq.mongodb.net/Week?retryWrites=true&w=majority";
console.log(uri);

mongoose.set("debug", true);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    console.log("Connected to Mongo");
  },
  (err) => {
    console.log("error connecting to Mongo: ");
    console.log(err);
  }
);

module.exports = mongoose.connection;
