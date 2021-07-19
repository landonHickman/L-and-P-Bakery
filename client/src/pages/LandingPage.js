import axios from "axios";
import React, { useEffect, useState } from "react";
import {Col} from "react-bootstrap";
import Footer from "../components/Footer";
import LPGrid1Carousel from "../components/LPGrid1Carousel";
import LPGrid2Carousel from "../components/LPGrid2Carousel";
import LPGrid3Carousel from "../components/LPGrid3Carousel";
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
          <div style={styledDiv} className="col">
            <div
              class="text-center"
              style={{ position: "relative", top: "30%" }}
            >
              <h1>{landingPage.grid_title_2}</h1>
              <p>{landingPage.grid_description_2}</p>
            </div>
          </div>
        </div>
      </div>
            {/* bakery */}
      <div className="container">
        <div className="row">
          <div style={styledDiv} className="col">
            <div
              class="text-center"
              style={{ position: "relative", top: "30%" }}
            >
              <h1>{landingPage.grid_title_3}</h1>
              <p>{landingPage.grid_description_3}</p>
            </div>
          </div>
          <div style={styledDiv} className="col">
            <LPGrid3Carousel />
          </div>
        </div>
      </div>
      <br/>
      <Footer />
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
  margin-top: -30px;
`;

const CustomLNPtext = styled.div`
  font-size: 35px;
  text-align: center;
  color: white;
  margin-top: 10px;
`;

const CustomSBI = styled.div`
  font-size: 40px;
  margin: 30px;
  text-align: center;
  margin-top: -40px;
`;

const CustomCakeCard = styled.div`
  font-size: 55px;
  text-align: center;
  margin-top: 10px;
`;

const CustomCakeText = styled.div`
  font-size: 18px;
  text-align: center;
`;

const CustomBobaCard = styled.div`
  font-size: 55px;
  text-align: center;
  margin-top: 10px;
`;
const CustomBobaText = styled.div`
  font-size: 18px;
  text-align: center;
`;

const CustomBakeryCard = styled.div`
  font-size: 55px;
  text-align: center;
  margin-top: 10px;
`;
const CustomBakeryText = styled.div`
  font-size: 18px;
  text-align: center;
`;
