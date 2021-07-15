import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Carousel, Image, Navbar, Row, Col, CardGroup} from "react-bootstrap";
import Footer from "../components/Footer";
import LPGrid1Carousel from "../components/LPGrid1Carousel";
import LPGrid2Carousel from "../components/LPGrid2Carousel";
import LPSpecials from "../components/LPSpecials";

const LandingPage = () => {
  const [landingPage, setLandingPage] = useState([]);
  const [specProduct, setSpecProducts] = useState([]);

  useEffect(() => {
    getLandingPage();
    getLPSpecials();
  }, []);

  const getLandingPage = async () => {
    try {
      let res = await axios.get(`/api/landing_pages`);
      setLandingPage(res.data[0]);
    } catch (err) {
      console.log("err check console");
      console.log(err);
    }
  };
    
    const getLPSpecials = async () => {
      try {
        let res = await axios.get(`/api/all_special_products`);
        setSpecProducts(res.data);
      } catch (err) {
        alert("err check console");
        console.log(err);
      }
    };

  return (
    <div style={{background: 'aliceblue'}}>
      {/* header */}
      <Card className="bg-dark text-white" >
        <Card.Img src={landingPage.main_background_img}/>
        <Card.ImgOverlay>
          <Card.Title>{landingPage.main_title}</Card.Title>
        </Card.ImgOverlay>
      </Card>

      {/* special bakery items */}
            <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col>
          <Card>
          <Card.Body>
              <div><LPSpecials/></div>
              </Card.Body>
              <Card.Title>
              {specProduct.name}
          </Card.Title>
          <Card.Text>
          {specProduct.price}
          </Card.Text>
            </Card>
          </Col>
      ))}
      </Row>
<br />

      {/* cakes */}
      <div className="card-deck">
        <Card>
          <Card.Body style={{background: 'lightgray', padding:'150px'}}>
            <Card.Title>{landingPage.grid_title_1}</Card.Title>
            <Card.Text>{landingPage.grid_description_1}</Card.Text>
          </Card.Body>
        </Card>
        <Card><LPGrid1Carousel /></Card>
      </div>

      {/* boba */}
      <div className="card-deck">
        <Card><LPGrid2Carousel /></Card>
        <Card>
          <Card.Body style={{background: 'lightgray', padding:'150px'}}>
            <Card.Title>{landingPage.grid_title_2}</Card.Title>
            <Card.Text>{landingPage.grid_description_2}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    <Footer />
  </div>
  );
};

export default LandingPage;
