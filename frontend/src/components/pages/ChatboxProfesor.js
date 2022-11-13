import NavBar from "../NavBar/NavBar"
import ModalidadProfesor from "../modalidad/modalidadProfesor";
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const ChatboxProfesor = () => {

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
      <div className="chatboxsimulator">
      <Comment.Group>
    <Header as='h3' dividing>
      Chat con Alumna
    </Header>
    <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div className="coments2">
    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>Alumna</Comment.Author>
        <Comment.Metadata>
        </Comment.Metadata>
        <Comment.Text>Hola Profesora, como esta? Me gustaria tomar clases con usted</Comment.Text>
        <Comment.Actions>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    </div>

    <div className="coments">
        <Comment>
        <Comment.Content>
            <Comment.Author as='a'>Profesora</Comment.Author>
            <Comment.Metadata>
            </Comment.Metadata>
            <Comment.Text>
            <p>Hola Alumna, un gusto!. En que horarios te gustaria tener la clase, que dia te gustaria comenzar y en que tipo de modalidad?</p>
            </Comment.Text>
            <Comment.Actions>
            </Comment.Actions>
        </Comment.Content>
        </Comment>
    </div>

    <div className="coments2">
    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>Alumna</Comment.Author>
        <Comment.Metadata>
        </Comment.Metadata>
        <Comment.Text>Tendra disponibilidad el lunes 17hs?, modalidad hibrida, si le parece iniciamos de manera presencial asi me conoce</Comment.Text>
        <Comment.Actions>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    </div>

    <div className="coments">
        <Comment>
        <Comment.Content>
            <Comment.Author as='a'>Profesora</Comment.Author>
            <Comment.Metadata>
            </Comment.Metadata>
            <Comment.Text>
            <p>Si tengo, enseguida te agendo, perfecto!!, ya cuentas con mi informacion por lo que te espero el lunes 17 hs!</p>
            </Comment.Text>
            <Comment.Actions>
            </Comment.Actions>
        </Comment.Content>
        </Comment>
    </div>

    <div className="coments2">
    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>Alumna</Comment.Author>
        <Comment.Metadata>
        </Comment.Metadata>
        <Comment.Text>Perfecto, saludos</Comment.Text>
        <Comment.Actions>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    </div>

    <Form action="">
      <Form.TextArea />
      <Button content='Enviar' labelPosition='left' icon='edit' primary floated="right"/>
    </Form>
  </Comment.Group>
      </div>
    </section>
    
    
  );
}

export default ChatboxProfesor