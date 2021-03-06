import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { FormBackground } from "../styles/styles";
import { btn } from "../styles/styles";


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
      // console.log('update',res)
    } catch (err) {
      console.log("Inside handleSubmit catch", err);
      console.log("Inside handleSubmit catch", err.response);
    }
  };

  return (
    <>
      <Form style={{ margin: "0vh 11vw 0vh 11vw" }} onSubmit={handleSubmit}>
        <Row>
            <Col>
            <CustomBobaCarousel>Drinks</CustomBobaCarousel>
            <Form.Group>
              <Form.Label>Grid Title 2</Form.Label>
              <Form.Control
                placeholder="Grid Title 2"
                defaultValue={title2}
                onChange={(e) => setTitle2(e.target.value)}
                style={FormBackground}
              />
              <Form.Label>Grid Description 2</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Grid Description 2"
                defaultValue={desc2}
                onChange={(e) => setDesc2(e.target.value)}
                style={FormBackground}
              />
            </Form.Group>
            <Button style={ btn.blackButton } type="submit" block>
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
font-size: 3.25rem;
font-weight: 500;
margin: 30px;
text-align: center;
margin-top: 50px
`;