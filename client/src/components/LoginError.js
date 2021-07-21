import React from 'react'
import { LoginErrorSpan } from '../styles/styles'
import {ExclamationCircle} from 'react-bootstrap-icons'

const LoginError = () => {
  return (
    <>
      <LoginErrorSpan>
        <ExclamationCircle style={{marginRight: '10px'}}/>
          Invalid Email or Password
        <ExclamationCircle style={{marginLeft: '10px'}}/>
      </LoginErrorSpan>
    </>
  )
}
export default LoginError