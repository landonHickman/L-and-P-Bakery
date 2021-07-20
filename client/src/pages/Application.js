import React from "react";
import { Button, Form } from "react-bootstrap";
import Footer from "../components/Footer";

const Application = (props) => {
  return (
    <>
      <Form>
        <form
          action="mailto:cadelenglishthegenius@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <h1>Apply Now</h1>
          <p></p>
          <p></p>

          <Form.Group>
            <Form.Label for="examplefirst_name">First Name</Form.Label>
            <Form.Control
              type="first_name"
              name="First Name"
              id="examplefirst_name"
              placeholder="First Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label for="examplelast_name">Last Name</Form.Label>
            <Form.Control
              type="last_name"
              name="Last Name"
              id="examplelast_name"
              placeholder="Last Name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="exampleEmail">Email</Form.Label>
            <Form.Control
              type="email"
              name="Email"
              id="exampleEmail"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="examplephone_number">Phone Number</Form.Label>
            <Form.Control
              type="phone_number"
              name="Phone Number"
              id="examplephone_number"
              placeholder="Phone Number"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="exampleaddress">Address</Form.Label>
            <Form.Control
              type="address"
              name="Address"
              id="exampleaddress"
              placeholder="Address"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="examplecity">City</Form.Label>
            <Form.Control
              type="city"
              name="City"
              id="examplecity"
              placeholder="City"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="examplestate">State</Form.Label>
            <Form.Control
              type="state"
              name="State"
              id="examplestate"
              placeholder="State"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="examplezip">Zip</Form.Label>
            <Form.Control
              type="zip"
              name="Zip code"
              id="examplezip"
              placeholder="Zip"
            />
          </Form.Group>

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
