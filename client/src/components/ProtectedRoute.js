import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import {AuthContext} from '../providers/AuthProvider'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const {authenticated} = useContext(AuthContext)

  return(
    <Route {...rest} render={(props)=>(
      authenticated ? (
        <Component {...props}/>
      ) : (<Redirect to={{pathname: '/admin', state: {from: props.location}}}/>)
    )}/>
  )
}
export default ProtectedRoute