import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav, Col, Image, Navbar, Row } from "react-bootstrap";
import LNP from "../images/LNP.png";
import { left } from "@popperjs/core";

const NavComponent = (props) => {
  const { getRightNav } = props;
  const [nav, setNav] = useState([]);

  useEffect(() => {
    getNav();
  }, []);

  const getNav = async () => {
    let res = await axios.get("/api/navbars");
    console.log("nav axios", res.data[0]);
    setNav(res.data[0]);
  };

  const renderNav = () => {
    return (
      <div key={nav.id} style={{ width: "100%", background: "none"}} >
        <Row style={{ display: "flex" }}>
          <Navbar.Brand href="/">
            <Image
              src={LNP}
              style={{ height: "80px" }}
              roundedCircle
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ display: "flex", width: "80%" }}>
              <Col sm={"auto"} style={styles.pad}>
                <Nav.Link style={{ color: "white" }} href="/menu">
                  {nav.nav_text_1}
                </Nav.Link>
              </Col>
              <Col sm={"auto"} style={styles.pad}>
                <Nav.Link style={{ color: "white" }} href="/about_pages">
                  {nav.nav_text_2}
                </Nav.Link>
              </Col>
              <Col sm={"auto"} style={styles.pad}>
                <Nav.Link style={{ color: "white" }} href="/custom_cakes">
                  {nav.nav_text_3}
                </Nav.Link>
              </Col>
              {getRightNav()}
            </Nav>
          </Navbar.Collapse>
        </Row>
      </div>
    );
  };

  return <>{renderNav()}</>;
};

const styles = {
  pad: {
    padding: "0",
  },
};
export default NavComponent;
