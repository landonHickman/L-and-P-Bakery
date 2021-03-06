import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Button, Card, Image} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import Footer from "../components/Footer";
import styled from "styled-components";
import { EmptyDiv, } from "../styles/styles";
import {btn} from "../styles/styles"

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
  console.log(err)
  }
}

  return (
    <>
    <EmptyDiv/>
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
      <Card style={{display: 'flex', margin: '0px', border: "none", padding: '0px', }}>
        <Image src={aboutPages.image} />
      </Card>
      </div>
      {/* application cta */}
      <div style={{display: 'flex', margin: "0px", border: "solid lightgray 1px",}}>
        <Card.Body className="text-center" style={{ marginLeft: "16vw", marginRight: "16vw", marginTop: "2vw", marginBottom: "2vw"}}>
          <StyledH2>{aboutPages.cta_title}</StyledH2>
          <Button style={btn.blackButton} onClick={() => history.push("/application")}>{aboutPages.cta_button_text}</Button>
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
 font-size: 3.25rem;
 font-weight: 500;
`

const StyledH2 = styled.p`
  font-size: 3.25rem;
  font-weight: 500
`

const StyledH3 = styled.p`
 font-size: 1.25rem;
 font-weight: 400;
`
