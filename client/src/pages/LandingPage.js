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
      {/* header */}
      <Navbar />
      <Card className="bg-dark text-white">
        <Card.Img src={landingPage.main_background_img} />
        <Card.ImgOverlay>
          <Card.Title>{landingPage.main_title}</Card.Title>
        </Card.ImgOverlay>
      </Card>

<br />

      {/* special bakery items */}
        <div><LPSpecials/></div>

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
{/* <br/>
      bakery
      <Card>
        <Card.Body>
          <Card.Title>{landingPage.grid_title_3}</Card.Title>
          <Card.Text>{landingPage.grid_description_3}</Card.Text>
          <LPGrid3Carousel/>
        </Card.Body>
      </Card> */}
<br/>
    <Footer />
  </div>
  );
};

export default LandingPage;
