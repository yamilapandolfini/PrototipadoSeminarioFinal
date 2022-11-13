import NavBar from "../NavBar/NavBar"
import ModalidadProfesor from "../modalidad/modalidadProfesor";
import { Image, Button } from 'semantic-ui-react'


const Agenda = () => {

  return(
    <section id="mainpage">
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="modalidad">
        <ModalidadProfesor />
      </div>
      <br></br>
      <div className="calendarioprofesores">
        <Button>Modificar</Button>
        <Image src={process.env.PUBLIC_URL + '/calendariomock.png'} size='big' />
        <Button>Agregar</Button>
      </div> 
      

    </section>
    
    
  );
}

export default Agenda