var Sequelize = require('sequelize');
var sequelize = require('../db/index');

module.exports = sequelize.define('ETFTickers', {
        Holdings: {
            type: Sequelize.STRING,
            field:'Holdings'
        },
        Country_Weights: {
            type:Sequelize.INTEGER,
            field:'Country_Weights'
        },
        Sector_Weights: {
            type:Sequelize.INTEGER,
            field:'Sector_Weights'
        },
        ETF_name: {
            type:Sequelize.STRING,
            field:'ETF_name'
        },
        Fund_Descr: {
            type:Sequelize.STRING,
            field:'Fund_Descr'
        }
        }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });