import React from 'react'
import { ErrorSpan } from '../styles/styles'
import {ExclamationCircle} from 'react-bootstrap-icons'

const LoginError = () => {
  return (
    <>
      <ErrorSpan>
        <ExclamationCircle style={{marginRight: '10px'}}/>
          Invalid Email or Password
        <ExclamationCircle style={{marginLeft: '10px'}}/>
      </ErrorSpan>
    </>
  )
}
export default LoginError