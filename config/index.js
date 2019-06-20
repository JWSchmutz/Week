//Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//27017 is the default mongoDB port
const uri = process.env.MONGODB_URI || "mongodb://localhost/strong";

mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {
    console.log("Connected to Mongo");
  },
  err => {
    console.log("error connecting to Mongo: ");
    console.log(err);
  }
);

module.exports = mongoose.connection;
