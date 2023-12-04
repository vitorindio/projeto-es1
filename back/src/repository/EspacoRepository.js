// repository/EspacoRepository.js
const EspacoModel = require('../models/EspacoModel');

class EspacoRepository {
    async create(dados) {
        try {
            return await EspacoModel.create(dados);
        } catch (err) {
            throw err;
        }
    }

    async update(id, updatedData) {
        try {
            const espaco = await EspacoModel.findByPk(id);
            if (!espaco) {
                throw new Error('Espaço não encontrado');
            }
            return await espaco.update(updatedData);
        } catch (err) {
            throw err;
        }
    }

    async delete(id) {
        try {
            const espaco = await EspacoModel.findByPk(id);
            if (!espaco) {
                console.log('Espaço não encontrado');
            }
            await espaco.destroy();
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        try {
            return await EspacoModel.findByPk(id);
        } catch (err) {
            throw err;
        }
    }

    async getByTipo(tipo) {
        try {
            return await EspacoModel.findAll({
                where: {
                    tipo: tipo
                }
            });
        } catch (err) {
            throw err;
        }
    }

    async getByNome(nome) {
        try {
            return await EspacoModel.findOne({
                where: {
                    nome: nome
                }
            });
        } catch (err) {
            throw err;
        }
    }

    async getAll() {
        try {
            return await EspacoModel.findAll();
        } catch (err) {
            throw err;
        }
    }

    async getAllDisponiveis() {
        try {
            return await EspacoModel.findAll({
                where: {
                    disponivel: true
                }
            });
        } catch (err) {
            throw err;
        }
    }
}

module.exports = EspacoRepository;