const Usuario = require('../models/UserModel');
const bcrypt = require('bcrypt');

class UserRepository {
    async createUser(dadosUsuario) {
        const saltRounds = 10;
        dadosUsuario.senha = await bcrypt.hash(dadosUsuario.senha, saltRounds);
        return Usuario.create(dadosUsuario);
    }

    //TODO: login
    async getUserByCredentials(email, senha) {
        // Busca um usuário no banco de dados com o email fornecido
        const usuario = await Usuario.findOne({
            where: { email },
            attributes: ['email', 'senha'], // Seleciona apenas os atributos 'id', 'role' e 'senha' do usuário
        });

        // Se nenhum usuário foi encontrado com o email fornecido, lança um erro
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        // Compara a senha fornecida com a senha do usuário usando bcrypt
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        // Se a senha fornecida não corresponder à senha do usuário, lança um erro
        if (!senhaCorreta) {
            throw new Error('Senha incorreta');
        }

        // Remove a senha do objeto do usuário antes de retorná-lo
        delete usuario.dataValues.senha;

        // Retorna o usuário
        return usuario;
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
        console.log(Usuario);
        return await Usuario.findAll();
    }
}

module.exports = UserRepository;