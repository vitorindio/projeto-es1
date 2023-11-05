const express = require('express');
const espacoController = require('../controllers/EspacoController');

const router = express.Router();

router.get('/espacos', espacoController.getAllEspacos);
router.get('/espacos/:id', espacoController.getEspacoById);
router.post('/espacos', espacoController.createEspaco);
router.put('/espacos/:id', espacoController.updateEspaco);
router.delete('/espacos/:id', espacoController.deleteEspaco);

module.exports = router;
