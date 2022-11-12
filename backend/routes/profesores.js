const express = require('express')
const path = require ('path')
const Profesores = require ('../controller/profesor')

const routerProfesor = express.Router()

module.exports = routerProfesor.get('/listaProfesores', async(req,res)=>{
    const listadoProfesores = await new Profesores().listarProfesores()
    res.send(listadoProfesores)
})

module.exports = routerProfesor.post('/crearProfesor', async(req,res)=>{
    const crearProfesor = await new Profesores().crearProfesor({
        mail: req.body.mail,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contraseña: req.body.contraseña,
        direccion: req.body.direccion,
        idioma: req.body.idioma,
        modalidad: req.body.modalidad,
        metodologia: req.body.metodologia,
        horarios:req.body.horarios,
        foto:req.body.foto
    })

    res.send(crearProfesor)
})


module.exports = routerProfesor