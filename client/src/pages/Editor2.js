import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { styles } from "../styles/styles";
import axios from "axios";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Editor2 = ({ history }) => {
  const [files, setFiles] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [cta_title, setCtaTitle] = useState("");
  const [cta_button, setCtaButton] = useState("");
  const [about, setAbout] = useState([]);

  useEffect(() => {
    getAboutPages();
  }, []);

  const getAboutPages = async () => {
    let res = await axios.get("/api/about_pages");
    setAbout(res.data[0]);
    console.log('About res.data',res.data[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (files.length >= 1) {
        let data = new FormData();
        data.append("fileHere", files[0].file);
        let res1 = await axios.post("/api/images/upload", data);
        var img = res1.data.cloud_image.secure_url;
      }
      let res = await axios.put(`/api/about_pages/${about.id}`, {
        title,
        text,
        image: img,
        cta_title,
        cta_button,
      });
      console.log("update", res.data);
    } catch (err) {
      console.log("inside catch", err);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Group widths="equals" />
          <Row>
            <Col>
              <Form.Label>Main Title</Form.Label>
              <Form.Control
                placeholder="Main Title"
                defaultValue={about.title ? about.title : ""}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <Form.Label>Description Text</Form.Label>
              <Form.Control
                placeholder="Description"
                as="textarea"
                rows={6}
                defaultValue={about.text ? about.text : ""}
                onChange={(e) => setText(e.target.value)}
                required
              />
            </Col>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <FilePond
                  files={about.image ? about.image : files}
                  allowReorder={true}
                  allowMultiple={false}
                  onupdatefiles={setFiles}
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Call to Action Title</Form.Label>
              <Form.Control
                placeholder="Call to Action Title"
                as="textarea"
                rows={2}
                defaultValue={about.cta_title ? about.cta_title : ""}
                onChange={(e) => setCtaTitle(e.target.value)}
                required
              />
              <Form.Label>Call to Action Button Text</Form.Label>
              <Form.Control
                placeholder="Call to Action Button Text"
                defaultValue={about.cta_button_text ? about.cta_button_text : ""}
                onChange={(e) => setCtaButton(e.target.value)}
                required
              />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
        <br />
        <br />
      </Form>
    </div>
  );
};
export default Editor2;
