import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Icon, Image, Rating } from 'semantic-ui-react'

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
        <Card.Description>
          Dirección: {profesor.direccion} {profesor.numero}
        </Card.Description>
        <Card.Description>
          Barrio: Palermo
        </Card.Description>
        <Card.Description>
          Metodología: {profesor.metodologia}
        </Card.Description>
        <Card.Description>
          Horarios: {profesor.horarios} hs
        </Card.Description>
      </Card.Content>
      <Card.Content extra link >
        <Link to={`/detail/${profesor.id}`}>
          <Icon name='user' />
          Ver perfil
        </Link>
      </Card.Content>
    </Card>
  )
}
  


export default Profesor
