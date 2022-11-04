const { Schema, model } = require('mongoose')

const mensajeriaSchema = new Schema({
    mensaje: [{
        usuario: String,
        mensaje: String,
    }],
    evidencia: String,
})

module.exports = model('mensajeria', mensajeriaSchema);