import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BORDER_RADIUS, FONT_SIZES, NAV_BACKGROUND, TEXT_COLOR, WHITE_BACKGROUND } from '../styles/styles'

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
  background-color: ${NAV_BACKGROUND};
  border-bottom: 1px solid ${NAV_BACKGROUND};
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
`
const NavLink = styled(Link)`
  padding: 8px 10px 8px 10px;
  text-decoration: none;
  color: ${TEXT_COLOR};
  background-color: ${WHITE_BACKGROUND};
  margin: 2px 1px 2px 2px;
  border: 0px;
  border-radius: ${BORDER_RADIUS};

  &:hover {
    text-decoration: underline;
  }
`

export default NavBar