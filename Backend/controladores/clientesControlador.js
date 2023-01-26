var clientesModel = require(__dirname + '/../modelos/clientesModel.js').modelo

var clientesControlador = {

}




clientesControlador.guardar = function (request, response) {

    var informacion = {
        cedula: request.body.identification,
        nombre: request.body.name,
        apellido: request.body.lastName,
        direccion: request.body.adress,
        telefono: request.body.phone,
        edad: request.body.age,
        estadoCivil: request.body.status
    }

    //para validar que el dato cedula no este vacio, nulo o indefinido
    if (informacion.cedula == "" || informacion.cedula == null || informacion.cedula == undefined) {
        response.json({ state: false, mensaje: "El campo cédula es obligatorio" })
        return false
    }

    // para validar la cantidad de caracteres minimos que debe tener el campo
    if (informacion.cedula.length < 5) {
        response.json({ state: false, mensaje: "Debe ser mayor de 5 caracteres" })
        return false
    }

    // para validar la cantidad de caracteres maximos que debe tener el campo   
    if (informacion.cedula.length > 10) {
        response.json({ state: false, mensaje: "El campo cédula no debe ser superior de 10 caracteres" })
        return false
    }

    //para validar que el dato nombre no este vacio, nulo o indefinido
    if (informacion.nombre == "" || informacion.nombre == null || informacion.nombre == undefined) {
        response.json({ state: false, mensaje: "El campo nombre es obligatorio" })
        return false
    }

    // para validar la cantidad de caracteres minimos que debe tener el campo
    if (informacion.nombre.length < 3) {
        response.json({ state: false, mensaje: "Debe ser mayor de 3 caracteres" })
        return false
    }

    // para validar la cantidad de caracteres maximos que debe tener el campo   
    if (informacion.nombre.length > 20) {
        response.json({ state: false, mensaje: "El campo nombre no debe ser superior de 20 caracteres" })
        return false
    }

    //para validar que el dato apellido no este vacio, nulo o indefinido
    if (informacion.apellido == "" || informacion.apellido == null || informacion.apellido == undefined) {
        response.json({ state: false, mensaje: "El campo apellido es obligatorio" })
        return false
    }

    // para validar la cantidad de caracteres minimos que debe tener el campo
    if (informacion.apellido.length < 3) {
        response.json({ state: false, mensaje: "Debe ser mayor de 3 caracteres" })
        return false
    }

    // para validar la cantidad de caracteres maximos que debe tener el campo   
    if (informacion.apellido.length > 20) {
        response.json({ state: false, mensaje: "El campo apellido no debe ser superior de 20 caracteres" })
        return false
    }

    //para validar que el dato direccion no este vacio, nulo o indefinido
    if (informacion.direccion == "" || informacion.direccion == null || informacion.direccion == undefined) {
        response.json({ state: false, mensaje: "El campo dirección es obligatorio" })
        return false
    }

    //para validar que el dato telefono no este vacio, nulo o indefinido
    if (informacion.telefono == "" || informacion.telefono == null || informacion.telefono == undefined) {
        response.json({ state: false, mensaje: "El campo teléfono es obligatorio" })
        return false
    }


    //para validar que el dato edad no este vacio, nulo o indefinido
    if (informacion.edad == "" || informacion.edad == null || informacion.edad == undefined) {
        response.json({ state: false, mensaje: "El campo edad es obligatorio" })
        return false
    }

    // para validar la cantidad de caracteres minimos que debe tener el campo
    if (informacion.edad < 18) {
        response.json({ state: false, mensaje: "Debe ser mayor de edad" })
        return false
    }

    // para validar la cantidad de caracteres maximos que debe tener el campo   
    if (informacion.edad > 100) {
        response.json({ state: false, mensaje: "El campo edad no debe ser superior de 100" })
        return false
    }

    //para validar que el dato estadoCivil no este vacio, nulo o indefinido
    if (informacion.estadoCivil == "" || informacion.estadoCivil == null || informacion.estadoCivil == undefined) {
        response.json({ state: false, mensaje: "El campo estadoCivil es obligatorio" })
        return false
    }

    clientesModel.guardar(informacion, function (respuestaGuardar) {
        response.json(respuestaGuardar)
    })


}

