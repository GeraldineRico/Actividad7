var clientesControlador = require(__dirname + '/controladores/clientesControlador.js').controlador



//create
app.post("/cliente/guardar", function (request, response) {
    clientesControlador.guardar(request,response)
})

//read
app.post("/cliente/listarClientes", function (request, response) {
    clientesControlador.listarClientes(request,response)
})

//update "se requiere un campo único como la cédula"
app.post("/cliente/actualizar", function (request, response) {
    clientesControlador.actualizar(request,response)
})

//delete
app.post("/cliente/borrar", function (request, response) {
    clientesControlador.borrar(request,response)
})