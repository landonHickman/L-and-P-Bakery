import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav, Col, Image, Navbar, Row } from "react-bootstrap";

const NavComponent = (props) => {
  const { getRightNav } = props;
  const [nav, setNav] = useState([]);

  useEffect(() => {
    getNav();
  }, []);

  const getNav = async () => {
    let res = await axios.get("/api/navbars");
    setNav(res.data);
  };

  const renderNav = () => {
    return nav.map((n) => {
      return (
        <div key={n.id}>
          <Row >
          <Navbar.Brand href="/">
            <Image style={{ height: "50px" }} src={n.nav_logo} roundedCircle />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link lg={2} href="/menu">{n.nav_text_1}</Nav.Link>
              <Nav.Link lg={2} href="/about_pages">{n.nav_text_2}</Nav.Link>
              <Nav.Link lg={2} href="/custom_cakes">{n.nav_text_3}</Nav.Link>
              {getRightNav()}
            </Nav>
          </Navbar.Collapse>
          </Row>
        </div>
      );
    });
  };

  return <>{renderNav()}</>;
};
export default NavComponent;
