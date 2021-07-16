import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav, Col, Image, Navbar, Row } from "react-bootstrap";
import LNP from '../images/LNP.png'
import r from '../images/r.png'
import styled from 'styled-components'
import { left } from "@popperjs/core";

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
        
        <div key={n.id} style={{width: '100%', background:'none' }}>
          <Row style={{display: 'flex'}} >
            <Navbar.Brand href="/">
              <Image
                src={LNP}
                style={{ height: "90px" }}
                roundedCircle
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{display: 'flex', width: '100%', }} >
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
        
         <CustomBackgroundImgdiv>
        <CustomLNPTitle>L&P</CustomLNPTitle>
              <CustomLNPBakery>Bakery</CustomLNPBakery>
              <CustomLNPtext>Cakes| Boba | Bakery</CustomLNPtext>
        </CustomBackgroundImgdiv>
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

const CustomHeaderTabs = styled.div`
font-size: 75px;
text-align: center;
color: white;
padding-top: 90px;
`;

const CustomBackgroundImgdiv = styled.div`
  background-image: url(${r});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 650px;
  width: 100%;
  padding-top: 30px;
`;

const CustomLNPTitle = styled.div`
font-size: 75px;
text-align: center;
color: white;
padding-top: 90px;
`;

const CustomLNPBakery = styled.div`
font-size: 75px;
text-align: center;
color: white;
margin-top: -30px
`;

const CustomLNPtext = styled.div`
font-size: 35px;
text-align: center;
color: white;
margin-top:10px
`;
