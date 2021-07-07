import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { styles } from '../styles/styles'

const GridEditor1 = () => {
  return (
    <>
      <Form>
      <Row>
          <Col>
            <Form.Group>
              <Form.Label>Grid Title 1</Form.Label>
              <Form.Control placeholder="Grid Title 1" />
              <Form.Label>Grid Description 1</Form.Label>
              <Form.Control placeholder="Grid Description 1" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Col>
          <Col>
            <div style={styles.SmallPic}></div>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default GridEditor1