import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Button, Card, Image} from "react-bootstrap";
// import Footer from "./src/components/footer.js"

// get about page info
// about us container left then carousel right
//followed by a full width box under
//that contains "we are always looking for.... etc"
//and a link to the application
//import footer.
const AboutPages = () => {
  const [aboutPages, setAboutPages] = useState([])
  useEffect(()=>{
  getAboutPages()
  },[])
  const getAboutPages = async ()=>{
  try{
  let res = await axios.get(`/api/about_pages`)
  setAboutPages(res.data)
  }catch (err){
  alert('err check console')
  console.log(err)
  }
}
  return (
    <div>
    <div className="card-deck">
    <Card className="text-center"style={{display: 'flex'}}>
      <Card.Body>
        <h1>Our Story</h1>
        <Card.Text>
          Loam Bakery started in 2010 as two friends searching for the perfect balance
          of flour, water, and salt. Loam Bakery now sells a daily selection of breads
          and pastries both online and in-store.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card>
      <Image src="https://i.imgur.com/0jOBZtn.jpeg" fluid />
    </Card>
    </div>
    <br/>
    <Card className="text-center">
      <Card.Body>
        <h1>Apply Now!</h1>
        <h3>
          At L & P Bakery Cafe, we're always looking for talented individuals to join our team!
        </h3>
        <Button variant="primary">Apply Here!</Button>
      </Card.Body>
    </Card>
      </div>
  );
  // <Footer/>
};

export default AboutPages;
