import { React } from "react";
import { Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../components/Footer";
import { CustomCakeBtn,  FormBackground } from "../styles/styles";
import { EmptyDiv } from "../styles/styles";

const Application = (props) => {
  return (
    <>
    <EmptyDiv/>
      <Form style={{ margin: "0vh 11vw 9vh 11vw" }}>
        <form
          action="mailto:landpbakerycafe@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <br />
          <br />
          <br />
          <AppTitle>Apply Now!</AppTitle>
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
                style={FormBackground}
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
                style={FormBackground}
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
                style={FormBackground}
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
                style={FormBackground}
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
              style={FormBackground}
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
                style={FormBackground}
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
                style={FormBackground}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="">
              <Form.Label for="examplezip">Zip</Form.Label>
              <Form.Control
                type="zip"
                name="Zip code:"
                id="examplezip"
                placeholder="Zip"
                style={FormBackground}
              />
            </Form.Group>
          </Row>

          <Form.Group>
            <Form.Label for="exampleText">Best time to contact you</Form.Label>
            <Form.Control
              type="textarea"
              name="Best time to contact you"
              id="exampleText"
              style={FormBackground}
            />
          </Form.Group>

          <Form.Group tag="fieldset"></Form.Group>

          <CustomCakeBtn type="submit">
            Submit and Attach Resume Here
          </CustomCakeBtn>
        </form>
        <p></p>
      </Form>
      <Footer />
    </>
  );
};

export default Application;

const AppTitle = styled.h1`
  text-align: center;
  font-size: 3.25rem;
  font-weight: 500;

`
