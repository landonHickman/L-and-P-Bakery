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
      <br/>
      <br/>

      <CustomSBI>Special Bakery Items</CustomSBI>
      <Col>
        <div>
          <LPSpecials />
        </div>
      </Col>
      <br />

      {/* cakes */}
        <div className="row">
          <CustomCakeCard className="col">
            <CustomCakeText
              class="text-center"
              style={{ position: "relative", top: "35%" }}
            >
              <h1>{landingPage.grid_title_1}</h1>
              <p>{landingPage.grid_description_1}</p>
            </CustomCakeText>
          </CustomCakeCard>
          <div style={styledDiv} className="col">
            <LPGrid1Carousel />
          </div>
        </div>

      {/* boba */}
        <div className="row">
          <div style={styledDiv} className="col">
            <LPGrid2Carousel />
          </div>
          <CustomBobaCard className="col">
            <CustomBobaText
              class="text-center"
              style={{ position: "relative", top: "35%" }}
            >
              <h1>{landingPage.grid_title_2}</h1>
              <p>{landingPage.grid_description_2}</p>
            </CustomBobaText>
          </CustomBobaCard>
        </div>

            {/* bakery */}
        <div className="row">
          <CustomBakeryCard className="col">
            <CustomBakeryText
              class="text-center"
              style={{position: "relative", top: "35%" }}
            >
              <h1>{landingPage.grid_title_3}</h1>
              <p>{landingPage.grid_description_3}</p>
            </CustomBakeryText>
          </CustomBakeryCard>
          <div style={styledDiv} className="col">
            <LPGrid3Carousel />
          </div>
        </div>
      <br/>
      <CustomFooter>
      <Footer />
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

const CustomCakeCard = styled.div`
  font-size: 55px;
  text-align: center;
  margin-top: 10px;
  padding: 0px;
`;

const CustomCakeText = styled.div`
  font-size: 18px;
  text-align: center;
`;

const CustomBobaCard = styled.div`
  font-size: 55px;
  text-align: center;
  margin-top: 10px;
  padding: 0px;
`;
const CustomBobaText = styled.div`
  font-size: 18px;
  text-align: center;
`;

const CustomBakeryCard = styled.div`
  font-size: 55px;
  text-align: center;
  margin-top: 10px;
  padding: 0px;
`;
const CustomBakeryText = styled.div`
  font-size: 18px;
  text-align: center;
`;

const CustomFooter = styled.div`
font-size: 1.5vw;
`;