const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

// This is for getting data from blocked CORS
router.post('/', function(req, res, next) {
  axios.get(req.body.url)
    .then(result => {
      res.json(result.data);
    })
    .catch((error) => {
      res.status(error.status).statusCode(error.statusCode).error(error);
    });
});

module.exports = router;
