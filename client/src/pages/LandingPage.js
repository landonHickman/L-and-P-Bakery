import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardGroup,
  Carousel,
  Image,
  Navbar,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import Footer from "../components/Footer";
import LPGrid1Carousel from "../components/LPGrid1Carousel";
import LPGrid2Carousel from "../components/LPGrid2Carousel";
import LPSpecials from "../components/LPSpecials";
import styled from "styled-components";
import r from "../images/r.png";

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
    <>
      {/* header */}

      <CustomBackgroundImgdiv>
      <CustomLNPTitle>L&P</CustomLNPTitle>
        <CustomLNPBakery>Bakery</CustomLNPBakery>
        <CustomLNPtext>Cakes| Boba | Bakery</CustomLNPtext>
      </CustomBackgroundImgdiv>

      <CustomSBI>Special Bakery Items</CustomSBI>
      <Col>
        <div>
          <LPSpecials />
        </div>
      </Col>
      <br />

      {/* cakes */}
      <div className="container">
        <div className="row">
          <div style={styledDiv} className="col">
            <div
              class="text-center"
              style={{ position: "relative", top: "30%" }}
            >
              <CustomCake>{landingPage.grid_title_1}</CustomCake>
              <Customcake>{landingPage.grid_description_1}</Customcake>
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
          <div style={styledDiv} className="col">
            <div
              class="text-center"
              style={{ position: "relative", top: "30%",  }}
            >
              <CustomBoba>{landingPage.grid_title_2}</CustomBoba>
              <Customboba>{landingPage.grid_description_2}</Customboba>
            </div>
          </div>
        </div>
      </div>
      <p></p>
      <CustomFooter>
    <Footer/>
    </CustomFooter>
    </>
  );
};
export default LandingPage;

const styledDiv = {
  padding: "0px",
};
const CustomBackgroundImgdiv = styled.div`
  background-image: url(${r});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 60vw;
  width: 100%;
  padding-top: 180px;
    
`;

const CustomLNPTitle = styled.div`
  font-size: 75px;
  text-align: center;
  color: white;
  margin-top: -60px;
  padding: 50px;
  height: 100%px;
  width: 100%;
  font-size: 9vw;
`;

const CustomLNPBakery = styled.div`
  font-size: 75px;
  text-align: center;
  color: white;
  margin-top: -130px;
  padding: 60px;
  height: 100%px;
  width: 100%;
  font-size: 9vw;
`;

const CustomLNPtext = styled.div`
  font-size: 35px;
  text-align: center;
  color: rgba(255, 255, 255, 0.808);
  margin-top: -70px;
  font-size: 3vw;
`;

const CustomSBI = styled.div`
font-size: 40px;
margin: 55px;
text-align: center;
font-size: 4vw;
`;

const CustomBoba = styled.div`
margin: -20px
text-align: center;
font-size:4vw;
`;

const Customboba = styled.div`
text-align: center;
font-size: 2vw;
`;
const CustomCake = styled.div`
margin: -20px
text-align: center;
font-size:4vw;
`;

const Customcake = styled.div`
text-align: center;
font-size: 2vw;
`;

const CustomFooter = styled.div`
font-size: 1.5vw;
`;