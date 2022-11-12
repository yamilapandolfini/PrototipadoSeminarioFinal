import React from 'react'
import { useState, useEffect } from 'react'
import DetalleProfesor from './detalleprofesor'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const url = 'http://localhost:8080/prf/mostrarProfesor/'

const useAxiosGet = (url) => {
    const [profesor, setProfesor] = useState([])
  
    useEffect(() => {
      axios.get(url)
      .then((response) => setProfesor(response.data))
      .catch(error => console.error(`Error: ${error}`))
    }, []);
  
    return {profesor};
  }

const DetalleProfesoresContainer = () => {
    const {paramId} = useParams()
    console.log("asd", paramId)
    console.log(url + paramId)
  const {profesor} = useAxiosGet(url + paramId)
  //const {idioma} = useParams()

  console.log(profesor)

//   useEffect( ()=> { 

//       setLoading(true)
//       getProfesores('idioma', '==', idioma).then(profesores => {
//           setProfesores(profesores)
//       }).catch(error => {
//           console.log(error)
//       }).finally(() => {
//           setLoading(false)
//       })
//     return(()=>{
//       setProfesores([])
//     })

//   }, [idioma])
 
  return (
      <div className="detalleprofesorescontainer">
        <DetalleProfesor profesor={profesor}/>

      </div>
    
    
  )
}

export default DetalleProfesoresContainer;