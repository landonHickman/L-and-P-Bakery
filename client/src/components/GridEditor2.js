import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";


const GridEditor2 = (props) => {
  const { landing } = props;

  const [title2, setTitle2] = useState(
    landing.grid_title_2 ? landing.grid_title_2 : ""
  );
  const [desc2, setDesc2] = useState(
    landing.grid_description_2 ? landing.grid_description_2 : ""
  );
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`/api/landing_pages/${landing.id}`, {
        grid_title_2: title2,
       grid_description_2: desc2,
        
      });
      console.log('update',res)
    } catch (err) {
      console.log("Inside handleSubmit catch", err);
      console.log("Inside handleSubmit catch", err.response);
    }
  };

  return (
    <>
      <Form style={{ margin: "0vh 11vw 9vh 11vw" }} onSubmit={handleSubmit}>
        <Row>
            <Col>
            <CustomBobaCarousel>Boba</CustomBobaCarousel>
            <Form.Group>
              <Form.Label>Grid Title 2</Form.Label>
              <Form.Control
                placeholder="Grid Title 2"
                defaultValue={title2}
                onChange={(e) => setTitle2(e.target.value)}
              />
              <Form.Label>Grid Description 2</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Grid Description 2"
                defaultValue={desc2}
                onChange={(e) => setDesc2(e.target.value)}
              />
            </Form.Group>
            <Button variant="dark"  type="submit" block>
              Submit
            </Button>
            </Col>
          </Row>
      </Form>
    </>
  );
};

export default GridEditor2;

const CustomBobaCarousel= styled.div`
font-size: 40px;
margin: 30px;
text-align: center;
margin-top: 50px
`;