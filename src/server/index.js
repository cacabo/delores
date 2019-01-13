const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');

const frontendRouter = require('./routes/frontend');
const usersRouter = require('./routes/users');
const hospitalsRouter = require('./routes/hospitals');
const miscRouter = require('./routes/misc');

const DB = require('./database/db');

const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();
require('./passport');

// Set up serving assets
global.basedir = path.join(__dirname, '..', '..');
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// Set up handling requests from the client
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure paths for all routers
app.use('/api/hospitals', passport.authenticate('jwt', { session: false }), hospitalsRouter(DB));
app.use('/api/users', usersRouter(DB));
app.use('/api', miscRouter());
app.use('/', frontendRouter(DB));

// Seed data on server start
// TODO have other scripts to do this
// require('./database/seedHospitals');

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
});
