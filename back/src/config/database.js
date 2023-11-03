const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql-es1', process.env.DB_USERX, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
