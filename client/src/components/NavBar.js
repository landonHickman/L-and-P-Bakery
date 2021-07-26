import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {
  Nav,
  Navbar,
  Container,
  Col,
  NavDropdown,
  Image,
} from "react-bootstrap";
import NavComponent from "./NavComponent";
import LNPW from "../images/LNPW.png";
import LNP from "../images/LNP.png";
import styled from "styled-components";
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

  // pasted from stackoverflow :(
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const getRightNav = () => {
    if (authenticated) {
      return (
        <>
          <Col style={{ padding: "0" }}>
            <NavDropdownText title={"Edit"} id="nav-dropdown">
              <NavDrop href="/editor1">Landing Page</NavDrop>
              <NavDrop href="/editor2">About Page</NavDrop>
              <NavDrop href="/editor3">Product Page</NavDrop>
              <NavDrop href="/createProduct">Create Product</NavDrop>
            </NavDropdownText>
          </Col>
          <Col
            // sm={{ span: "auto", offset: 2 }}
            // md={{ span: "auto", offset: 3 }}
            lg={{ span: "auto", offset: 3 }}
            xl={{ span: "auto", offset: 5 }}
            xxl={{ span: "auto", offset: 7 }}
            style={{ padding: "0" }}
          >
            <NavText
              style={{ color: "white" }}
              onClick={() => handleLogout(history)}
            >
              Logout
            </NavText>
          </Col>
        </>
      );
    }
  };

  const renderNavbar = () => {
    switch(window.location.pathname){
      case '/':
        return(<>
          <Navbar
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'flex-start',
              background:
                scrollState === "top" ? "transparent" : "rgba(0, 0, 0, 0.65)",
              transition: "0.75s ease",
            }}
            fixed="top"
            variant="light"
            expand="sm" 
          >
             <Navbar.Brand href="/">
            <Image
              src={LNPW}
              style={{height: "90px"}}
              roundedCircle
            />
          </Navbar.Brand>
            <Container fluid >
              <NavComponent getRightNav={getRightNav} />
            </Container>
          </Navbar>
        </>);
      default:
        return (
          <>
            <Navbar
              style={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "flex-start",
                background: "rgba(0, 0, 0, 0.75)",
              }}
              fixed="top"
              variant="light"
              expand="lg"
            >
              <Navbar.Brand href="/">
                <Image src={LNPW} style={{ height: "90px" }} roundedCircle />
              </Navbar.Brand>
              <Container fluid>
                <NavComponent getRightNav={getRightNav} />
              </Container>
            </Navbar>
          </>
        );
    }
  };

  //this is what is being returned by the NavBar function. if you want it to show up it needs to pass
  //through here eventually.
  return <>{renderNavbar()}</>;
};

export default NavBar;

const NavDrop = styled(NavDropdown.Item)`
  font-size: 1rem;
  font-weight: 500;
`;
const NavDropdownText = styled(NavDropdown)`
  font-size: 1.75rem;
  font-weight: 400;
`;
const NavText = styled(Nav.Link)`
  font-size: 1.75rem;
  font-weight: 400;
`;
