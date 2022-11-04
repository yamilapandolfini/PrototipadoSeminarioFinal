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

    
}