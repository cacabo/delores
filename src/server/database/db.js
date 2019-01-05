require('./mongoose-connect');

const Hospital = require('./models/Hospital');

function findAllHospitals() {
  return Hospital.find();
}

module.exports = {
  findAllHospitals,
};
