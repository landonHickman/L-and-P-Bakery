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
      setLandingPage(res.data[0]);
    } catch (err) {
      console.log("err check console");
      console.log(err);
    }
  };

  return (
    <>
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
    <div style={{}}>

      {/* <CustomBackgroundImgdiv landingPage={landingPage}> 
        
      </CustomBackgroundImgdiv> */}


        <CustomSBI>Special Bakery Items</CustomSBI>
      <Col>
        <div>
          <LPSpecials />
        </div>
      </Col>
      <br />

      {/* cakes */}
      <CardGroup>
        <Card>
          <Card.Body style={{ background: "lightgray", padding: "180px" }}>
            <CustomCakeCard>{landingPage.grid_title_1}</CustomCakeCard>
            <p></p>
            <CustomCakeText>{landingPage.grid_description_1}</CustomCakeText>
          </Card.Body>
          </Card>
        <Card>
          <LPGrid1Carousel />
        </Card>
      </CardGroup>

      {/* boba */}
      <CardGroup>
        <Card>
        <LPGrid2Carousel />
        </Card>
        <Card>
          <Card.Body style={{ background: "lightgray", padding: "180px" }}>
            <CustomBobaCard>{landingPage.grid_title_2}</CustomBobaCard>
            <p></p>
            <CustomBobaText>{landingPage.grid_description_2}</CustomBobaText>
          </Card.Body>
        </Card>
        </CardGroup>

         {/* bakery */}
      <CardGroup>
        <Card>
          <Card.Body style={{ background: "lightgray", padding: "180px" }}>
            <CustomBakeryCard>Bakery {landingPage.grid_title_3}</CustomBakeryCard>
            <p></p>
            <CustomBakeryText>Ab repudiandae cumque. Asperiores adipisci aliquam. Sed eos eos. {landingPage.grid_title_3}</CustomBakeryText>
          </Card.Body>
          </Card>
        <Card>
          <LPGrid3Carousel />
        </Card>
      </CardGroup>
      <p></p>
      <Footer />
    </div>
    </>
  );
};
export default LandingPage;

const styledDiv = {
  padding: '0px',
}
const CustomBackgroundImgdiv = styled.div`
  background-image: url(${(props) => props.landingPage.main_background_img});
  background-repeat: no-repeat;
  background-size: 100% ;
  height: 700px;
  width: 100%;
`;

const CustomSBI = styled.div`
font-size: 40px;
margin: 60px;
text-align: center;
`;


const CustomCakeCard = styled.div`
font-size: 55px;
text-align: center;
margin-top:10px
`;

const CustomCakeText = styled.div`
font-size: 18px;
text-align: center;
`;

const CustomBobaCard = styled.div`
font-size: 55px;
text-align: center;
margin-top:10px
`;
const CustomBobaText = styled.div`
font-size: 18px;
text-align: center;
`;

const CustomBakeryCard = styled.div`
font-size: 55px;
text-align: center;
margin-top:10px
`;
const CustomBakeryText = styled.div`
font-size: 18px;
text-align: center;

`;
