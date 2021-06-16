import React, { useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'
import { AuthContext} from '../providers/AuthProvider'
import { BORDER_RADIUS, FONT_SIZES, NAV_BACKGROUND, TEXT_COLOR, WHITE_BACKGROUND } from '../styles/styles'

const NavBar = () => {
  //used to set which link is active
  const {pathname} = useLocation()
  //used to send to another link
  const history = useHistory()
  // authenticated used to see if user is logged in or not.
  // handleLogout logs user out
  const {authenticated, handleLogout} = useContext(AuthContext)
  const getRightNav = () => {
    if(authenticated){
      return(
        <Menu.Menu position='right'>
          <Menu.Item onClick={()=>handleLogout(history)}>Logout</Menu.Item>
        </Menu.Menu>
      )
    }else{
      return(
        <Menu.Menu position='right'>
          <Link to='/register'>
            <Menu.Item active={pathname=== '/register'}>Register</Menu.Item>
          </Link>
          <Link to='/login'>
            <Menu.Item active={pathname=== '/login'}>Login</Menu.Item>
          </Link>
        </Menu.Menu>
      )
    }
  }
  return(
    <>
      <Menu pointing secondary>
        <Link to='/'><Menu.Item active={pathname=== '/'}>Home</Menu.Item></Link>
        <Link to='/about'><Menu.Item active={pathname=== '/about'}>About</Menu.Item></Link>
        <Link to='/examples'><Menu.Item active={pathname=== '/examples'}>Examples</Menu.Item></Link>
        <Link to='/tests'><Menu.Item active={pathname=== '/tests'}>Tests</Menu.Item></Link>
        {getRightNav()}

      </Menu>
    </>

    // <NavContainer >
    //   <NavLink to='/'>Home</NavLink>
    //   <NavLink to='/examples'>Examples</NavLink>
    //   <NavLink to='/about'>About</NavLink>
    //   <NavLink to='/tests'>Tests</NavLink>
    // </NavContainer>
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