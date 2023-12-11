const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME || 'dados_es1', process.env.DB_USER || 'vitor', process.env.DB_PASSWORD || '1234', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
});

module.exports = sequelize;
