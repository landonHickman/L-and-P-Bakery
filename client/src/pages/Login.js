import React, {useContext, useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import { useFormInput } from '../customHooks/useFormInput'
import { AuthContext } from '../providers/AuthProvider'
import {useHistory, useLocation} from 'react-router-dom'
import LoginError from '../components/LoginError'
import { btn, EmptyDiv, FormBackground, LoginMargin } from '../styles/styles'

const Login = () => {
  // const [validated, setValidated] = useState(false)
  const [showError, setShowError] = useState(false)
  //call history from react-router-dom so that we can pass it to AuthProvider so it can be used
  //in that file
  const history = useHistory()
  const location = useLocation()
  //passing handleLogin from AuthContext
  const {handleLogin} = useContext(AuthContext)
  //using the custom form input hook(initial value in field, label and placeholder for input)
  //need to drill down to get value. i.e. email.value
  //TODO: Remove dummy data.
  const email = useFormInput('landp@bakery.com', 'Email')
  const password = useFormInput('1234567890', 'Password')
  
  const handleSubmit = (e) => {
    // const form = e.currentTarget
    // if(form.checkValidity() === false){
    //   e.preventDefault()
    //   e.stopPropagation()
    //   console.log('false')
    // }
    e.preventDefault()
    // setValidated(true)
    //Front end validation
    //need to drill down to get value. i.e. email.value
    handleLogin({email: email.value, password: password.value}, history, location, setShowError)
  }
  return(
    <LoginMargin>
      <div style={{height: '120px'}}/>
    <h1>Administer Login</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" style={{position: 'relative'}}>
          <Form.Label>Email</Form.Label>
          <Form.Control {...email} type="email" style={FormBackground}/>
        </Form.Group>
        <Form.Group className="mb-3" style={{position: 'relative'}}>
          <Form.Label>Password</Form.Label>
          <Form.Control {...password} type="password" style={FormBackground}/>
          <Form.Control.Feedback type="invalid" tooltip>Invalid Email or Password!</Form.Control.Feedback>
        </Form.Group>
    {showError && <LoginError/>}
    <br/>
        <Button style={btn.blackButton} type="submit">
          Login
        </Button>
      </Form>
    </LoginMargin>
  )
}

export default Login