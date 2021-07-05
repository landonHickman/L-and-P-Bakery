import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import NavComponent from "./NavComponent";

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
    if (authenticated) {
      return (
        <>
          <Col>
            <Nav.Link href="/editor">Editor</Nav.Link>
          </Col>
          <Col>
            <Nav.Link onClick={() => handleLogout(history)}>Logout</Nav.Link>
          </Col>
        </>
      );
    } else {
      return (
        <>
          <Col>
            <Nav.Link href="/register">Register</Nav.Link>
          </Col>
          <Col>
            <Nav.Link href="/login">Login</Nav.Link>
          </Col>
        </>
      );
    }
  };

  //this is what is being returned by the NavBar function. if you want it to show up it needs to pass
  //through here eventually.
  return (
    <>
      <Navbar bg="light" variant="light" style={{ display: "flex" }}>
        <Container fluid style={{flexWrap: 'wrap'}}>
          <NavComponent />
          <Row>
            <Nav style={{flexWrap: 'wrap'}}>{getRightNav()}</Nav>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
