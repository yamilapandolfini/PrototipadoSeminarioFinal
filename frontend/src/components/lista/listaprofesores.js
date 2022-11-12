import Profesor from './profesor';


const ListaProfesores = ({ profesores = [] })=>{

    return(
        
        <ul className="ListGroup">
            {profesores.map(profesor =><Profesor key={profesor.id} profesor={profesor}/> )}
        </ul>
            
        
    )
    
}

export default ListaProfesores;


