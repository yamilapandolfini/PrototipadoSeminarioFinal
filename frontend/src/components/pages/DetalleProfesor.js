import NavBar from "../NavBar/NavBar"
import SearchBar from "../search/buscador.jsx"
import DetalleProfesoresContainer from "../lista/detalleprofesorcontainer";
import { useParams } from "react-router-dom";

const DetalleProfesor = () => {

  const params = useParams()
  console.log(params)
  return(
    <section id="mainpage">
      <div>
      <NavBar />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="detalle_profesores">
        <DetalleProfesoresContainer paramid={params}/>
      </div>
    </section>
     
    
  );
}

export default DetalleProfesor