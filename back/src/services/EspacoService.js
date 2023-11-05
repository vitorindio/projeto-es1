const Espaco = require('../models/EspacoModel');

exports.getAllEspacos = async () => {
    return await Espaco.findAll();
};

exports.getEspacoById = async (id) => {
    return await Espaco.findByPk(id);
};

exports.createEspaco = async (espacoData) => {
    return await Espaco.create(espacoData);
};

exports.updateEspaco = async (id, updatedEspacoData) => {
    const espaco = await Espaco.findByPk(id);
    if (!espaco) {
        throw new Error('Espaço não encontrado');
    }
    return await espaco.update(updatedEspacoData);
};

exports.deleteEspaco = async (id) => {
    const espaco = await Espaco.findByPk(id);
    if (!espaco) {
        throw new Error('Espaço não encontrado');
    }
    await espaco.destroy();
};
