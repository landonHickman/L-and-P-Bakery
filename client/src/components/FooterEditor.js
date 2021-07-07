import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const FooterEditor = () => {
  return (
    <>
    <h1>Footer</h1>
    <Form>
      <Form.Group>
          <Row>
            <Col>
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Address" />
            </Col>
            <Col>
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="City" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>State</Form.Label>
              <Form.Control placeholder="State" />
            </Col>
            <Col>
              <Form.Label>Zip</Form.Label>
              <Form.Control placeholder="Zip" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control placeholder="Phone Number" />
            </Col>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Social_media_logo_1</Form.Label>
              <Form.Control placeholder="Maybe use cloud pond or something else" />
            </Col>
            <Col>
              <Form.Label>Social Media Link 1</Form.Label>
              <Form.Control placeholder="Social Media Link 1" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Social_media_logo_2</Form.Label>
              <Form.Control placeholder="Maybe use cloud pond or something else" />
            </Col>
            <Col>
              <Form.Label>Social Media Link 2</Form.Label>
              <Form.Control placeholder="Social Media Link 2" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Social_media_logo_3</Form.Label>
              <Form.Control placeholder="Maybe use cloud pond or something else" />
            </Col>
            <Col>
              <Form.Label>Social Media Link 3</Form.Label>
              <Form.Control placeholder="Social Media Link 3" />
            </Col>
          </Row>
          
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
        </Form>
    </>
  )
}
export default FooterEditor