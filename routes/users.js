var express = require('express');
var router = express.Router();

// Where its getting the routing so its being displayed in different pages
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// making sure the routing is succesfull

module.exports = router;
