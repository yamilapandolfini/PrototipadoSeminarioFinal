import React from 'react'
import { Card, Icon, Image, Rating } from 'semantic-ui-react'

const Profesor = ({ profesor }) => {
  return(
    <Card>
      <Card.Content>
      <div className='valoracion'>
        <Card.Meta>Valoración: <Rating icon='star' defaultRating={3} maxRating={4}></Rating></Card.Meta>
      </div> 
      <div className='foto'>
      <Image
      src={profesor.foto} size='small' floated='left'/>
      </div>
        <Card.Header>{profesor.nombre} {profesor.apellido}</Card.Header>
        <Card.Header>{profesor.idioma}</Card.Header>
        <Card.Meta>
          <span className='date'>Modalidad: {profesor.modalidad}</span>
        </Card.Meta>
        <Rating icon='star' defaultRating={3} maxRating={4}>Valoracion</Rating>
        <Card.Description>
          Dirección: {profesor.direccion} {profesor.numero}
        </Card.Description>
        <Card.Description>
          Metodología: {profesor.metodologia}
        </Card.Description>
        <Card.Description>
          Horarios: {profesor.horarios} hs
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          Ver perfil
        </a>
      </Card.Content>
    </Card>
  )
}
  


export default Profesor
