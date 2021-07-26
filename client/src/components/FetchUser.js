import {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'

// the status of users
// I could have a user in state - (logged in)
// I do not have user but have a token
   // - need to check if token is valid, if valid i need to setUser to state
// i could not have user in state(context), and not have a token in localstorage
  // user not logged

const FetchUser = (props)=>{

    const [loaded,setLoaded] = useState(false)
    const {authenticated, setUser} = useContext(AuthContext)

    useEffect(()=>{
        checkUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const checkUser = async () => {
        // if authenticated that means we have a user in state (logged In)
        // if don't have a access-token, we are not logged in
        if( authenticated || !localStorage.getItem('access-token')){
            setLoaded(true)
            return;
        }

        try{
           const res = await axios.get("/api/auth/validate_token")
           setUser(res.data.data)
        } catch(err) {
            console.log(err);
      } finally {
           setLoaded(true)
        }
    }

    return loaded ? props.children : null

}

export default FetchUser