const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();
const auth = require('../middleware/authenticate');
const { body } = require('express-validator');

router.post('/usuarios', [
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    body('senha').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres'),
], userController.createUser.bind(userController));

router.post('/usuarios', userController.createUser);
router.get('/perfil', auth, userController.getProfile);

module.exports = router;
