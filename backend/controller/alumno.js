const alumnoModel = require('../dao/models/alumno')


module.exports = class Alumno{
    constructor() {

    }
    
    async listarAlumnos(){
        let listaAlumnos = await alumnoModel.find();
        return listaAlumnos
    }

    async crearAlumno({mail, nombre, apellido, contraseña, direccion}){
        let nuevoAlumno = {
            mail,
            nombre,
            apellido,
            contraseña,
            direccion
        }
        await alumnoModel.create(nuevoAlumno)
        
    }

    async modificarAlumno(mail){
        // let listaAlumnos = this.listarAlumnos()
        // let index = (await listaAlumnos).findIndex(f=>f.mail==mail)
        // let alumnoEditar = listaAlumnos[index]
    }

    async borrarAlumno(){
        
    }
}