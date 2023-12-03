const espacoService = require('../services/EspacoService');

// controllers/EspacoController.js
const EspacoService = require('../services/EspacoService');

class EspacoController {
    constructor() {
        this.espacoService = new EspacoService();
        this.getAllEspacos = this.getAllEspacos.bind(this);
        this.getEspacoById = this.getEspacoById.bind(this);
        this.createEspaco = this.createEspaco.bind(this);
        this.updateEspaco = this.updateEspaco.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAllEspacos(req, res) {
        try {
            const espacos = await this.espacoService.getAll();
            res.json(espacos);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getEspacoById(req, res) {
        const {id} = req.params;
        try {
            const espaco = await this.espacoService.getById(id);
            res.json(espaco);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async createEspaco(req, res) {
        const espacoData = req.body;
        try {
            const novoEspaco = await espacoService.create(espacoData);
            res.json(novoEspaco);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async updateEspaco(req, res) {
        const {id} = req.params;
        const updatedEspacoData = req.body;
        try {
            const espacoAtualizado = await espacoService.update(id, updatedEspacoData);
            res.json(espacoAtualizado);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    async delete(req, res) {
        const {id} = req.params;
        try {
            await espacoService.delete(id);
            res.json({message: 'Espaço deletado com sucesso'});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };
}

module.exports = new EspacoController();
