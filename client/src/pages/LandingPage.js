import React from 'react'
import { Card, Carousel } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div>
{/* header carousel */}
    <Carousel fade>
      <Carousel.Item>
    <img
      width="1200" 
      height="400"
      src="https://i.imgur.com/Qyc2UN3.jpeg"
      alt="Pastries fo dayzzz"
    />
    <Carousel.Caption>
        <h1>L & P Bakery Cafe</h1>
        <h3>We bake the dopest cakes. periodt.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width="1200" 
      height="400"
      src="https://i.imgur.com/akdoR7C.jpeg"
      alt="Cheese cake"
    />
    <Carousel.Caption>
      <h1>L & P Bakery Cafe</h1>
      <h3>We bake the dopest cakes. periodt.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width="1200" 
      height="400"
      src="https://i.imgur.com/UyOigK2.jpeg"
      alt="Parfaits"
    />
    <Carousel.Caption>
      <h1>L & P Bakery Cafe</h1>
      <h3>We bake the dopest cakes. periodt.</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

{/* special bakery items */}
    <h1 className="text-center">Special Bakery Items</h1>
    <div className="card-deck">
      <Card style={{display: 'flex'}}>
      <Card.Img src="https://i.imgur.com/bnDlaP2.jpeg" />
        <Card.Body>
          <Card.Title className="text-center">item</Card.Title>
          <Card.Text className="text-center">price</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{display: 'flex'}}>
      <Card.Img src="https://i.imgur.com/bnDlaP2.jpeg" />
        <Card.Body>
          <Card.Title className="text-center">item</Card.Title>
          <Card.Text className="text-center">price</Card.Text>
        </Card.Body>
      </Card>
    </div>
    
  </div>
  )
}

export default LandingPage