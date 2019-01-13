require('./mongoose-connect');

const Hospital = require('./models/Hospital');
const User = require('./models/User');

function findUser({ email, password }) {
  return User.findOne({ email, password });
}

function findAllHospitals() {
  return Hospital.find();
}

module.exports = {
  findAllHospitals,
  findUser,
};
