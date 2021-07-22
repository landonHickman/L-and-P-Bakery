import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { FormBackground } from "../styles/styles";
import { btn } from "../styles/styles";

const GridEditor1 = (props) => {
  const { landing } = props;
  const [title, setTitle] = useState(landing.grid_title_1 ? landing.grid_title_1 : "");
  const [desc, setDesc] = useState(landing.grid_description_1 ? landing.grid_description_1 : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/landing_pages/${landing.id}`, {
      grid_title_1: title,
      grid_description_1: desc,
      });
      // console.log('update',res)
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
            <Form.Group>
              <CustomCakeCarousel>Cakes</CustomCakeCarousel>

              <Form.Label>Grid Title 1</Form.Label>
              <Form.Control
                placeholder="Grid Title 1"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
                style={FormBackground}
              />
              <Form.Label>Grid Description 1</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Grid Description 1"
                defaultValue={desc}
                onChange={(e) => setDesc(e.target.value)}
                style={FormBackground}
              />
            </Form.Group>
            <Button style={btn.blackButton} type="submit" block>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default GridEditor1;
const CustomCakeCarousel= styled.div`
font-size: 40px;
margin: 30px;
text-align: center;
margin-top: 50px
`;