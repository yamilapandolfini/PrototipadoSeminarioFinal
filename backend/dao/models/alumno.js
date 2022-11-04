const { Schema, model } = require('mongoose')

const alumnosSchema = new Schema({
    mail:String,
    nombre:String,
    apellido:String,
    contraseña:String,
    direccion:String,
})

module.exports = model('alumnos', alumnosSchema);