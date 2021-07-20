import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Image, Nav, Col, Row } from "react-bootstrap";

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
      alert("err");
      console.log(err);
      console.log(err.response);
    }
  };

  const renderAddress = () => {
    return footer.map((f) => {
      return (
        <div key={f.id}>
          <h5>
            {f.city},{f.state}
          </h5>
          <p>{f.phone_number}</p>
          <p>{f.email}</p>
          <p>
            {f.address} {f.city},
          </p>
          <p>
            {f.state} {f.zip}
          </p>
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
            {n.nav_text_1}
          </Nav.Link>
          <Nav.Link style={styles.pad} href="/about_pages">
            {n.nav_text_2}
          </Nav.Link>
          <Nav.Link style={styles.pad} href="/custom_cakes">
            {n.nav_text_3}
          </Nav.Link>
        </div>
      );
    });
  };

  const renderSocialLinks = () => {
    return footer.map((f) => {
      return (
        <div key={f.id}>
          <Row
            style={styles.wrapReverse}
          >
            <Col md={{ span: 5, offset: 4 }}>
              <p style={{ textAlign: "center", margin: "0" }}>
                ©2021 DevPoint Studios All rights reserved
              </p>
            </Col>
            <Col
              md={3}
              style={{ display: "flex", justifyContent: "center"}}
            >
              <Nav.Link href={f.social_media_url_1}>
                <Image
                  style={styles.imgHeight}
                  src={f.social_media_logo_1}
                  rounded
                />
              </Nav.Link>
              <Nav.Link href={f.social_media_url_2}>
                <Image
                  style={styles.imgHeight}
                  src={f.social_media_logo_2}
                  rounded
                />
              </Nav.Link>
              <Nav.Link href={f.social_media_url_3}>
                <Image
                  style={styles.imgHeight}
                  src={f.social_media_logo_3}
                  rounded
                />
              </Nav.Link>
            </Col>
          </Row>
        </div>
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
      <div>{renderSocialLinks()}</div>
    </Container>
  );
};

const styles = {
  brd: {
    border: "1px solid black",
    padding: '10px',
  },
  wrapReverse: {
    display: "flex",
    flexWrap: "wrap-reverse",
    justifyContent: "center",
    alignItems: 'center',
  },
  imgHeight: { height: "25px", },
  pad: {padding: '0', paddingBottom: '5px'},
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }
};

export default Footer;
