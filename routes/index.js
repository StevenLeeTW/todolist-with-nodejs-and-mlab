//index.js

var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
	res.render('index');
});

//if needed, add other REST APT end points here
// router = require('./products.api')(router);

module.exports = router;