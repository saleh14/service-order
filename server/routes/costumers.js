var express = require('express');
var costumerList = require('./../data/DataGeneratorForCustomer');
var costumerUpdate = require('./../data/costumerUpdate');
var router = express.Router();

var fs = require('fs');
/* GET users listing. */

router.get('/', function(req, res, next) {
    res.json(costumerList);
});
router.post('/', function(req, res) {
    console.log(req.body);
});


module.exports = router;