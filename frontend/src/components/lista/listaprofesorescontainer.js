import React from 'react';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ListaProfesores from './listaprofesores';
import axios from 'axios'
//import './ItemListContainer.css';

const url = 'http://localhost:8080/prf/listaProfesores'

const useAxiosGet = (url) => {
    const [profesores, setProfesores] = useState([])
  
    useEffect(() => {
      axios.get(url)
      .then((response) => setProfesores(response.data))
      .catch(error => console.error(`Error: ${error}`))
    }, []);
  
    return {profesores};
  }

const ListaProfesoresContainer = () => {

  const {profesores} = useAxiosGet(url)
  //const {idioma} = useParams()

  console.log(profesores)

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
      <div className="listaprofesorescontainer">
        <ListaProfesores profesores={profesores}/>

      </div>
    
    
  )
}

export default ListaProfesoresContainer;