import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const GridEditor2 = (props) => {
  const { landing } = props;
  const [title, setTitle] = useState(
    landing.grid_title_2 ? landing.grid_title_2 : ""
  );
  const [desc, setDesc] = useState(
    landing.grid_description_2 ? landing.grid_description_2 : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`/api/landing_pages/${landing.id}`, {
        grid_title_2: title,
        grid_description_2: desc,
      });
      console.log('update',res)
    } catch (err) {
      console.log("Inside handleSubmit catch", err);
      console.log("Inside handleSubmit catch", err.response);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
      <CustomCakeCarousel>Cakes</CustomCakeCarousel>
          <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map(() => (
            <Col>
            <Form.Group>
              <Form.Label>Grid Title 2</Form.Label>
              <Form.Control
                placeholder="Grid Title 2"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Label>Grid Description 2</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Grid Description 2"
                defaultValue={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Button variant="dark"  type="submit" block>
              Submit
            </Button>
            </Col>
            ))}
          </Row>
      </Form>
    </>
  );
};

export default GridEditor2;

const CustomCakeCarousel= styled.div`
font-size: 40px;
margin: 30px;
text-align: center;
margin-top: 50px
`;