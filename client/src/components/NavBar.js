import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Nav, Navbar, Container, Col, NavDropdown } from "react-bootstrap";
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
          <NavDropdown title="Edit" id="basic-nav-dropdown">
            <NavDropdown.Item href="/editor1">Landing Page</NavDropdown.Item>
            <NavDropdown.Item href="/editor2">About Page</NavDropdown.Item>
            <NavDropdown.Item href="/editor3">Product Page</NavDropdown.Item>
            <NavDropdown.Item href="/createProduct">Create Product</NavDropdown.Item>
          </NavDropdown>
          <Col
            sm={{ span: "auto", offset: 2 }}
            md={{ span: "auto", offset: 5 }}
            lg={{ span: "auto", offset: 7 }}
            xl={{ span: 2, offset: 9 }}
            xxl={{ span: "auto", offset: 9 }}
            style={{ padding: "0" }}
          >
            <Nav.Link
              style={{ justifyContent: "flex-end" }}
              onClick={() => handleLogout(history)}
            >
              Logout
            </Nav.Link>
          </Col>
        </>
      );
    }
  };

  //this is what is being returned by the NavBar function. if you want it to show up it needs to pass
  //through here eventually.
  return (
    <>
      <Navbar bg="light" variant="light" expand="sm">
        <Container fluid>
          <NavComponent getRightNav={getRightNav} />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
