import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Carousel, Image, Navbar } from "react-bootstrap";
import Footer from "../components/Footer";
import LPGrid1Carousel from "../components/LPGrid1Carousel";
import LPGrid2Carousel from "../components/LPGrid2Carousel";
import LPSpecials from "../components/LPSpecials";

const LandingPage = () => {
  const [landingPage, setLandingPage] = useState([]);

  useEffect(() => {
    getLandingPage();
  }, []);

  const getLandingPage = async () => {
    try {
      let res = await axios.get(`/api/landing_pages`);
      setLandingPage(res.data[0]);
      console.log(res.data[0]);
    } catch (err) {
      console.log("err check console");
      console.log(err);
    }
  };
  return (
    <div>
      {/* header carousel */}
      <Navbar />
      <Carousel fade>
        <Carousel.Item>
          <Image
            style={{ width: 1200, height: 600 }}
            src="https://i.imgur.com/UyOigK2.jpeg"
          />

          <Carousel.Caption>
            <h1>{landingPage.main_title}</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            style={{ width: 1200, height: 600 }}
            src="https://i.imgur.com/PV8PNU5.jpeg"
          />
          <Carousel.Caption>
            <h1>{landingPage.main_title}</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            style={{ width: 1200, height: 600 }}
            src="https://i.imgur.com/K6r5cDV.jpeg"
          />

          <Carousel.Caption>
            <h1>{landingPage.main_title}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />

      {/* special bakery items */}
      <div>
        <LPSpecials />
      </div>

      <br />
      {/* cakes */}

      <Card>
        <Card.Body>
          <Card.Title>{landingPage.grid_title_1}</Card.Title>
          <Card.Text>{landingPage.grid_description_1}</Card.Text>
          <LPGrid1Carousel />
        </Card.Body>
      </Card>
<br/>
      {/* boba */}
      <Card>
        <Card.Body>
          <Card.Title>{landingPage.grid_title_2}</Card.Title>
          <Card.Text>{landingPage.grid_description_2}</Card.Text>
          <LPGrid2Carousel/>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
};

export default LandingPage;
