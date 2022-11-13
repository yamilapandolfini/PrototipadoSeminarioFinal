import NavBar from "../NavBar/NavBar"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Button } from 'semantic-ui-react'



const About = () => {

  return(
    <section id="mainpage">
      <NavBar />
      <br>
      </br>
      <br>
      </br>
      <div className="micuenta">
        <h2>Hola Alumna</h2>
        <br></br>
        <h3>Direccion: Av.Luis Maria Campos 200</h3>
        <h4>Barrio: Palermo</h4>
        <br></br>
        <Button>Modificar datos</Button>
        <br></br>
        <br></br>
        <br></br>
        <Button>Cambiar contraseña</Button>
        <br></br>
        <br></br>
        <br></br>
        <Button as={Link} to='/'>Volver</Button>
      </div>
    </section>
    
  );
}

export default About