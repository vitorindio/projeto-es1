const Usuario = require('../models/UserModel');

async function createUser(dadosUsuario) {
    return Usuario.create(dadosUsuario);
}

async function getProfile(id) {
    return Usuario.findByPk(id);
}

module.exports = { createUser: createUser, getProfile: getProfile };
