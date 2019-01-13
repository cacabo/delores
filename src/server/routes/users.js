const router = require('express').Router();

module.exports = function hospitalsRouter(DB) {
  router.get('/', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({ error: 'Missing email or password' });
    }

    res.json({ success: true });
  });

  return router;
};
