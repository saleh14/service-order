var express = require('express');
var router = express.Router();

var services = "web develpment:300,web design:250,photography:100,coffee drinking:10"
    .split(',')
    .map(service => service.split(':'))
    .map((service, index) => {
        return { id: index, name: service[0], price: service[1] }
    });


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(services);
});

module.exports = router;