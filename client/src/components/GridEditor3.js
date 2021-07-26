import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { FormBackground } from "../styles/styles";
import { btn } from "../styles/styles";

const GridEditor3 = (props) => {
  const { landing } = props;
  const [title, setTitle] = useState(
    landing.grid_title_3 ? landing.grid_title_3 : ""
  );
  const [desc, setDesc] = useState(
    landing.grid_description_3 ? landing.grid_description_3 : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`/api/landing_pages/${landing.id}`, {
        grid_title_3: title,
        grid_description_3: desc,
      });
      console.log('update',res)
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
          <CustomBakeryCarousel>Bakery</CustomBakeryCarousel>
            <Form.Group>
              <Form.Label>Grid Title 3</Form.Label>
              <Form.Control
                placeholder="Grid Title 3"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
                style={FormBackground}
              />
              <Form.Label>Grid Description 3</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Grid Description 3"
                defaultValue={desc}
                onChange={(e) => setDesc(e.target.value)}
                style={FormBackground}
              />
            </Form.Group>
            <Button style={ btn.blackButton }  type="submit" block>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default GridEditor3;

const CustomBakeryCarousel= styled.div`
font-size: 3.25rem;
font-weight: 500;
margin: 30px;
text-align: center;
margin-top: 50px
`;