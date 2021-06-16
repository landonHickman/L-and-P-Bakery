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
      console.log(res)
      console.log(res.data)
      console.log(res.data.data)
      setUser(res.data.data)
      history.push('/')
    }catch(err){
      alert('error occurred check console')
      console.log('Handle Register error',err)
    }
  }
  
  const handleLogin = () => {

  }

  const handleLogout = () => {

  }
  //return jsx
  return(
    //use context that was created with .Provider. cant rename .Provider. pass props through value.
    <AuthContext.Provider value={{
      user,
      //authenticated is used to check to see if a user is logged in or not.
      //if they are logged in then the navbar will display logout.
      //if they are not logged in then the navbar will display login and register.
      authenticated: user !== null,
      handleRegister,
      handleLogin,
      handleLogout,
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthProvider