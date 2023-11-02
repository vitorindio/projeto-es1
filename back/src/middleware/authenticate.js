const jwt = require('jsonwebtoken');

function autenticacao(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ mensagem: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.usuario = decoded.usuario; // Isso adiciona o usuário ao objeto de requisição
        next();
    } catch (error) {
        return res.status(401).json({ mensagem: 'Token inválido' });
    }
}

module.exports = autenticacao;
