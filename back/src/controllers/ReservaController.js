const ReservaService = require('../services/ReservaService');

class ReservaController {
    constructor() {
        this.reservaService = new ReservaService();
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getReservaById = this.getReservaById.bind(this);
        this.getAllByEspaco = this.getAllByEspaco.bind(this);
    }

    async create(req, res) {
        const dados = req.body;
        const tipo = req.params.tipo;
        try {
            const novaReserva = await this.reservaService.create(dados, tipo);
            res.json(novaReserva);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const updatedReservaData = req.body;
        const tipo = req.params.tipo;
        try {
            const reservaAtualizada = await this.reservaService.update(id, updatedReservaData, tipo);
            res.json(reservaAtualizada);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        const tipo = req.params.tipo;
        try {
            await this.reservaService.delete(id, tipo);
            res.json({ message: 'Reserva deletada com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        const tipo = req.params.tipo;
        try {
            const reservas = await this.reservaService.getAll(tipo);
            res.json(reservas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getReservaById(req, res) {
        const { id } = req.params;
        try {
            const reserva = await this.reservaService.getById(id);
            res.json(reserva);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllByEspaco(req, res) {
        const { idEspaco } = req.params;
        const tipo = req.params.tipo;
        try {
            const reservas = await this.reservaService.getAllByEspaco(idEspaco, tipo);
            res.json(reservas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ReservaController();
