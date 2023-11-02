const userService = require('../services/UserService');

async function createUser(req, res) {
    try {
        const novoUsuario = await userService.createUser(req.body);
        res.json(novoUsuario);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

async function getProfile(req, res) {
    try {
        const usuario = await userService.getProfile(req.usuario.id);
        res.json(usuario);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

module.exports = { createUser: createUser, getProfile: getProfile };
