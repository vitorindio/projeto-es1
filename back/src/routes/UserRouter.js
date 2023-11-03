const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();
const auth = require('../middleware/authenticate');

router.post('/usuarios', userController.createUser);
router.get('/perfil', auth, userController.getProfile);

module.exports = router;
