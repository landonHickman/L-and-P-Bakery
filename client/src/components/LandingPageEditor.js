import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { styles } from '../styles/styles'

const LandingPageEditor = () => {
  return (
    <>
      <div style={styles.LargePic}></div>
      <h1>Landing Page Editor</h1>
      <Form>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Main Title</Form.Label>
              <Form.Control placeholder="Main Title" />
            </Col>
            <Col>
              <Form.Label>Carousel Title</Form.Label>
              <Form.Control placeholder="Carousel Title" />
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

export default LandingPageEditor