import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

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
      <Form style={{ margin: "0vh 11vw 9vh 11vw" }} onSubmit={handleSubmit}>
        <Row>
          <Col>
          <CustomBakeryCarousel>Bakery</CustomBakeryCarousel>
            <Form.Group>
              <Form.Label>Grid Title 3</Form.Label>
              <Form.Control
                placeholder="Grid Title 3"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Label>Grid Description 3</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Grid Description 3"
                defaultValue={desc}
                onChange={(e) => setDesc(e.target.value)}
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

export default GridEditor3;

const CustomBakeryCarousel= styled.div`
font-size: 40px;
margin: 30px;
text-align: center;
margin-top: 50px
`;