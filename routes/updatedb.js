var express = require('express');
var router = express.Router();

var ETFTickers = require('../models/ETFTickers');

/* GET users listing. */
router.post('/', function(req, res, next) {
   console.log('request object', req.body);
  ETFTickers.sync().then(() => {
    ETFTickers.create(
    {
      Holdings: req.body.Holdings,
      Country_Weights: req.body.Country_Weights,
      Sector_Weights: req.body.Sector_Weights,
      ETF_name: req.body.ETF_name,
      Fund_Descr: req.body.Fund_Descr
    });
  });

  res.send('respond with a resource');

});

module.exports = router;
