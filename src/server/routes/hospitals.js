const router = require('express').Router();

module.exports = function hospitalsRouter(DB) {
  router.get('/', (req, res) => {
    DB.findAllHospitals()
      .then((hospitals) => {
        res.status(200)
          .json({ hospitals });
      });
  });

  return router;
};
