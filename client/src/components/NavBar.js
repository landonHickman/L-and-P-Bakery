import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Nav, Navbar, Container, Col, NavDropdown, Image } from "react-bootstrap";
import NavComponent from "./NavComponent";
import LNPW from "../images/LNPW.png";
import LNP from "../images/LNP.png";
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
          <NavDropdown title={"Edit"} id="nav-dropdown">
            <NavDropdown.Item href="/editor1">Landing Page</NavDropdown.Item>
            <NavDropdown.Item href="/editor2">About Page</NavDropdown.Item>
            <NavDropdown.Item href="/editor3">Product Page</NavDropdown.Item>
            <NavDropdown.Item href="/createProduct">
              Create Product
            </NavDropdown.Item>
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
              style={{ justifyContent: "flex-end", color: "white" }}
              onClick={() => handleLogout(history)}
            >
              Logout
            </Nav.Link>
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
            style={{
              logo:
                scrollState === "top" ? "transparent" : "rgba(0, 0, 0, 0.65)",
              transition: "0.75s ease",
            }}
            src={LNP}
            style={{height: "90px"}}
            roundedCircle
            />
            </Navbar.Brand>
            <Container fluid>
              <NavComponent getRightNav={getRightNav} />
            </Container>
          </Navbar>
        </>);
      default:
        return(<>
          <Navbar
            style={{
              background: "rgba(0, 0, 0, 0.75)",
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
            <Container fluid>
              <NavComponent getRightNav={getRightNav} />
            </Container>
          </Navbar>
        </>);
    }
  }



  //this is what is being returned by the NavBar function. if you want it to show up it needs to pass
  //through here eventually.
  return (
    <>
     {renderNavbar()}
    </>
  );
};

export default NavBar;
