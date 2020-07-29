var express = require('express');
var router = express.Router();
const data = require('../models/mongoose_models/mongoose_data')

var setCustomerId = router.get('/', (req, res, next) => {
  data.getCustomerId(req.query.CustomerId, (err, data) => {
    return data.CustomerId;
  })});

// Creates a new customer 
router.post('/', (req, res, next) => {
   CustFirstName = data.createCustomer(req.body, (err, message) => {
   if (err) return res.status(500).send('Error ' + err);

   res.send(`<h2>Thank you for registering, ${req.body.CustFirstName}</h2>`);
  });
});

module.exports = router;
