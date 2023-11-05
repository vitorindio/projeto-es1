// models/EspacoModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Espaco = sequelize.define('Espaco', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    localizacao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lotacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    recursosInstalados: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usuarioResponsavel: {
        type: DataTypes.STRING,
    },
    bloqueado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    motivoBloqueio: {
        type: DataTypes.STRING,
    },
    previsaoRetorno: {
        type: DataTypes.DATE,
    },
    reservavel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    informacoesReserva: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Espaco;
