const Usuario = require('../models/UserModel');
const bcrypt = require('bcrypt');

class UserRepository {
    async createUser(dadosUsuario) {
        const saltRounds = 10;
        dadosUsuario.senha = await bcrypt.hash(dadosUsuario.senha, saltRounds);
        return Usuario.create(dadosUsuario);
    }

    async getUserByCredentials(email, senha) {
        return await Usuario.findOne({
            where: { email, senha },
            attributes: ['id', 'role'], // Seleciona apenas os atributos necessários
        });
    }

    async getUserById(id) {
        return await Usuario.findByPk(id);
    }

    async updateUser(id, updatedUserData) {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        return await usuario.update(updatedUserData);
    }

    async deleteUser(id) {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        await usuario.destroy();
    }

    async getAllUsers() {
        return await Usuario.findAll();
    }
}

module.exports = UserRepository;