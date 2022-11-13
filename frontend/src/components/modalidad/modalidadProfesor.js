import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Checkbox, Icon, Button } from 'semantic-ui-react'

function ModalidadProfesor() {
  const [value, setValue] = React.useState('this')

  return (
    <Form>
      <Form.Field>
        <Button as={Link} to="/chatboxProfesor"><Icon name='mail'></Icon>Mensajes</Button>
      </Form.Field>
      <Form.Field>
      <Button><Icon name='list'></Icon>Lista Alumnos</Button>
      </Form.Field>
      <Form.Field>
      <Button as={Link} to="/agenda">Agenda</Button>
      </Form.Field>
    </Form>
  )
}

export default ModalidadProfesor