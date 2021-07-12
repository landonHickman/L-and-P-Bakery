import React from "react";
import { Form, Button } from "react-bootstrap";
import Footer from "../components/Footer";

const CustomCakes = () => {
  return (
    <>
      <Form>
        <div>
          <div class="customcake"></div>

          <form
            action="mailto:cadelenglishthegenius@gmail.com"
            method="post"
            enctype="text/plain"
            className="text-center"
          >
            <h1>Custom Cakes</h1>
            <p>Select custom cake options below:</p>

            <Form.Group>
              <Form.Label for="flavor">Cake Flavor</Form.Label>
              <Form.Control as="select" id="flavor" name="Flavor:">
                <option>Fruit</option>
                <option>Strawberry</option>
                <option>Tropical</option>
                <option>Napolean</option>
                <option>Peach</option>
                <option>Durian</option>
                <option>Coffee</option>
                <option>Choclate</option>
                <option>Tiramisu</option>
                <option>Cheesecake</option>
                <option>Chestnut</option>
              </Form.Control>

              <Form.Label for="mousse">Mousse Flavor</Form.Label>
              <Form.Control as="select" name="Mousse Flavor:">
                <option>Strawberry</option>
                <option>Mango</option>
                <option>Coffee</option>
                <option>Choclate</option>
                <option>None</option>
              </Form.Control>

              <Form.Label for="triangle_cake">Triangle Cake</Form.Label>
              <Form.Control as="select" name="Triangle Cake:">
                <option>Vanilla</option>
                <option>Green Tea</option>
                <option>Taro</option>
                <option>Coffee</option>
                <option>Chocolate</option>
                <option>None</option>
              </Form.Control>

              <Form.Label for="cake_size"> Cake Size</Form.Label>
              <Form.Control as="select" name="Cake Size:">
                <option>6 inch</option>
                <option>10 inch</option>
                <option>Full sheet cake</option>
                <option>Custom size comment below</option>
                <option>None</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label for="special_instructions">
                Special order instructions
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                type="special_instructions"
                name="Special Instructions:"
                id="special_instructions"
              />
            </Form.Group>

            <Button type="submit">Submit Custom Order</Button>
          </form>
        </div>
      </Form>
      <Footer/> 
    </>
  );
};
export default CustomCakes;
