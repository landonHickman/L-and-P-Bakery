import React, {useState} from 'react'
import axios from 'axios'

//use this with the use context hook
export const AuthContext = React.createContext()

//we use this with the higher component
//probably wont use
export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
  const [user, setUser] = useState(null)
  //function created to process the register process
  //userFormData is the object that was passed from the Register page, history was also passed along.
  const handleRegister = async (userFormData, history) => {
    //axios call here
    try{
      let res = await axios.post(`/api/auth`, userFormData)
      setUser(res.data.data)
      history.push('/')
    }catch(err){
      alert('error occurred check console')
      //drilled down so it will show the message i want to look for
      console.log('Handle Register error',err.response.data.errors.full_messages)
    }
  }
  //logging existing user here
  const handleLogin = async (userFormData, history) => {
    //axios call here
    try{
      let res = await axios.post(`/api/auth/sign_in`, userFormData)
      setUser(res.data.data)
      history.push('/')
    }catch(err){
      alert('error occurred check console')
      //drilled down so it will show the message i want to look for
      console.log('Handle Login error',err.response.data.errors.full_messages)
    }
  }

  const handleLogout = async (history) => {
    try {
      let res = await axios.delete(`/api/auth/sign_out`)
      setUser(null)
      history.push('/')
    }catch(err){
      alert('error occurred check console')
      console.log('Handle logout error',err.response)
    }
  }
  //return jsx
  return(
    //use context that was created with .Provider. cant rename .Provider. pass props through value.
    <AuthContext.Provider value={{
      ...user,
      //authenticated is used to check to see if a user is logged in or not.
      //if they are logged in then the navbar will display logout.
      //if they are not logged in then the navbar will display login and register.
      authenticated: user !== null,
      handleRegister,
      handleLogin,
      handleLogout,
      setUser
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthProvider