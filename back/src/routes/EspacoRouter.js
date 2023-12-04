const express = require('express');
const espacoController = require('../controllers/EspacoController');

const router = express.Router();

router.get('/api/espacos', espacoController.getAllEspacos);
router.get('/api/espacos/:id', espacoController.getEspacoById);
router.post('/api/espacos', espacoController.createEspaco);
router.put('/api/espacos/:id', espacoController.updateEspaco);
router.delete('/api/espacos/:id', espacoController.delete);

module.exports = router;
