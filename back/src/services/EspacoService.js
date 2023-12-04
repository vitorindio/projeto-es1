// services/EspacoService.js
const EspacoRepository = require('../repository/EspacoRepository');
const EspacoModel = require("../models/EspacoModel");

class EspacoService {
    constructor() {
        this.espacoRepository = new EspacoRepository();
    }

    async getAll() {
        return this.espacoRepository.getAll();
    }

    async getById(id) {
        return this.espacoRepository.getById(id);
    }

    async getByNome(nome) {
        return this.espacoRepository.getByNome(nome);
    }

    async create(dados) {
        return this.espacoRepository.create(dados);
    }

    async update(id, updatedEspacoData) {
        return this.espacoRepository.update(id, updatedEspacoData);
    }

    async delete(id) {
        return this.espacoRepository.delete(id);
    }

    async getAllDisponiveis() {
        return this.espacoRepository.getAllDisponiveis();
    }

    async getByTipo(tipo) {
        return this.espacoRepository.getByTipo(tipo);
    }
}

module.exports = EspacoService;