const mongoose = require("mongoose");

const EsquemaEstudiante = new mongoose.Schema({
    nombre:String,
    apellido: String,
    edad: Number,
    stack: String
},{timestamps: true, versionKey:false});
//timestamps crea campos de createdAt y updateAt
//versionKey me elimina el atributo __V
const Estudiante = mongoose.model("estudiantes", EsquemaEstudiante);

module.exports = Estudiante;