clientesControlador.listarClientes = function (request, response) {
    clientesModel.listarClientes(null, function (respuestaListar) {
        response.json(respuestaListar)
    })

}

clientesControlador.actualizar = function (request, response) {
    var informacion = {
        // Id: request.body.Id,
        cedula: request.body.identification,
        nombre: request.body.name,
        apellido: request.body.lastName,
        direccion: request.body.adress,
        telefono: request.body.phone,
        edad: request.body.age,
        estadoCivil: request.body.status
    }

    // if (informacion.Id == "" || informacion.Id == undefined || informacion.Id == null) {
    //     response.json({ state: false, mensaje: "El campo id es obligatorio" })
    //     return false
    // }

    if (informacion.cedula == "" || informacion.cedula == undefined || informacion.cedula == null) {
        response.json({ state: false, mensaje: "El campo cédula es obligatorio" })
        return false
    }

    if (informacion.nombre == "" || informacion.nombre == undefined || informacion.nombre == null) {
        response.json({ state: false, mensaje: "El campo nombre es obligatorio" })
        return false
    }

    if (informacion.apellido == "" || informacion.apellido == undefined || informacion.apellido == null) {
        response.json({ state: false, mensaje: "El campo apellido es obligatorio" })
        return false
    }

    if (informacion.direccion == "" || informacion.direccion == undefined || informacion.direccion == null) {
        response.json({ state: false, mensaje: "El campo dirección es obligatorio" })
        return false
    }

    if (informacion.telefono == "" || informacion.telefono == undefined || informacion.telefono == null) {
        response.json({ state: false, mensaje: "El campo teléfono es obligatorio" })
        return false
    }

    if (informacion.edad == "" || informacion.edad == undefined || informacion.edad == null) {
        response.json({ state: false, mensaje: "El campo edad es obligatorio" })
        return false
    }

    if (informacion.estadoCivil == "" || informacion.estadoCivil == undefined || informacion.estadoCivil == null) {
        response.json({ state: false, mensaje: "El campo estado civil es obligatorio" })
        return false
    }

    // para validar la cantidad de caracteres minimos que debe tener el campo
    if (informacion.edad < 18) {
        response.json({ state: false, mensaje: "Debe ser mayor de edad" })
        return false
    }

    // para validar la cantidad de caracteres maximos que debe tener el campo   
    if (informacion.edad > 100) {
        response.json({ state: false, mensaje: "El campo edad no debe ser superior de 100" })
        return false
    }

    // var posicion = datos.findIndex((item) => item.cedula == informacion.cedula)

    // if (posicion == -1) {
    //     response.json({ state: false, mensaje: "La cédula no existe" })
    //     return false
    // }

    // informacion.posicion = posicion

    clientesModel.actualizar(informacion, function (respuestaActualizar) {
        response.json(respuestaActualizar)
    })


}

clientesControlador.borrar = function (request, response) {
    var informacion = {
        // Id: request.body.Id,
        cedula: request.body.identification,
    }

    // if (informacion.Id == "" || informacion.Id == undefined || informacion.Id == null) {
    //     response.json({ state: false, mensaje: "El campo id es obligatorio" })
    //     return false
    // }

    if (informacion.cedula == "" || informacion.cedula == undefined || informacion.cedula == null) {
        response.json({ state: false, mensaje: "El campo cédula es obligatorio" })
        return false
    }

    //splice para borrar del array, de la posición encontrada y el numero de elementos que se quiere borrar
    // var posicion = datos.findIndex((item) => item.cedula == borrar.cedula)

    // if (posicion == -1) {
    //     response.json({ state: false, mensaje: "La cédula no existe" })
    //     return false
    // }

    clientesModel.borrar(informacion, function (respuestaBorrar) {
        response.json(respuestaBorrar)
    })


}


module.exports.controlador = clientesControlador