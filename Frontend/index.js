

function peticion(post, callback) {
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            return callback (this.responseText);
        }
    });

    xhr.open(post.tipo, post.host + post.path);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(post.payload);
}

function Guardar() {

    var cedula = document.getElementById("cedula").value
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var direccion = document.getElementById("direccion").value
    var telefono = document.getElementById("telefono").value
    var edad = document.getElementById("edad").value
    var estadoCivil = document.getElementById("estadoCivil").value

    var data = "name=" + nombre + "&age=" + edad + "&identification=" + cedula + "&lastName=" + apellido + "&adress=" + direccion + "&phone=" + telefono + "&status=" + estadoCivil;

    var post = {
        tipo: "POST",
        host: "http://localhost:3000",
        path: "/cliente/guardar",
        payload: data
    }

    peticion(post,function(respuestaG){
        var respuestaJson = JSON.parse(respuestaG)
        if(respuestaJson.state == false){
            var elemento = document.getElementById('mensajeError')
            elemento.innerHTML = respuestaJson.mensaje
        }else{
            var elemento = document.getElementById('mensajeSuccess')
            elemento.innerHTML = respuestaJson.mensaje
        }
        setTimeout(function(){
            var elemento1 = document.getElementById('mensajeError')
            elemento1.innerHTML = ""
            var elemento = document.getElementById('mensajeSuccess')
            elemento.innerHTML = ""
        },2000)
    })

    limpiar()
    
}

function Listar() {

    var post = {
        tipo: "POST",
        host: "http://localhost:3000",
        path: "/cliente/listarClientes",
        payload: null
    }

    peticion(post,function(respuestaL){
        var msjL = document.getElementById('mensaje')
        msjL.innerHTML = respuestaL
        console.log(respuestaL)
    })
}

function Actualizar() {
    var cedula = document.getElementById("cedula").value
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var direccion = document.getElementById("direccion").value
    var telefono = document.getElementById("telefono").value
    var edad = document.getElementById("edad").value
    var estadoCivil = document.getElementById("estadoCivil").value

    var data = "name=" + nombre + "&age=" + edad + "&identification=" + cedula + "&lastName=" + apellido + "&adress=" + direccion + "&phone=" + telefono + "&status=" + estadoCivil;

    var post = {
        tipo: "POST",
        host: "http://localhost:3000",
        path: "/cliente/actualizar",
        payload: data
    }

    peticion(post,function(respuestaA){
        var msjA = document.getElementById('mensaje')
        msjA.innerHTML = respuestaA
        console.log(respuestaA)
    })

    limpiar()
}

function Borrar() {
    var cedula = document.getElementById("cedula").value    

    var data = "identification=" + cedula;

    var post = {
        tipo: "POST",
        host: "http://localhost:3000",
        path: "/cliente/borrar",
        payload: data
    }

    peticion(post,function(respuestaB){
        var msjB = document.getElementById('mensaje')
        msjB.innerHTML = respuestaB
        console.log(respuestaB)
    })

    limpiar()
}

function limpiar () {
    document.getElementById("cedula").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("direccion").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("edad").value = ""
    document.getElementById("estadoCivil").value = ""
}


