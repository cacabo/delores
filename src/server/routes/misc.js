const router = require('express').Router();

module.exports = function miscRouter() {
  router.get('/', (req, res) => {
    res.status(200).send({ message: 'API is up and running' });
  });

  router.get('*', (req, res) => {
    res.status(404).send({ message: 'Request not found' });
  });

  return router;
};
