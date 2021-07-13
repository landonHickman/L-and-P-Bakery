import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { styles } from "../styles/styles";

const GridEditor2 = (props) => {
  const { landing } = props;
  const [files, setFiles] = useState(
    landing.main_background_img ? landing.main_background_img : ""
  );
  const [title, setTitle] = useState(
    landing.grid_title_2 ? landing.grid_title_2 : ""
  );
  const [desc, setDesc] = useState(
    landing.grid_description_2 ? landing.grid_description_2 : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // if (files.length >= 1) {
      //   let data = new FormData();
      //   data.append("fileHere", files[0].file);
      //   let res1 = await axios.post("/api/images/upload", data);
      //   var img = res1.data.cloud_image.secure_url;
      // }
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
        <Row>
          <Col>
            <div style={styles.SmallPic}></div>
          </Col>
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
            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default GridEditor2;
