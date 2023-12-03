// models/ReservaAutomaticaModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ReservaAutomatica = sequelize.define('ReservaAutomatica', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    sala_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    usuario_matricula: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'reserva_automatica',
});

module.exports = ReservaAutomatica;