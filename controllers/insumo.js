const {response} = require('express');
const Insumo = require('../modules/insumo');

const insumosGet = async (req, res = response) => {
    try {
        const insumos = await Insumo.find();
        res.json({
            insumos
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Error en el servidor'});
    }
}

const insumosPost = async (req, res = response) => {
    try {
        const { id_insumo, categoria, nombre, cantidad} = req.body;
        const insumo = new Insumo({ id_insumo, categoria, nombre, cantidad});
        await insumo.save();
        res.json({
            msg: 'Insumo creado',
            insumo
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

// Controlador para actualizar un insumo existente
const insumosPut = async (req, res = response) => {
    try {
        const { id_insumo } = req.params; // Cambiar _id a id_insumo
        const { categoria, nombre, cantidad} = req.body;
        const insumo = await Insumo.findOneAndUpdate({ id_insumo }, {categoria, nombre, cantidad }, { new: true });

        if (!insumo) {
            return res.status(404).json({
                msg: 'Insumo no encontrado'
            });
        }

        res.json({
            msg: 'Insumo actualizado',
            insumo
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

// Controlador para eliminar un insumo existente
const insumosDelete = async (req, res = response) => {
    try {
        const { id_insumo } = req.params; // Cambiar _id a id_insumo
        const insumo = await Insumo.findOneAndDelete({ id_insumo });

        if (!insumo) {
            return res.status(404).json({
                msg: 'Insumo no encontrado'
            });
        }

        res.json({
            msg: 'Insumo eliminado',
            insumo
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

module.exports ={
    insumosGet,
    insumosPost,
    insumosPut,
    insumosDelete
}
