const { DataTypes } = require('sequelize');
const sequelize = require('../config/DataBase');

const Usuario = sequelize.define('Usuario', {
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
        tableName: 'Usuario'
});

module.exports = Usuario;
