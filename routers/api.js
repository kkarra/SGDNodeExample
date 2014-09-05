var express = require('express');
var router = express.Router();

var exampleObject = require("../lib/example_data_object");

/*
	All paths in this file are relative to /api
*/

// example api response
router.get('/', function(req, res) {
	res.send(exampleObject);
});

module.exports = router;
