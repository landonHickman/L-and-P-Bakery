import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Button, Card, Image} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import Footer from "../components/Footer";
import styled from "styled-components";

const AboutPages = () => {
  const [aboutPages, setAboutPages] = useState([])

  const history = useHistory();

  useEffect(()=>{
  getAboutPages()
  },[])

  const getAboutPages = async ()=>{
  try{
  let res = await axios.get(`/api/about_pages`)
  setAboutPages(res.data[0])
  }catch (err){
  alert('err check console')
  console.log(err)
  }
}

  return (
    <>
    <div>
      <div className="card-deck">
      {/* story */}
      <Card className="text-center"style={{display: 'flex', margin: "0rem", border: "none"}}>
        <Card.Body style={{marginTop: "7vw"}}>
          <StyledH1>{aboutPages.title}</StyledH1>
          <StyledH3>{aboutPages.text}</StyledH3>
        </Card.Body>
      </Card>
      {/* image */}
      <Card style={{display: 'flex', margin_left: "0vw", margin_right: "1vw", border: "none"}}>
        <Image src={aboutPages.image} />
      </Card>
      </div>
      {/* application cta */}
      <div style={{display: 'flex', margin: "0rem", border: "solid lightgray 1px"}}>
        <Card.Body className="text-center" style={{ marginLeft: "25vw", marginRight: "25vw", marginTop: "2vw", marginBottom: "2vw"}}>
          <StyledH2>{aboutPages.cta_title}</StyledH2>
          <Button variant="primary" onClick={() => history.push("/application")}>{aboutPages.cta_button_text}</Button>
        </Card.Body>
      </div>
    </div>
      <p></p>
       <Footer/> 
      </>
  );
};

export default AboutPages;

const StyledH1 = styled.h1`
 font-size:6vw;
`

const StyledH2 = styled.h2`
  font-size:3vw;
`

const StyledH3 = styled.h3`
 font-size:2vw;
`
