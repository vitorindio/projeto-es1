// services/ReservaService.js
const ReservaRepository = require('../repository/ReservaRepository');

class ReservaService {
    constructor() {
        this.reservaRepository = new ReservaRepository();
    }

    async delete(id, tipo) {
        return this.reservaRepository.delete(id, tipo);
    }

    async getAll(tipo) {
        return this.reservaRepository.getAll(tipo);
    }

    async create(dados, tipo) {
        return this.reservaRepository.create(dados, tipo);
    }

    async update(id, updatedReservaData, tipo) {
        return this.reservaRepository.update(id, updatedReservaData, tipo);
    }

    async getAllByEspaco(idEspaco, tipo) {
        return this.reservaRepository.getAllByEspaco(idEspaco, tipo);
    }

    async getById(id, tipo) {
        return this.reservaRepository.getById(id, tipo);
    }
}

module.exports = ReservaService;