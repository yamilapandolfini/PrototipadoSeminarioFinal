import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Icon, Image, Rating } from 'semantic-ui-react'


const DetalleProfesor = ({ profesor }) => {
  return(
    <Card>
      <Card.Content>
      <div className='valoracion'>
        <Card.Meta>Valoración: <Rating icon='star' defaultRating={3} maxRating={4}></Rating></Card.Meta>
      </div> 
      <div className='foto'>
      <Image
      src={profesor.foto} size='medium' floated='left'/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <Card.Header>{profesor.nombre} {profesor.apellido}</Card.Header>
        <br></br>
        <Card.Header>{profesor.idioma}</Card.Header>
        <br></br>
        <Card.Meta>
          <span className='date'>Modalidad: {profesor.modalidad}</span>
        </Card.Meta>
        <Button floated='right'>Suscribirme</Button>
        <br></br>
        <br></br>
        <br></br>
        <Card.Description>
          Dirección: {profesor.direccion} {profesor.numero}
        </Card.Description>
        <br></br>
        <Card.Description>
          Metodología: {profesor.metodologia}
        </Card.Description>
        <br></br>
        <Card.Description>
          Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Duis tristique sollicitudin nibh sit amet commodo nulla. Suscipit adipiscing bibendum est ultricies integer quis. Ornare suspendisse sed nisi lacus sed viverra tellus in. Sed sed risus pretium quam vulputate. Facilisi nullam vehicula ipsum a arcu. Arcu felis bibendum ut tristique. Ac orci phasellus egestas tellus. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Amet cursus sit amet dictum sit amet justo donec. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Tellus orci ac auctor augue mauris augue neque gravida in. Tristique senectus et netus et malesuada fames ac turpis. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet. Vitae ultricies leo integer malesuada nunc.
        </Card.Description>
        <br></br>
        <Card.Description>
          Disponibilidad Horaria:
        </Card.Description>
        <br></br>
        <Image src={process.env.PUBLIC_URL + '/calendario.png'} size='large' />
        <br></br>
        <br></br>
        <Card.Description>
          Valoracion Alumnos: 
        </Card.Description>
        <br></br>
        <Card.Description>Lucas: <Rating icon='star' defaultRating={3} maxRating={4} floated='left'></Rating></Card.Description>
        <Card.Description>
          "Las clases son muy dinamicas aqui, les recomiendo ampliamente hacerlas. A mi me han servido muchisimo, hasta he conseguido el trabajo soñado en el exterior"
        </Card.Description>
      </Card.Content>
      <Card.Content extra link >
      <Button floated='right'>Generar Primer Contacto</Button>
      </Card.Content>
    </Card>
  )
}

export default DetalleProfesor