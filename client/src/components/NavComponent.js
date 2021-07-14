import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav, Col, Image, Navbar, Row } from "react-bootstrap";
// import LNP from '../images/LNP.png'
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
        <div key={n.id} style={{width: '100%'}}>
          <Row style={{display: 'flex'}}>
            <Navbar.Brand href="/">
              <Image
                src="https://i.imgur.com/ViaAZKy.jpg"
                style={{ height: "50px" }}
                thumbnail
                roundedCircle
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{display: 'flex', width: '100%'}}>
                <Col sm={'auto'} style={styles.pad}>
                  <Nav.Link href="/menu">{n.nav_text_1}</Nav.Link>
                </Col>
                <Col sm={'auto'} style={styles.pad}>
                  <Nav.Link href="/about_pages">{n.nav_text_2}</Nav.Link>
                </Col>
                <Col sm={'auto'} style={styles.pad}>
                  <Nav.Link href="/custom_cakes">{n.nav_text_3}</Nav.Link>
                </Col>
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

const styles= {
  pad: {
    padding: '0',
  }
}
export default NavComponent;
