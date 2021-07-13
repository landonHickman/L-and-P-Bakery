import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { styles } from "../styles/styles";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from "axios";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const GridEditor1 = (props) => {
  const { landing } = props;
  const [files, setFiles] = useState(landing.main_background_img ? landing.main_background_img : "");
  const [title, setTitle] = useState(landing.grid_title_1 ? landing.grid_title_1 : "");
  const [desc, setDesc] = useState(landing.grid_description_1 ? landing.grid_description_1 : "");

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
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Grid Title 1</Form.Label>
              <Form.Control
                placeholder="Grid Title 1"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Label>Grid Description 1</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Grid Description 1"
                defaultValue={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
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
  );
};

export default GridEditor1;
