// models/ReservaRecorrenteModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ReservaRecorrente = sequelize.define('ReservaRecorrente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    matricula_diretor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sala_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    data_fim: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    docente_siape: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    docente_matricula: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'reserva_recorrente',
});

module.exports = ReservaRecorrente;