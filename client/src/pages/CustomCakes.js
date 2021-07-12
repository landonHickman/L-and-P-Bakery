import React from "react"
import {Form, Button} from 'react-bootstrap'
import Footer from '../components/Footer'

const CustomCakes = () => {
  return (
    
    <div>
      <div class="customcake">
   </div>
   <form action="mailto:cadelenglishthegenius@gmail.com" method="post" enctype="text/plain" className="text-center">
     
      <h1>Custom Cakes</h1>
      <p>Select custom cake options below:</p>

    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Cake Flavor</Form.Label>
    <Form.Control as="select">
      <option>Fruit</option>
      <option>Strawberry</option>
      <option>Tropical</option>
      <option>Napolean</option>
      <option>Peach</option>
      <option>Durian</option>
      <option>Coffee</option>
      <option>Choclate</option>
      <option>Tiramisu</option>
      <option>Cheescake</option>
      <option>Chestnut</option>
    </Form.Control>

      <Form.Label>Mousse Flavor</Form.Label>
      <Form.Control as="select">
        <option>Strawberry</option>
        <option>Mango</option>
        <option>Coffee</option>
        <option>Choclate</option>
        <option>None</option>
      </Form.Control>
  
    <Form.Label>Triangle Cake</Form.Label>
    <Form.Control as="select">
      <option>Vanilla</option>
      <option>Green Tea</option>
      <option>Taro</option>
      <option>Coffee</option>
      <option>Chocolate</option>
      <option>None</option>
    </Form.Control>

    <Form.Label> Cake Size</Form.Label>
      <Form.Control as="select">
        <option>6 inch</option>
        <option>10 inch</option>
        <option>Full sheet cake</option>
        <option>Custom size comment below</option>
        <option>None</option>
      </Form.Control>
    </Form.Group>
      
      <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Special order instructions</Form.Label>
      <Form.Control as="textarea" rows={2} />
    </Form.Group>

    <Button type="submit" >Submit form</Button>

      </form>
      <Footer/>
    </div>
  
  )}
   export default CustomCakes


