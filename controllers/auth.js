const Insumo = require('../modules/insumo')

// Importa la librería bcryptjs para el cifrado y comparación de contraseñas
const bcrypt = require('bcryptjs')


// Función asincrónica para comparar la contraseña proporcionada con el hash almacenado
async function comparePassword(plaintextPassword, hash) {
const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

// Función de inicio de sesión
const login = async(req, res) => {
const { email, password } = req.body // Extrae el email y la contraseña del cuerpo de la solicitud

// Busca un  en la base de datos que coincida con el email proporcionado
const Insumo = await Insumo.findOne({email})

try {
    // Verifica si el Insumo existe en la base de datos
    if( !Insumo ){
        return res.status(400).json({
            msg: 'Correo electrónico no encontrado'
        })
    }

// Verifica si el Insumo está activo
    if( !Insumo.estado ){
        return res.status(400).json({
            msg: 'Insumo inactivo'
        }) 
    }

// Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
resultado = await comparePassword(password, Insumo.password)

    if(resultado == true){
        return res.status(400).json({
            msg: 'El password es correcto'
        }) 
    }else{
        return res.status(400).json({
            msg: 'El password es incorrecto'
        }) 
    }

} catch (err) {
    return res.status(400).json({
        msg: 'Apreciado Insumo contacte al administrador.' // Mensaje de error genérico en caso de fallo
    })
    }
}

// Exporta la función de inicio de sesión para que esté disponible para otros módulos
module.exports = {
    login
}
