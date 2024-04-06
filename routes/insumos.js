const { Router } = require('express');
const router = Router();
const { insumosGet, insumosPost, insumosPut, insumosDelete } = require('../controllers/insumo');

// Ruta para obtener todos los insumos (GET '/')
router.get('/', insumosGet);

// Ruta para crear un nuevo insumos (POST '/')
router.post('/', insumosPost);

// Ruta para actualizar un insumo existente (PUT '/:idinsumo')
router.put('/:id_insumo', insumosPut); // Cambiar _id a id_pinsumo

// Ruta para eliminar un insumo existente (DELETE '/:idInsumo')
router.delete('/:id_insumo', insumosDelete); // Cambiar _id a idinsumo

module.exports = router;
