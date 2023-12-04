// models/EspacoModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ReservaAutomatica = require('./ReservaAutomaticaModel');
const ReservaSobAutorizacao = require('./ReservaSobAutorizacaoModel');
const ReservaRecorrente = require('./ReservaRecorrenteModel');

const Espaco = sequelize.define('Espaco', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
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
    recursos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    disponivel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    // Other model options go here
    tableName: 'sala', // explicitly specify table name
});

Espaco.hasMany(ReservaAutomatica, { foreignKey: 'sala_id' });
Espaco.hasMany(ReservaSobAutorizacao, { foreignKey: 'sala_id' });
Espaco.hasMany(ReservaRecorrente, { foreignKey: 'sala_id' });


module.exports = Espaco;