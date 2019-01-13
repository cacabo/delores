require('./mongoose-connect');

const Hospital = require('./models/Hospital');
const User = require('./models/User');

function registerUser({
  email,
  password,
  lastName,
  firstName,
}) {
  return new User({
    email,
    password,
    lastName,
    firstName,
  }).save();
}

function findUser({ email, password }) {
  return User.findOne({ email, password });
}

function findUserById(id) {
  return User.findById(id);
}

function findAllHospitals() {
  return Hospital.find();
}

module.exports = {
  registerUser,
  findAllHospitals,
  findUserById,
  findUser,
};
