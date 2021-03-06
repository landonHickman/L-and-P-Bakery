import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../components/Footer";
import { CustomCakeBtn, CustomCakesForm } from "../styles/styles";
// import btn from "../styles"

const CustomCakes = () => {
  return (
    <>
      <div className="customcake" />
      <div>
        <Form
          style={{ margin: "0vh 11vw 9vh 11vw" }}
          action="mailto:landpbakerycafe@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <CakeTitle>Custom Cakes</CakeTitle>
          <CakeText>Fill out the form below for a custom cake request</CakeText>

          <Row>
            <Col md={6}>
              <Form.Label>
                {" "}
                Cake Size (How many people are you planning to serve?)
              </Form.Label>
              <Form.Control
                as="select"
                name="Cake Size (How many people are you planning to serve?)"
                style={CustomCakesForm}
              >
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
              <Form.Label>Name</Form.Label>
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Email"
                type="email"
                name="Email"
                id="email"
                style={CustomCakesForm}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Phone Number</Form.Label>
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
              <Form.Label>Requested Pickup Date</Form.Label>
              <Form.Control
                placeholder="Requested Pickup Date"
                type="date"
                name="Requested Pickup Date"
                id="date"
                style={CustomCakesForm}
              />
            </Col>
            <Col md={6}>
              <p style={{ margin: "0px" }}>
                Requested Dates are not guaranteed until confirmed by bakery.
              </p>
            </Col>
          </Row>
          <Form.Label>Type of Cake (Flavor, toppings, event)</Form.Label>
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
            <Col sm={{ span: 6, offset: 3 }} style={{ marginTop: "6vh" }}>
              <CustomCakeBtn type="submit">Submit</CustomCakeBtn>
            </Col>
          </Row>
        </Form>
      </div>
      <Footer />??
    </>
  );
};
export default CustomCakes;

const CakeTitle = styled.h1`
  margin-top: 4vh;
  font-size: 3.25rem;
  font-weight: 500;
  text-align: center;
`;
const CakeText = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 5vh;
  text-align: center;
`;
