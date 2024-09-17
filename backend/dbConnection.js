const mongoose = require('mongoose');

const uri  = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
;

console.log(process.env.DB_USER)
// Connection options (these are Mongoose options, not MongoClient options)
const clientOptions = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
};

// Connect to MongoDB when the server starts and don't disconnect after every request
async function connectToMongoDB() {
  try {
    // Create a connection to MongoDB using Mongoose
    await mongoose.connect(uri, clientOptions);
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit if unable to connect to the database
  }
}

module.exports = connectToMongoDB;
