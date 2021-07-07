import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { styles } from '../styles/styles'

const GridEditor2 = () => {
  return (
    <>
      <Form>
      <Row>
          <Col>
            <div style={styles.SmallPic}></div>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Grid Title 2</Form.Label>
              <Form.Control placeholder="Grid Title 2" />
              <Form.Label>Grid Description 2</Form.Label>
              <Form.Control placeholder="Grid Description 2" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default GridEditor2