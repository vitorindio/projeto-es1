// models/ReservaModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ReservaAutomatica = require('./ReservaAutomaticaModel');
const ReservaSobAutorizacao = require('./ReservaSobAutorizacaoModel');
const ReservaRecorrente = require('./ReservaRecorrenteModel');

const Reserva = sequelize.define('Reserva', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    aberta: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    dia_semana_1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dia_semana_2: {
        type: DataTypes.STRING,
    },
    dia_semana_3: {
        type: DataTypes.STRING,
    },
    tipo_reserva: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'reserva',
});

Reserva.hasOne(ReservaAutomatica, { foreignKey: 'id' });
Reserva.hasOne(ReservaSobAutorizacao, { foreignKey: 'id' });
Reserva.hasOne(ReservaRecorrente, { foreignKey: 'id' });

module.exports = Reserva;