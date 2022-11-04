const express = require('express')
const path = require ('path')

const routerLogin = express.Router()


//routes login
module.exports = routerLogin.get('/login', (req,res)=>{

})

module.exports = routerLogin.post('/login', (req,res)=>{ //funcion para utilizar passport authentication 

})

module.exports = routerLogin.get('/loginFail', (req,res)=>{ 

})

//routes logout

module.exports = routerLogin.get('/logout', (req,res)=>{

})

//routes register

module.exports = routerLogin.get('/registroAlumno', (req,res)=>{

})

module.exports = routerLogin.post('/registroAlumno', (req,res)=>{//funcion para utilizar passport authentication 

})

module.exports = routerLogin.get('/registroProfesor', (req,res)=>{

})

module.exports = routerLogin.post('/registroProfesor', (req,res)=>{//funcion para utilizar passport authentication 

})

module.exports = routerLogin.get('/registroFail', (req,res)=>{

})


module.exports = routerLogin