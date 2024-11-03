//gets the configuration data from a secure file
require('dotenv').config();
const mongoose = require('mongoose');

console.log(process.env.MONGO_URI);

//Async Function to connect to the the MongoDB using mongoose framework
const connectDB = async () => {
  try {
    //mongoose method to connect tot the mongodb
    await mongoose.connect(process.env.MONGO_URI, {
      //This option tells Mongoose to use the new MongoDB connection string parser.
      useNewUrlParser: true,
      //  The unified topology is an improvement in MongoDB’s driver, providing a more consistent and stable behavior for managing connections. It consolidates the legacy connection management engines and solves various issues with the previous connection handling.
      useUnifiedTopology: true,
    });
    console.log('Connected');
  } catch (err) {
    console.error('Error', err);
    process.exit(1);
  }
};

module.exports = connectDB;
