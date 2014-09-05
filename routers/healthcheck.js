var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/healthcheck', function(req, res) {
  res.send(200, true);
});

module.exports = router;
