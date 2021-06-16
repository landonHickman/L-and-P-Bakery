import React, {useState} from 'react'


//use this with the use context hook
export const AuthContext = React.createContext()

//we use this with the higher component
//probably wont use
export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
  const [user, setUser] = useState(null)

  const handleRegister = () => {

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