const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();
const auth = require('../middleware/authenticate');
const { body } = require('express-validator');

router.post('/api/register', [
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    body('senha').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres'),
], userController.register.bind(userController));

router.get('/api/usuarios', userController.getAll.bind(userController));
router.get('/api/perfil', auth, userController.getProfile.bind(userController));

module.exports = router;
