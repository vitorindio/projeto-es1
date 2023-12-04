// models/associations.js
const Reserva = require('./ReservaModel');
const ReservaAutomatica = require('./ReservaAutomaticaModel');
const ReservaSobAutorizacao = require('./ReservaSobAutorizacaoModel');
const ReservaRecorrente = require('./ReservaRecorrenteModel');

Reserva.hasOne(ReservaAutomatica, { foreignKey: 'id' });
Reserva.hasOne(ReservaSobAutorizacao, { foreignKey: 'id' });
Reserva.hasOne(ReservaRecorrente, { foreignKey: 'id' });