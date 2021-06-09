import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <>
    <Link to='/'>Home</Link>
    <Link to='/examples'>Examples</Link>
    <Link to='/about'>About</Link>
    <Link to='/tests'>Tests</Link>
    
    </>
  )
}

export default NavBar