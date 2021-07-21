import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { CustomCakeBtn, CustomCakesControl, CustomCakesForm, FormBackground } from "../styles/styles";
// import btn from "../styles"

const CustomCakes = () => {
  return (
    <>
      <div class="customcake"></div>
      <Form style={{ margin: "0vh 11vw 9vh 11vw" }}>
        <div>
          <form
            action="mailto:cadelenglishthegenius@gmail.com"
            method="post"
            enctype="text/plain"
            className="text-center"
          >
            <h1 style={{marginTop: '4vh'}}>Custom Cakes</h1>
            <p>Fill out the form below for a custom cake request</p>
              <Row style={{alignItems: 'flex-end'}}>
                <Col md={6}>
                  <Form.Label for="cake_size"> Cake Size (How many people are you planning to serve?)</Form.Label>
                  <Form.Control as="select" name="Cake Size (How many people are you planning to serve?)" style={CustomCakesForm}>
                    <option>20 Servings</option>
                    <option>18 Servings</option>
                    <option>16 Servings</option>
                    <option>14 Servings</option>
                    <option>12 Servings</option>
                    <option>10 Servings</option>
                    <option>8 Servings</option>
                    <option>6 Servings</option>
                    <option>4 Servings</option>
                  </Form.Control>
                </Col>
                <Col md={6}>
                <Form.Label for="name">
                Name
              </Form.Label>
              <Form.Control
                placeholder="Name"
                type="name"
                name="Name"
                id="name"
                style={CustomCakesForm}
                />
                </Col>
              </Row>
              <Row>
              <Col md={6}>
              <Form.Label for="email">
                Email
              </Form.Label>
              <Form.Control
              placeholder="Email"
              type="email"
              name="Email"
              id="email"
              style={CustomCakesForm}
              />
                </Col>
                <Col md={6}>
                <Form.Label for="phone_number">
                Phone Number
              </Form.Label>
              <Form.Control
              placeholder="Phone Number"
              type="phone_number"
              name="Phone Number"
              id="phone_number"
              style={CustomCakesForm}
              />
              </Col>
              </Row>
              <Row>
              <Col md={6}>
              <Form.Label for="date">
                Requested Pickup Date
              </Form.Label>
              <Form.Control
              placeholder="Requested Pickup Date"
              type="date"
              name="Requested Pickup Date"
              id="date"
              style={CustomCakesForm}
              />
              </Col>
              <Col md={6}>
              <p style={{padding: '20px 0px', margin: '0px'}}>Requested Dates are not guaranteed until confirmed by bakery.</p>             
              </Col>
              </Row>
              <Form.Label for="special_instructions">
                Type of Cake (Flavor, toppings, event)
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Type your cake request here..."
                type="special_instructions"
                name="Type of Cake (Flavor, toppings, event)"
                id="special_instructions"
                style={CustomCakesForm}
              />

            <Row>
              <Col sm={{ span: 6, offset: 3 }} style={{marginTop: '6vh'}}>
                <CustomCakeBtn type="submit">Submit</CustomCakeBtn>
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
