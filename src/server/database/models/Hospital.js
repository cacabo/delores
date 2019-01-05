const mongoose = require('mongoose');

const { Schema } = mongoose;

const HospitalSchema = new Schema({
  code: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  state: {
    required: true,
    type: String,
  },
  location: {
    lat: {
      required: true,
      type: Number,
    },
    lng: {
      required: true,
      type: Number,
    },
  },
});

module.exports = mongoose.model('Hospital', HospitalSchema);
