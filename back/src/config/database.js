const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, 'vitor', '1234', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
});

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER || 'vitor', process.env.DB_PASSWORD || '1234', {
//     host: process.env.DB_HOST || 'localhost',
//     dialect: 'mysql',
//     port: process.env.DB_PORT || 3306,
// });

module.exports = sequelize;
