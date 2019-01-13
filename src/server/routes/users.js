const router = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const { JWT_SECRET } = process.env;

function loginUser(req, res, user) {
  return req.login(user, { session: false }, (loginErr) => {
    if (loginErr) {
      res.send(loginErr);
    }

    // Note JWT expects a plain object, not a mongoose object -> copy fields
    const token = jwt.sign(
      Object.assign({}, user),
      JWT_SECRET,
      { expiresIn: '1w' },
    );
    return res.json({ user, token });
  });
}

module.exports = function usersRouter(DB) {
  router.post('/register', (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = req.body;

    if (
      !firstName
      || !lastName
      || !email
      || !password
      || !confirmPassword
    ) {
      return res.status(400).send({ error: 'Missing parameter' });
    }

    if (password !== confirmPassword) {
      return res.status(400).send({ error: 'Password and confirmation must match' });
    }

    // TODO other validations

    return DB.registerUser({
      firstName,
      lastName,
      email,
      password,
    })
      .then(user => loginUser(req, res, user))
      .catch(err => res.status(400).json({
        message: err.message || 'Something is not right',
      }));
  });

  router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ error: 'Missing email or password' });
    }

    return passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err) {
        return res.status(400).json({ message: err.message || 'Something went wrong.' });
      }

      if (!user) {
        return res.status(400)
          .json((info && info.message) ? info : { message: 'Something went wrong.' });
      }

      return loginUser(req, res, user);
    })(req, res);
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;

    DB.findUserById(id)
      .then(user => res.status(200).json(user))
      .catch(err => res.status(404).json({
        message: err.message || 'User not found',
      }));
  });

  return router;
};
