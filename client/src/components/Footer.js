import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Image, Nav, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Footer = () => {
  const [footer, setFooter] = useState([]);
  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    axiosCalls();
  }, []);

  const axiosCalls = async () => {
    try {
      let res = await axios.get("/api/footers");
      setFooter(res.data);
      let res1 = await axios.get("/api/navbars");
      setNavbar(res1.data);
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };

  const renderAddress = () => {
    return footer.map((f) => {
      return (
        <div key={f.id}>
          <CityState>
            {f.city}, {f.state}
          </CityState>
          <FooterText>{f.phone_number}</FooterText>
          <FooterText>{f.email}</FooterText>
          <FooterText>
            {f.address} {f.city},
          </FooterText>
          <FooterText>
            {f.state} {f.zip}
          </FooterText>
        </div>
      );
    });
  };

  const renderNav = () => {
    return navbar.map((n) => {
      return (
        <div
          key={n.id}
          style={styles.flexColumn}
        >
          <Nav.Link style={styles.pad} href="/menu">
            <NavText>
              {n.nav_text_1}
            </NavText>
          </Nav.Link>
          <Nav.Link style={styles.pad} href="/about_pages">
            <NavText>
              {n.nav_text_2}
            </NavText>
          </Nav.Link>
          <Nav.Link style={styles.pad} href="/custom_cakes">
            <NavText>
              {n.nav_text_3}
            </NavText>
          </Nav.Link>
        </div>
      );
    });
  };

  const renderSocialLinks = () => {
    return footer.map((f) => {
      return (
        <React.Fragment key={f.id}>
          <Row
            style={styles.wrapReverse}
          >
            <Col md={{ span: 5, offset: 4 }}>
              <FooterText style={{ textAlign: "center", margin: "0" }}>
                ©2021 DevPoint Studios All rights reserved
              </FooterText>
            </Col>
            <Col md={3} style={{ display: "flex", justifyContent: "center" }}>
              <Nav.Link
                href={f.social_media_url_1}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  style={styles.imgHeight}
                  src={f.social_media_logo_1}
                  rounded
                />
              </Nav.Link>
              <Nav.Link
                href={f.social_media_url_2}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  style={styles.imgHeight}
                  src={f.social_media_logo_2}
                  rounded
                />
              </Nav.Link>
              <Nav.Link
                href={f.social_media_url_3}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  style={styles.imgHeight}
                  src={f.social_media_logo_3}
                  rounded
                />
              </Nav.Link>
            </Col>
          </Row>
        </React.Fragment>
      );
    });
  };

  return (
    <Container fluid style={{padding: '0px 30px 20px 30px'}}>
      <Row style={styles.wrapReverse}>
        <Col md={6}>{renderAddress()}</Col>
        <Col md={{ span: 3, offset: 3 }} style={{ display: "flex" }}>
          {renderNav()}
        </Col>
      </Row>
      {renderSocialLinks()}
    </Container>
  );
};

const CityState = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
`
const FooterText = styled.p`
  font-size: 1rem;
  font-weight: 400;
`

const NavText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: black;
  :hover {
    color: #007bff;
  }
`


const styles = {
  brd: {
    border: "1px solid black",
    padding: '20px',
  },
  wrapReverse: {
    display: "flex",
    flexWrap: "wrap-reverse",
    justifyContent: "center",
    alignItems: 'center',
  },
  imgHeight: { 
    height: "17px", 
  },
  pad: {
    padding: '0', 
    paddingBottom: '5px'
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }
};

export default Footer;

