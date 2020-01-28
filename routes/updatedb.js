var express = require('express');
var router = express.Router();

var ETFTickers = require('../models/ETFTickers');

/* GET users listing. */
router.post('/', function(req, res, next) {
   console.log('request object', req);
  ETFTickers.sync().then(() => {
    ETFTickers.create(
    {
      Holdings: req.Holdings,
      Country_Weights: req.Country_Weights,
      Sector_Weights: req.Sector_Weights,
      ETF_name: req.ETF_name,
      Fund_Descr: req.Fund_Descr
    });
  });

  res.send('respond with a resource');

});

module.exports = router;
