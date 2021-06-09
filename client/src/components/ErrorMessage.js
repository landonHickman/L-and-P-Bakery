import React from 'react'
import FormattedMessage from './FormattedMessage'
import StringifyJSON from './StringifyJSON'

const ErrorMessage = (props) => {
  return (
    <FormattedMessage type='alert'>
      <StringifyJSON json={props.error}/>
    </FormattedMessage>
  )
}

export default ErrorMessage