import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav, Col, Image, Navbar, Row } from "react-bootstrap";
import LNP from "../images/LNP.png";
import { left } from "@popperjs/core";
import styled from "styled-components";

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
      <div id="nav" key={nav.id} style={{ width: "100%",}} >
        <Row style={{ display: "flex" }}>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav color='white'style={{ display: "flex", width: "78%", margin: "0rem"}}>
              <Col sm={"auto"} style={styles.pad}>
                <NavLinkText style={{ color: "white" }} href="/menu">
                  {nav.nav_text_1}
                </NavLinkText>
              </Col>
              <Col sm={"auto"} style={styles.pad}>
                <NavLinkText style={{ color: "white" }} href="/about_pages">
                  {nav.nav_text_2}
                </NavLinkText>
              </Col>
              <Col sm={"auto"} style={styles.pad}>
                <NavLinkText style={{ color: "white" }} href="/custom_cakes">
                  {nav.nav_text_3}
                </NavLinkText>
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

const NavLinkText = styled(Nav.Link)`
  font-size: 1.75rem;
  font-weight: 400;
`
