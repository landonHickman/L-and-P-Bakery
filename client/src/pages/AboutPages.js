import React, { useEffect, useState } from "react";
import axios from 'axios';

// get about page info
// about us container left then carousel right
//followed by a full width box under
//that contains "we are always looking for.... etc"
//and a link to the application
//import footer.
const AboutPages = () => {
  //const [aboutPages, setAboutPages] = useState([])
  //useEffect(()=>{
  //getAboutPages()
  //},[])
  //const getAboutPages = async ()=>{
  //try{
  //let res = await axios.get(`/api/aboutPages`)
  //setAboutPages(res.data)
  //}catch (err){
  //alert('err check console')
  //console.log(err)
  //}
//}
  return (
    <div>
      <h1>About Us</h1>
    </div>
    //   <Card style={{ width: '35rem',
    //                  height: '35rem',
    //                  padding: '12rem',
    //                  background: 'lightblue',
    //                  position: 'left'}}>
      //   <Card.Body>
      //     <Card.Title>About Us</Card.Title>
      //     <Card.Subtitle className="mb-2 text-muted">L & P Bakery</Card.Subtitle>
      //     <Card.Text>
      //       Stuff about the bakery.
      //     </Card.Text>
      //   </Card.Body>
      // </Card>
    // <Carousel>
    //   <Carousel.Item style={{height:'35rem',
    //                          width:'35rem',
    //                          background:'lightblue',
    //                          position:'right'}}>
    //     put image here
    //     <Carousel.Caption>
    //       <h1>About Us</h1>
    //       <h3>L & P Bakery</h3>
    //       <p>It's me, ya boy.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    // <Card style={{ width: '50rem' }}>
    //   <Card.Body>
    //     <Card.Title>Apply Now!</Card.Title>
    //     <Card.Text>
    //       At L & P Bakery Cafe, we're always looking for talented individuals to join our team!
    //     </Card.Text>
    //     <Button variant="primary">Apply Here!</Button>
    //   </Card.Body>
    // </Card>
  );
  //import footer
};

export default AboutPages;
