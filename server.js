const express = require('express');
const app = express();

//inicializamos BD
require('./server/config/mongoose.config')

//Para usar json y obtener datos de la URL
app.use(express.json(), express.urlencoded({ extended: true }));

//importar Rutas
const misRutas = require("./server/routes/estudiante.routes");
misRutas(app);

//Ejecutar al server 
app.listen(8000, ()=> {
    console.log("Servidor corriendo");
})