import { React, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

const Application = (props) => {

  return (
    <>
      <Form
        style={{ padding: "40px" }}
      >
        <form
          action="mailto:cadelenglishthegenius@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <br />
          <br />
          <br />

          <h1 style={{ textAlign: "center" }}>Apply Now!</h1>
          <br />

          <Row className="firstAndLastName">
            <Form.Group as={Col} controlId="applicantFirstName">
              <Form.Label for="examplefirst_name">First Name</Form.Label>
              <Form.Control
                required
                type="first_name"
                name="First Name:"
                id="examplefirst_name"
                placeholder="First Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="applicantLastName">
              <Form.Label for="examplelast_name">Last Name</Form.Label>
              <Form.Control
                required
                type="last_name"
                name="Last Name:"
                id="examplelast_name"
                placeholder="Last Name"
              />
            </Form.Group>
          </Row>

          <Row className="emailAndPhone">
            <Form.Group as={Col} controlId="applicantEmail">
              <Form.Label for="exampleEmail">Email</Form.Label>
              <Form.Control
                type="email"
                name="Email:"
                id="exampleEmail"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="applicantPhone">
              <Form.Label for="examplephone_number">Phone Number</Form.Label>
              <Form.Control
                required
                type="phone_number"
                name="Phone Number:"
                id="examplephone_number"
                placeholder="Phone Number"
              />
            </Form.Group>
          </Row>

          <Form.Group>
            <Form.Label for="exampleaddress">Address</Form.Label>
            <Form.Control
              required
              type="address"
              name="Address"
              id="exampleaddress"
              placeholder="Address"
            />
          </Form.Group>

          <Row>
            <Form.Group as={Col} controlId="applicantCity">
              <Form.Label for="examplecity">City</Form.Label>
              <Form.Control
                required
                type="city"
                name="City:"
                id="examplecity"
                placeholder="City"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="">
              <Form.Label for="examplestate">State</Form.Label>
              <Form.Control
                required
                type="state"
                name="State:"
                id="examplestate"
                placeholder="State"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="">
              <Form.Label for="examplezip">Zip</Form.Label>
              <Form.Control
                type="zip"
                name="Zip code:"
                id="examplezip"
                placeholder="Zip"
              />
            </Form.Group>
          </Row>

          <Form.Group>
            <Form.Label for="exampleText">Best time to contact you</Form.Label>
            <Form.Control
              type="textarea"
              name="Best time to contact you"
              id="exampleText"
            />
          </Form.Group>

          <Form.Group tag="fieldset"></Form.Group>
          <Button type="submit">Submit and Attach Resume Here</Button>
        </form>
        <p></p>
      </Form>
      <Footer />
    </>
  );
};

export default Application;
