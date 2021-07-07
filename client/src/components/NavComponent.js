import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav, Col, Image, Navbar, Row } from "react-bootstrap";

const NavComponent = () => {
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
            <Nav style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
              <Col xs={2}>
                <Navbar.Brand href="/">
                    <Image src="https://i.imgur.com/ViaAZKy.jpg" thumbnail roundedCircle/>
                </Navbar.Brand>
              </Col>
              <Col xs={2}>
                <Nav.Link href="/">Home</Nav.Link>
              </Col>
              <Col xs={2}>
                <Nav.Link href="/menu">{n.nav_text_1}</Nav.Link>
              </Col>
              <Col xs={3}>
                <Nav.Link href="/about_pages">{n.nav_text_2}</Nav.Link>
              </Col>
              <Col xs={3}>
                <Nav.Link href="/custom_cakes">{n.nav_text_3}</Nav.Link>
              </Col>
            </Nav>
          </Row>
        </div>
      );
    });
  };

  return (
    <>
      {renderNav()}
    </>
  );
};
export default NavComponent;
