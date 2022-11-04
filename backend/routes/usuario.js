const express = require('express')
const path = require ('path')
const Alumnos = require ('../controller/alumno')

const routerUsuario = express.Router()

module.exports = routerUsuario.get('/listarAlumnos', async(req,res)=>{
    const listadoAlumnos = await new Alumnos().listarAlumnos()
    res.send(listadoAlumnos)
})

module.exports = routerUsuario.post('/crearAlumno', async(req,res)=>{
    const nuevoAlumno = await new Alumnos().crearAlumno({mail: req.body.mail, nombre: req.body.nombre,
                                                                apellido: req.body.apellido, contraseña: req.body.contraseña, 
                                                                direccion: req.body.direccion})
    res.send('El usuario se ha creado correctamente')
})

module.exports = routerUsuario