const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();

router.post('/api/login', userController.login);

module.exports = router;
