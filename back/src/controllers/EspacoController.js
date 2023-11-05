const espacoService = require('../services/EspacoService');

exports.getAllEspacos = async (req, res) => {
    try {
        const espacos = await espacoService.getAllEspacos();
        res.json(espacos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEspacoById = async (req, res) => {
    const { id } = req.params;
    try {
        const espaco = await espacoService.getEspacoById(id);
        res.json(espaco);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createEspaco = async (req, res) => {
    const espacoData = req.body;
    try {
        const novoEspaco = await espacoService.createEspaco(espacoData);
        res.json(novoEspaco);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEspaco = async (req, res) => {
    const { id } = req.params;
    const updatedEspacoData = req.body;
    try {
        const espacoAtualizado = await espacoService.updateEspaco(id, updatedEspacoData);
        res.json(espacoAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEspaco = async (req, res) => {
    const { id } = req.params;
    try {
        await espacoService.deleteEspaco(id);
        res.json({ message: 'Espaço deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
