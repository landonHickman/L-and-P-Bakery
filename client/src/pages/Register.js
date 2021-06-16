import React, {useContext} from 'react'
import {Form} from 'semantic-ui-react'
import { useFormInput } from '../customHooks/useFormInput'
import { AuthContext } from '../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

const Register = () => {
  //call history from react-router-dom so that we can pass it to AuthProvider so it can be used
  //in that file
  const history = useHistory()
  //passing handleRegister from AuthContext
  const {handleRegister} = useContext(AuthContext)
  //using the custom form input hook(initial value in field, label and placeholder for input)
  //need to drill down to get value. i.e. email.value
  //FIXME: name isn't storeing on submit.
  const name = useFormInput('Dummy', 'Name')
  const email = useFormInput('dummy@dummy.com', 'Email')
  const password = useFormInput('dummydata', 'Password')
  const ConfirmPassword = useFormInput('dummydata', 'Confirm Password')

  const handleSubmit = (e) => {
    //prevents page from refreshing
    e.preventDefault()
    //Front end validation
    if(password.value !== ConfirmPassword.value || password.value.length < 6){
      if(password.value !== ConfirmPassword.value){
        alert('Passwords do not Match!')
      }else{
        alert('Password must be longer than 6 characters.')
      }
    }else{
      handleRegister({name: name.value, email: email.value, password: password.value}, history)
    }

  }
  return(
    <>
      <Form onSubmit={handleSubmit}>
        {/* FIXME: not currently working */}
        <Form.Input {...name} label='Name doesnt work'/>
        {/* Spread out over variable to pass down the items in the useFormInput('', 'Email').
        pattern is used describe what is necessary to get a proper email.*/}
        <Form.Input {...email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
        <Form.Input {...password} type='password'/>
        <Form.Input {...ConfirmPassword} placeholder='Confirm Password'/>
        <Form.Button>Submit</Form.Button>
      </Form>
    </>
  )
}

export default Register