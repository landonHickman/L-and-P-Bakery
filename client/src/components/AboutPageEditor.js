import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { btn, FormBackground } from "../styles/styles";
import { Form, Row, Col, Button} from "react-bootstrap";
import { EmptyDiv } from "../styles/styles";
import styled from "styled-components";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from 'axios';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const AboutPageEditor = (props) => {
  const history = useHistory()
  const {about}=props
  const [files, setFiles] = useState(about.image ? about.image : "");
  const [title, setTitle] = useState(about.title ? about.title : "");
  const [text, setText] = useState(about.text ? about.text : "");
  const [cta_title, setCtaTitle] = useState(about.cta_title ? about.cta_title : "");
  const [cta_button, setCtaButton] = useState(about.cta_button_text ? about.cta_button_text : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (files.length >= 1) {
        let data = new FormData();
        data.append("fileHere", files[0].file);
        let res1 = await axios.post("/api/images/upload", data);
        var img = res1.data.cloud_image.secure_url;
      }
      await axios.put(`/api/about_pages/${about.id}`, {
        title,
        text,
        image: img,
        cta_title,
        cta_button_text: cta_button,
      });
      history.push('/about_pages')
      // console.log("update", res.data);
    } catch (err) {
      console.log("inside catch", err);
    }
  };

  return (
    <React.Fragment>
      <EmptyDiv/>
      <Form onSubmit={handleSubmit}>
   
        <Form.Group style={{ margin: "0vh 7vw 4vh 4vw" }} >
          <Form.Group widths="equals" />
          <Row style={{alignItems: 'flex-end', wrap: 'wrap-reverse'}}>
            <Col style={{marginBottom: '16px'}} md={6}>
              <CustomOurstoryTitle>Our Story</CustomOurstoryTitle>
              <Form.Control
                placeholder="Main Title"
                // defaultValue={about.title ? about.title : ""}
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
                style={styles.inputMarginBottom}
                required
              />

              <Form.Label>Description Text</Form.Label>
              <Form.Control
                placeholder="Description"
                as="textarea"
                rows={6}
                // defaultValue={about.text ? about.text : ""}
                defaultValue={text}
                onChange={(e) => setText(e.target.value)}
                style={FormBackground}
                required
              />
            </Col>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <FilePond
                  // files={about.image ? about.image : files}
                  files={files}
                  style={{margin: '0px'}}
                  allowReorder={true}
                  allowMultiple={false}
                  onupdatefiles={setFiles}
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>

        <CustomCard style={{ margin: "0vh 0vw 4vh 0vw" }}>  
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Call to Action Title</Form.Label>
              <Form.Control
                placeholder="Call to Action Title"
                as="textarea"
                rows={2}
                // defaultValue={about.cta_title ? about.cta_title : ""}
                defaultValue={cta_title}
                onChange={(e) => setCtaTitle(e.target.value)}
                style={styles.inputMarginBottom}
                required
              />
              <Form.Label>Call to Action Button Text</Form.Label>
              <Form.Control
                placeholder="Call to Action Button Text"
                // defaultValue={about.cta_button_text ? about.cta_button_text : ""}
                defaultValue={cta_button}
                onChange={(e) => setCtaButton(e.target.value)}
                style={styles.ctaButtonText}
                required
              />
            </Col>
          </Row>
        </Form.Group>
        <Button style={btn.blackButton} type="submit" block>
          Submit
        </Button>
        </CustomCard>
        <br />
        <br />
      </Form>
    </React.Fragment>
  )
}
export default AboutPageEditor

const CustomOurstoryTitle = styled.div`
font-size: 3.25rem;
font-weight: 500;
margin-top: 50px
`;

const CustomCard = styled.div`
padding: 45px;
outline: 1px ridge rgba(0, 0, 0, 0.2);
border-radius: 2rem;
`;

const styles = {
  inputMarginBottom: {
    background: '#EEEEEE',
    border: '0px',
    marginBottom: '10px'
  },
  ctaButtonText: {
    background: '#EEEEEE',
    border: '0px',
    marginBottom: '25px'
  }
}