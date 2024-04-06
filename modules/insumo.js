const {Schema, model} = require('mongoose'); // Importa las funciones Schema y model de mongoose para definir esquemas y modelos de datos

// Define el esquema del modelo Insumo
const InsumoSchema = Schema({

    // Define que el campo id_insumo es obligatorio
    id_insumo: { type: Number, required: [true, 'El id del insumo es obligatorio'],unique: true },

    // Define que el campo telefono es obligatorio
    categoria: { type: Number, required: [true, 'la categoria es obligatoria'] },

    // Define que el campo nombre es obligatorio
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },

    // Define que el campo email es obligatorio
    cantidad: {type: Number,required: [true, 'La cantidad es obligatoria'] },

})

// Crea y exporta el modelo Insumo a partir del esquema InsumoSchema
module.exports = model('Insumo', InsumoSchema)
