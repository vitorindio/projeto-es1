// models/ReservaSobAutorizacaoModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ReservaSobAutorizacao = sequelize.define('ReservaSobAutorizacao', {
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
    administrador_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    justificativa: {
        type: DataTypes.STRING,
    },
    em_analise: {
        type: DataTypes.BOOLEAN,
    },
    aceito: {
        type: DataTypes.BOOLEAN,
    },
    data: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'reserva_sob_autorizacao',
});

module.exports = ReservaSobAutorizacao;