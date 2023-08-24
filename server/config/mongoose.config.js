const mongoose = require("mongoose");
//si hay Econn refuse en vez de mongoose.connect("mongodb://localhost/costarica"
mongoose.connect("mongodb://127.0.0.1:27017/costarica",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log("Conexión a Mongo lista") )
.catch(err => console.log("Error en conexión", err));