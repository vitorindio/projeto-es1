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
    res.json(req.usuario); // Retorna as informações do usuário extraídas do token
}


async function login(req, res) {
    const { email, senha } = req.body;

    try {
        const usuario = await userService.getUserByCredentials(email, senha);

        if (!usuario) {
            return res.status(401).json({ mensagem: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ usuario: { id: usuario.id, role: usuario.role } }, process.env.SECRET_KEY);
        res.json({ token });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

module.exports = { createUser, getProfile, login };
