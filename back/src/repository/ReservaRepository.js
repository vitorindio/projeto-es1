// repository/ReservaRepository.js
const ReservasAutomaticas = require('../models/ReservaAutomaticaModel');
const ReservasSobAutorizacao = require('../models/ReservaSobAutorizacaoModel');
const ReservasRecorrentes = require('../models/ReservaRecorrenteModel');
const Reserva = require('../models/ReservaModel');

class ReservaRepository {
    getModelByTipo(tipo) {
        switch (tipo) {
            case 'automatica':
                return ReservasAutomaticas;
            case 'sobAutorizacao':
                return ReservasSobAutorizacao;
            case 'recorrente':
                return ReservasRecorrentes;
            default:
                throw new Error('Tipo de reserva inválido');
        }
    }

    async getAll(tipo) {
        const Model = this.getModelByTipo(tipo);
        return await Model.findAll();
    }

    async create(dados, tipo) {
        const Model = this.getModelByTipo(tipo);
        return await Model.create(dados);
    }

    async update(id, updatedReservaData, tipo) {
        const Model = this.getModelByTipo(tipo);
        const reserva = await Model.findByPk(id);
        if (!reserva) {
            throw new Error('Reserva não encontrada');
        }
        return await reserva.update(updatedReservaData);
    }

    async delete(id, tipo) {
        const Model = this.getModelByTipo(tipo);
        const reserva = await Model.findByPk(id);
        if (!reserva) {
            throw new Error('Reserva não encontrada');
        }
        await reserva.destroy();
    }

    async getAllByEspaco(idEspaco, tipo) {
        const Model = this.getModelByTipo(tipo);
        return await Model.findAll({ where: { idEspaco: idEspaco } });
    }

    async getAllByUsuario(idUsuario, tipo) {
        const Model = this.getModelByTipo(tipo);
        return await Model.findAll({ where: { idUsuario: idUsuario } });
    }

    async getById(id, tipo) {
        const Model = this.getModelByTipo(tipo);
        return await Model.findByPk(id);
    }
}

module.exports = ReservaRepository;