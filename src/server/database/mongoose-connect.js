const mongoose = require('mongoose');
require('dotenv').config();

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  console.log('MONGO: MONGO_URI not found in process environment'); // eslint-disable-line
  throw new Error('MONGO: MONGO_URI not found in process environment');
}

mongoose.connect(MONGO_URI, { useMongoClient: true });

console.log('MONGO: attempting to connect to database'); // eslint-disable-line

mongoose.connection.on('connected', () => {
  console.log('MONGO: successfully connected to database'); // eslint-disable-line
});

mongoose.connection.on('error', () => {
  console.log('MONGO: error connecting to database'); // eslint-disable-line
});

mongoose.connection.on('disconnected', () => {
  console.log('MONGO: disconnected from database'); // eslint-disable-line
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
