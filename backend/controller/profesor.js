const alumnoModel = require('../dao/models/alumno')
const profesorModel = require('../dao/models/profesor')


module.exports = class Profesor{
    constructor() {

    }
    
    async listarAlumnosPorProfesor(mail){
        let listaProfesor = await profesorModel.find();
        let index = listaProfesor.findIndex(f=>f.mail==mail)
        if(index != -1){
            return listaProfesor[index].alumnos
        }
    }

    async crearProfesor({mail, nombre, apellido, contraseña, direccion, numero, idioma, modalidad, metodologia,horarios,foto}){
        let nuevoProfesor = {
            mail,
            nombre,
            apellido,
            contraseña,
            direccion,
            numero,
            idioma,
            modalidad,
            metodologia,
            horarios,
            foto
        }
        await profesorModel.create(nuevoProfesor)
        
    }

    async mostrarProfesor(id){
        let profesor = await profesorModel.find();
        let index = profesor.findIndex(f=>f.id==id)
        console.log(id)
        console.log(profesor.id)
        if(index != -1){
            return profesor[index]
        }

    }

    async modificarAlumno(mail){
        // let listaAlumnos = this.listarAlumnos()
        // let index = (await listaAlumnos).findIndex(f=>f.mail==mail)
        // let alumnoEditar = listaAlumnos[index]
    }

    async borrarAlumno(){
        
    }

    async listarProfesores(){
        let listaProfesores = await profesorModel.find();
        return listaProfesores
    }
}