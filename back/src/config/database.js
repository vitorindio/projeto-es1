const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome-do-banco', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
