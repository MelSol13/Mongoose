const Estudiante = require("../models/estudiante.model");

//Regresa una lista de objetos/documentos de Estudiante
module.exports.muestraEstudiantes = (req, res) => {
    //db.estudiantes.find() es equivalente a la siguiente linea
    Estudiante.find()
        .then(todosEstudiantes => res.json({estudiantes: todosEstudiantes}))
        .catch(err => res.json({message:"Algo salió mal", error:err}));
};

//Me regresa un documento de estudiante en base al ID que se reciba de la URL
module.exports.muestraEstudiante = (req,res)=>{
    //db.estudiantes.find({-id:ObjectId('asdadadadad')})
    Estudiante.findOne({_id: req.params.id})
    .then(unEstudiante => res.json({estudiante: unEstudiante}))
    .catch(err => res.json({message:"Algo salió mal", error: err}));
};

//Me crea un nuevo estudiante en base a lo que reciba en body
module.exports.creaEstudiante = (req, res)=> {
    //db.estudiantes.insertOne({nombre:"Elena"....resto de datos})
    Estudiante.create(req.body)
        .then(nuevoEstudiante => res.json({estudiante: nuevoEstudiante}))
        .catch(err => res.json({message:"Algo salió mal", error: err}));
};

//Me actualiza el estudiante en base a lo que reciba en body y lo haga solamente con el ID recibido en URL
module.exports.actualizaEstudiante = (req, res) => {
        Estudiante.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(estudianteActualizado => res.json({estudiante: estudianteActualizado}))
        .catch(err => res.json({message:"Algo salió mal", error: err}));
};

//Borramos un estudiante en base al ID URL
module.exports.borrarEstudiante = (req,res)=>{
    Estudiante.deleteOne({_id: req.params.id})
    .then( result=> res.json({result: result}))
    .catch(err => res.json({message:"Algo salió mal", error: err}));
}