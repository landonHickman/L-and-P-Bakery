import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  //used to set which link is active
  const { pathname } = useLocation();
  //used to send to another link
  const history = useHistory();
  // authenticated used to see if user is logged in or not.
  // handleLogout logs user out
  const { authenticated, handleLogout } = useContext(AuthContext);
  // function to position to the right of navbar.
  // also has an if else to check for user to see what is needed to display.
  const getRightNav = () => {
    if(authenticated){
      return(

          <Nav className="me-auto">
            <Nav.Link onClick={()=>handleLogout(history)}>Logout</Nav.Link>
          </Nav>
        // <Menu.Menu position='right'>
        //   <Menu.Item onClick={()=>handleLogout(history)}>Logout</Menu.Item>
        // </Menu.Menu>
      )
    }else{
      return(
        
        <Nav className="me-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
        // <Menu.Menu position='right'>
        //   <Link to='/register'>
        //     <Menu.Item active={pathname=== '/register'}>Register</Menu.Item>
        //   </Link>
        //   <Link to='/login'>
        //     <Menu.Item active={pathname=== '/login'}>Login</Menu.Item>
        //   </Link>
        // </Menu.Menu>
      )
    }
  }

  //this is what is being returned by the NavBar function. if you want it to show up it needs to pass
  //through here eventually.
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/about_pages">About Us</Nav.Link>
            <Nav.Link href="/custom_cakes">Custom Cakes</Nav.Link>
            {getRightNav()}
          </Nav>
        </Container>
      </Navbar>
    </>

    //   <Navbar bg="light" variant="light">
    //   <Container>
    //   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //   <Nav className="me-auto">
    //     <Nav.Link href="#home">Home</Nav.Link>
    //     <Nav.Link href="#features">Features</Nav.Link>
    //     <Nav.Link href="#pricing">Pricing</Nav.Link>
    //   </Nav>
    //   </Container>
    // </Navbar>
  );
};

export default NavBar;
