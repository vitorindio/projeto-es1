const Usuario = require('../models/UserModel');
const bcrypt = require('bcrypt');

class UserRepository {
    async createUser(dadosUsuario) {
        const saltRounds = 10;
        dadosUsuario.senha = await bcrypt.hash(dadosUsuario.senha, saltRounds);
        return Usuario.create(dadosUsuario);
    }

    /* TODO: rever metodo
    async getUserByCredentials(email, senha) {
        const usuario = await Usuario.findOne({
            where: { email },
            attributes: ['id', 'role', 'senha'], // Adicione 'senha' aos atributos selecionados
        });

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (!senhaCorreta) {
            throw new Error('Senha incorreta');
        }

        // Remova a senha do objeto do usuário antes de retorná-lo
        delete usuario.dataValues.senha;

        return usuario;
    }*/

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