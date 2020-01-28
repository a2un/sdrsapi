var Sequelize = require('sequelize');


var sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
    dialect: 'mysql',  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});

module.exports = sequelize