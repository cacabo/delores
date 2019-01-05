const hospitals = require('../resources/hospitals');
const Hospital = require('./models/Hospital');

function deleteHospitals() {
  console.log('Removing hospitals from the database'); // eslint-disable-line no-console

  return Hospital.find().remove();
}

function loadHospitals() {
  console.log('Loading hospitals to the database'); // eslint-disable-line no-console

  Object.keys(hospitals).map(key => (
    new Hospital(Object.assign({}, hospitals[key], { code: key }))
      .save()
      .then(console.log) // eslint-disable-line
      .catch(console.log) // eslint-disable-line
  ));
}

deleteHospitals().then(loadHospitals);
