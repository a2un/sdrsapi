var express = require('express');
var router = express.Router();

var ETFTickers = require('../models/ETFTickers');

/* GET users listing. */
router.get('/', function(req, res, next) {

  ETFTickers.sync().then(() => {
    ETFTickers.create(
    {
      Holdings: 'test2',
      Country_Weights: 23,
      Sector_Weights: 23,
      ETF_name: 'test-ticker2',
      Fund_Descr: 'this is test inside route'
    });
  });

  res.send('respond with a resource');

});

module.exports = router;
