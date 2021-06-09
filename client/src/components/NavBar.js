import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BORDER_RADIUS, FONT_SIZES, TEXT_COLOR } from '../styles/styles'

const NavBar = () => {
  return(
    <NavContainer>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/examples'>Examples</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/tests'>Tests</NavLink>
    </NavContainer>
  )
}


const NavContainer = styled.div`
  font-size: ${FONT_SIZES.MEDIUM};
  display: flex;
  flex-direction: row;
  justify-Content: flex-start;
  
  background-color: lightgrey;
  border-bottom: 1px solid lightgrey;
`
const NavLink = styled(Link)`
  padding: 8px 10px 8px 10px;
  text-decoration: none;
  color: ${TEXT_COLOR};
  background-color: white;
  margin: 1px;
  border: 0px;
  border-radius: ${BORDER_RADIUS};

  &:hover {
    text-decoration: underline;
  }
`

export default NavBar