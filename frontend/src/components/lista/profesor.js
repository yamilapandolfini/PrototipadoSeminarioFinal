import React from 'react'
import { Card, Icon, Image, Rating } from 'semantic-ui-react'

const Profesor = ({ profesor }) => (
  <Card>
    <Image src={profesor.foto} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{profesor.nombre} {profesor.apellido}</Card.Header>
      <Card.Header>{profesor.idioma}</Card.Header>
      <Card.Meta>
        <span className='date'>Modalidad: {profesor.modalidad}</span>
      </Card.Meta>
      <Rating icon='star' defaultRating={3} maxRating={4}>Valoracion</Rating>
      <Card.Description>
        Metodologia: {profesor.metodologia}
      </Card.Description>
      <Card.Description>
        Horarios: {profesor.horarios} hs
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        ver perfil
      </a>
    </Card.Content>
  </Card>
)

export default Profesor
