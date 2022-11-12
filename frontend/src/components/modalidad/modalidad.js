import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

function Modalidad() {
  const [value, setValue] = React.useState('this')

  return (
    <Form>
      <Form.Field>
        Modalidad: <b>{value}</b>
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Presencial'
          name='checkboxRadioGroup'
          value='presencial'
          checked={value === 'presencial'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Online'
          name='checkboxRadioGroup'
          value='online'
          checked={value === 'online'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Hibrido'
          name='checkboxRadioGroup'
          value='hibrido'
          checked={value === 'hibrido'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
    </Form>
  )
}

export default Modalidad