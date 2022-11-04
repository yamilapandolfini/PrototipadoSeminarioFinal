const { Schema, model } = require('mongoose')

const profesorSchema = new Schema({
    mail:String,
    nombre:String,
    apellido:String,
    contraseña:String,
    direccion:String,
    idioma: String,
    metodologia: String,
    horarios: String,
    puntaje: Number,
    valoracion: [{
        calificacion: Number,
        detalle: String,
    }],
    evidencia: String,
    alumnos: [{
        nombre: String,
        apellido: String,
        mail: String,
    }]
})

module.exports = model('profesor', profesorSchema);