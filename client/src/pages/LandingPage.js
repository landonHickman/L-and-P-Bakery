import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import LPGrid1Carousel from "../components/LPGrid1Carousel";
import LPGrid2Carousel from "../components/LPGrid2Carousel";
import LPGrid3Carousel from "../components/LPGrid3Carousel";
import LPSpecials from "../components/LPSpecials";
import styled from "styled-components";

const LandingPage = () => {
  const [landingPage, setLandingPage] = useState([]);

  useEffect(() => {
    getLandingPage();
  }, []);

  const getLandingPage = async () => {
    try {
      let res = await axios.get(`/api/landing_pages`);
      // console.log(res.data[0])
      setLandingPage(res.data[0]);
    } catch (err) {
      console.log("err check console");
      console.log(err);
    }
  };

  return (
    <>
      {/* header */}

      <CustomBackgroundImgdiv
        landingPageImage={landingPage.main_background_img}
      >
        <Headerdiv>
          <CustomLNPTitle>{landingPage.main_title}</CustomLNPTitle>
          <CustomLNPtext>Cakes| Drinks | Bakery</CustomLNPtext>
        </Headerdiv>
      </CustomBackgroundImgdiv>
      
            <CustomSBI>{landingPage.carousel_title}</CustomSBI>

      <Col>
        <div>
          <LPSpecials />
        </div>
      </Col>
      <br />

      {/* cakes */}
      <Row style={{ display: "flex", flexWrap: "wrap-reverse" }}>
        <CustomCakeCard md={6}>
          <CategoryTitle >{landingPage.grid_title_1}</CategoryTitle>
          <CategoryDesc>{landingPage.grid_description_1}</CategoryDesc>
        </CustomCakeCard>
        <Col style={styledDiv} md={6}>
          <LPGrid1Carousel />
        </Col>
      </Row>

      {/* Drinks */}
      <Row>
        <Col style={styledDiv} md={6}>
          <LPGrid2Carousel />
        </Col>
        <CustomBobaCard md={6}>
          <CategoryTitle>{landingPage.grid_title_2}</CategoryTitle>
          <CategoryDesc>{landingPage.grid_description_2}</CategoryDesc>
        </CustomBobaCard>
      </Row>

      {/* bakery */}
      <Row style={{ flexWrap: "wrap-reverse" }}>
        <CustomBakeryCard md={6}>
          <CategoryTitle>{landingPage.grid_title_3}</CategoryTitle>
          <CategoryDesc>{landingPage.grid_description_3}</CategoryDesc>
        </CustomBakeryCard>
        <Col style={styledDiv} md={6}>
          <LPGrid3Carousel />
        </Col>
      </Row>
      <br />
      <p></p>
      <Footer />
    </>
  );
};
export default LandingPage;

const styledDiv = {
  padding: "0px",
};

const CategoryTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 300;
`;
const CategoryDesc = styled.p`
  font-size: 1.25;
  font-weight: 400;
  padding: 14px;
`;

const CustomBackgroundImgdiv = styled.div`
  background-image: ${(props) => `url(${props.landingPageImage})`};
  background-repeat: no-repeat;
  background-size: 100%;
  height: 65vw;
  width: 100%;
`;

const Headerdiv = styled.div`
  width: 50%;
  margin: auto;
`;

const CustomLNPTitle = styled.div`
  text-align: center;
  color: white;
  width: 100%;
  font-size: 6.37rem;
  font-weight: 400;
  padding-top: 110px;
  @media (max-width: 768px) {
    font-size: 3.4rem;
    padding-top: 85px;
  }
`;

const CustomLNPtext = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 1.808);
  font-size: 4.25vh;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1.75rem;
  };
`;

const CustomSBI = styled.h1`
  font-size: 40px;
  margin: 10px;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 500;
`;

const CustomCakeCard = styled(Col)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 50px 0px;
`;

const CustomBobaCard = styled(Col)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 50px 0px;
`;

const CustomBakeryCard = styled(Col)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 50px 0px;
`;
