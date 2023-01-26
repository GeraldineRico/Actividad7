var express = require('express')
global.app = express()
global.datos = [];
global.config = require(__dirname + '/config.js').configuracion
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const mongoose = require('mongoose')

//permite acceso a las cabeceras "headers"
app.all('*', function (request, response, next) {
    var whitelist = request.headers.origin;

    response.header('Acess-Control-Allow-Origin', whitelist)
    response.header("Access-Control-Allow-Credentials", "true");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    next()
})

//se definen las direcciones que tiene acceso
var cors = require('cors')

app.use(cors({
    origin: function (origin, callback) {
        console.log(origin)
        if (!origin) return callback(null, true)

        if (config.listaBlanca.indexOf(origin) === -1) {
            return callback('error cors', false)
        }

        return callback(null, true)
    }
}))

require(__dirname + '/routes.js')

app.listen(config.puerto, function () {
    console.log('servidor funcionando por el puerto ' + config.puerto)
})

mongoose.connect('mongodb://127.0.0.1:27017/' + config.db,{useNewUrlParser:true,useUnifiedTopology:true},(error,response) => {
    if(error){
        console.log(error)
    }
    else{
        console.log('Conexión a la DB correcta')
    }
})