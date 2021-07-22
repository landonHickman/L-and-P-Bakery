import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from "axios";
import styled from "styled-components";
import { EmptyDiv } from "../styles/styles";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


const LandingPageEditor = (props) => {
  const { landing } = props;
  const [files, setFiles] = useState(landing.main_background_img ? landing.main_background_img : "");
  const [title, setTitle] = useState(landing.main_title ? landing.main_title : "");
  const [carousel_title, setCarousel_title] = useState(landing.carousel_title ? landing.carousel_title : "");
  // console.log('landing',landing);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{

      if(files.length >= 1){
        let data = new FormData();
        data.append("fileHere", files[0].file);
        let res1 = await axios.post("/api/images/upload", data);
        var img = res1.data.cloud_image.secure_url;
      }
      await axios.put(`/api/landing_pages/${landing.id}`,{
        main_background_img: img,
        carousel_title: carousel_title,
        main_title: title
      })
      // console.log('update',res)
    }catch(err){
      console.log('Inside handleSubmit catch', err)
      console.log('Inside handleSubmit catch', err.response)
    }
  }

  return (
    <>
    <EmptyDiv/>
      <Form  style={{ margin: "0vh 11vw 9vh 11vw" }} onSubmit={handleSubmit}>
        <Form.Group>
            <EmptyDiv/>
          <FilePond
            files={files}
            allowReorder={true}
            allowMultiple={false}
            onupdatefiles={setFiles}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
            <CustomImageTitle>Header Image</CustomImageTitle>
          <Row>
            <Col>
              <Form.Label>Main Title</Form.Label>
              <Form.Control placeholder="Main Title" defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>
            </Col>
            <Col>
              <Form.Label>Carousel Title</Form.Label>
              <Form.Control
                placeholder="Carousel Title"
                defaultValue={carousel_title}
                onChange={(e) => setCarousel_title(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="dark"  type="submit" block>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LandingPageEditor;

const CustomImageTitle = styled.div`
font-size: 40px;
margin: 30px;
text-align: center;
margin-top: 50px
`;