const passport = require('passport');
const passportLocal = require('passport-local');
const passportJWT = require('passport-jwt');

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const DB = require('./database/db');

const { JWT_SECRET } = process.env;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, cb) => (
  DB.findUser({ email, password })
    .then((user) => {
      if (!user) {
        return cb(null, false, { message: 'Incorrect email or password.' });
      }

      return cb(null, user, { message: 'Logged in successfully' });
    })
    .catch(err => cb(err))
)));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
}, (jwtPayload, cb) => {
  console.log('payload', jwtPayload); // eslint-disable-line

  return DB.findUserById(jwtPayload._id)
    .then(user => cb(null, user))
    .catch(err => cb(err));
}));
