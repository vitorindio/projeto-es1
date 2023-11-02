const Usuario = require('../models/UserModel');

async function createUser(dadosUsuario) {
    return Usuario.create(dadosUsuario);
}


async function getUserByCredentials(email, senha) {
    return await Usuario.findOne({
        where: { email, senha },
        attributes: ['id', 'role'], // Seleciona apenas os atributos necessários
    });
}

module.exports = { createUser, getUserByCredentials };
