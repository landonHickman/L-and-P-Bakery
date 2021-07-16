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

      {/* special bakery items */}
        <div><LPSpecials/></div>

      {/* cakes */}
      <div className="container">
        <div className="row">
          <div style={styledDiv} className="col">
          <div class="text-center" style={{position:"relative", top:"30%"}}>
            <h1>{landingPage.grid_title_1}</h1>
            <p>{landingPage.grid_description_1}</p>
            </div>
        </div>
          <div style={styledDiv} className="col">
          <LPGrid1Carousel />
          </div>
      </div>
    </div>
      {/* boba */}
      <div className="container">
        <div className="row">
          <div style={styledDiv} className="col">
          <LPGrid2Carousel />
          </div>
          <div  style={styledDiv} className="col">
            <div class="text-center" style={{position:"relative", top:"30%"}}>
            <h1>{landingPage.grid_title_2}</h1>
            <p>{landingPage.grid_description_2}</p>
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
  );
};

export default LandingPage;

const styledDiv = {
  padding: '0px',
}