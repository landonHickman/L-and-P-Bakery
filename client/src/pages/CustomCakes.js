import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { CustomCakeBtn } from "../styles/styles";
// import btn from "../styles"

const CustomCakes = () => {
  return (
    <>
      <div class="customcake"></div>
      <Form style={{ padding: "0px 150px 0px 150px" }}>
        <div>
          <form
            action="mailto:cadelenglishthegenius@gmail.com"
            method="post"
            enctype="text/plain"
            className="text-center"
          >
            <h1>Custom Cakes</h1>
            <p>Select custom cake options below:</p>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label for="flavor">Cake Flavor</Form.Label>
                  <Form.Control as="select" id="flavor" name="Flavor:">
                    <option>Choose Cake Flavor...</option>
                    <option>Fruit</option>
                    <option>Strawberry</option>
                    <option>Tropical</option>
                    <option>Neapolitan</option>
                    <option>Peach</option>
                    <option>Durian</option>
                    <option>Coffee</option>
                    <option>Chocolate</option>
                    <option>Tiramisu</option>
                    <option>Cheesecake</option>
                    <option>Chestnut</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label for="mousse">Mousse Flavor</Form.Label>
                  <Form.Control as="select" name="Mousse Flavor:">
                    <option>Choose mousse flavor...</option>
                    <option>Strawberry</option>
                    <option>Mango</option>
                    <option>Coffee</option>
                    <option>Chocolate</option>
                    <option>None</option>
                  </Form.Control>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label for="triangle_cake">Triangle Cake</Form.Label>
                  <Form.Control as="select" name="Triangle Cake:">
                    <option>Choose triangle cake flavor...</option>
                    <option>Vanilla</option>
                    <option>Green Tea</option>
                    <option>Taro</option>
                    <option>Coffee</option>
                    <option>Chocolate</option>
                    <option>None</option>
                  </Form.Control>
                </Col>

                <Col>
                  <Form.Label for="cake_size"> Cake Size</Form.Label>
                  <Form.Control as="select" name="Cake Size:">
                    <option>Choose cake size...</option>
                    <option>6 inch</option>
                    <option>10 inch</option>
                    <option>Full sheet cake</option>
                    <option>Custom size specify below</option>
                    <option>None</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Form.Label for="special_instructions">
                Special order instructions
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                type="special_instructions"
                name="Special Instructions:"
                id="special_instructions"
              />
            </Form.Group>
            <Row>
              <Col sm={{ span: 6, offset: 3 }}>
                <CustomCakeBtn type="submit">
                  Send Request
                </CustomCakeBtn>
              </Col>
            </Row>
          </form>
        </div>
      </Form>
      <Footer /> 
    </>
  );
};
export default CustomCakes;
