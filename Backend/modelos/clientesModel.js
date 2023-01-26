var clientesModel = {

}
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var clientesSchema = new Schema({
    cedula: String,
    nombre: String,
    apellido: String,
    direccion: String,
    telefono: Number,
    edad: Number,
    estadoCivil: String
})

const clientesModelo = mongoose.model('Clientes', clientesSchema)

clientesModel.guardar = function (informacion, callback) {

    const instancia = new clientesModelo

    instancia.cedula = informacion.cedula,
        instancia.nombre = informacion.nombre,
        instancia.apellido = informacion.apellido,
        instancia.direccion = informacion.direccion,
        instancia.telefono = informacion.telefono,
        instancia.edad = informacion.edad,
        instancia.estadoCivil = informacion.estadoCivil

    instancia.save((error, clienteCreado) => {
        if (error) {
            console.log(error)
            return callback({ state: false, mensaje: error })
        }
        else {
            console.log(clienteCreado)
            return callback({ state: true, mensaje: clienteCreado })
        }
    })


    // datos.push(
    //     {
    //         cedula: informacion.cedula,
    //         nombre: informacion.nombre,
    //         apellido: informacion.apellido,
    //         direccion: informacion.direccion,
    //         telefono: informacion.telefono,
    //         edad: informacion.edad,
    //         estadoCivil: informacion.estadoCivil
    //     })
    //     return callback({ state: true, mensaje: "Usuario guardado" })


}

clientesModel.listarClientes = function (informacion, callback) {

    clientesModelo.find({}, { _id: 0, cedula: 1, nombre: 1, apellido: 1, direccion: 1, telefono: 1, edad: 1, estadoCivil: 1 }, (error, datos) => {
        if (error) {
            return callback({ state: false, mensaje: error })
        }
        else {
            return callback({ state: true, mensaje: 'Lista de Clientes', data: datos })
        }
    })


    // return callback({ state: true, dato: datos })
}

clientesModel.actualizar = function (informacion, callback) {

    clientesModelo.find({ cedula: informacion.cedula }, {}, (error, datos) => {
        if (error) {
            return callback({ state: false, mensaje: error })
        }
        else {
            if (datos.length > 0) {
                clientesModelo.findByIdAndUpdate(datos[0]._id,
                    {
                        cedula: informacion.cedula,
                        nombre: informacion.nombre,
                        apellido: informacion.apellido,
                        direccion: informacion.direccion,
                        telefono: informacion.telefono,
                        edad: informacion.edad,
                        estadoCivil: informacion.estadoCivil
                    }, (error, clienteModificado) => {
                        if (error) {
                            return callback({ state: false, mensaje: error })
                        }
                        else {
                            return callback({ state: true, mensaje: 'los datos del cliente han sido modificados' })
                        }
                    })
            }
            else {
                return callback({ state: false, mensaje: 'El cliente no existe' })
            }
        }
    })



    // datos[informacion.posicion].edad = informacion.edad
    // datos[informacion.posicion].nombre = informacion.nombre
    // datos[informacion.posicion].apellido = informacion.apellido
    // datos[informacion.posicion].direccion = informacion.direccion
    // datos[informacion.posicion].telefono = informacion.telefono
    // datos[informacion.posicion].edad = informacion.edad
    // datos[informacion.posicion].estadoCivil = informacion.estadoCivil

    // return callback({ state: true, mensaje: "Se actualizaron los datos correctamente" })
}

clientesModel.borrar = function (informacion, callback) {

    clientesModelo.find({ cedula: informacion.cedula }, {}, (error, borrado) => {
        if (error) {
            return callback({ state: false, mensaje: error })
        }
        else {
            if (borrado.length > 0) {
                clientesModelo.findByIdAndDelete(borrado[0]._id, (error, cBorrado) => {
                    if (error) {
                        return callback({ state: false, mensaje: error })
                    }
                    else {
                        return callback({ state: true, mensaje: 'Cliente borrado' })
                    }
                })
            }
        }
    })



    // datos.splice(posicion, 1)
    // return callback({ state: true, mensaje: "Se eliminó correctamente" })
}

module.exports.modelo = clientesModel