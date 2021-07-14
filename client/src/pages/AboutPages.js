import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Button, Card, Image} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import Footer from "../components/Footer";
// import Footer from "./src/components/footer.js"

// get about page info
// about us container left then carousel right
//followed by a full width box under
//that contains "we are always looking for.... etc"
//and a link to the application
//import footer.

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
    <Card className="text-center"style={{display: 'flex'}}>
      <Card.Body>
        <h1>{aboutPages.title}</h1>
        <Card.Text>
          <h3>{aboutPages.text}</h3>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card>
      <Image src="https://i.imgur.com/0jOBZtn.jpeg" fluid />
    </Card>
    </div>
    <Card className="text-center">
      <Card.Body>
        <h1>{aboutPages.cta_title}</h1>
        <Button variant="primary" onClick={() => history.push("/application") }>{aboutPages.cta_button_text}</Button>
      </Card.Body>
    </Card>
      </div>
       <Footer/> 
      </>
  );
};

export default AboutPages;
