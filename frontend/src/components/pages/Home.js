import NavBar from "../NavBar/NavBar"
import SearchBar from "../search/buscador.jsx"
import Modalidad from "../modalidad/modalidad";
import ListaProfesoresContainer from "../lista/listaprofesorescontainer";

const Home = () => {

  return(
    <section id="mainpage">
      <NavBar />
      <div className="buscador">
        <SearchBar/>
      </div>
      <div className="modalidad">
        <Modalidad />
      </div>
      <div className="lista_profesores">
        <ListaProfesoresContainer />
      </div>
    </section>
     
    
  );
}

export default Home