import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { styles } from "../styles/styles";


const Editor2 = () => {
  return (
    <div>
        <Form>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Main Title</Form.Label>
              <Form.Control placeholder="Main Title" />
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Description" as="textarea" rows={4}/>
            </Col>
            <Col>
              <div style={styles.SmallPic}></div>
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
        </Form>
        <Form style={{display: 'flex', flexDirection: 'column'}}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Call to Action Title</Form.Label>
              <Form.Control placeholder="Call to Action Title" />
              <Form.Label>Call to Action Button Text</Form.Label>
              <Form.Control placeholder="Call to Action Button Text"/>
            
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit" style={{textAlign: 'center'}}>
          Submit
        </Button>
        </Form>
    </div>
  );
};



export default Editor2;