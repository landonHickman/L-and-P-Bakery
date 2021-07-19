import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from "axios";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FooterEditor = ({ footer }) => {
  const [logo1, setLogo1] = useState(footer ? footer.social_media_logo_1 : "");
  const [logo2, setLogo2] = useState(footer ? footer.social_media_logo_2 : "");
  const [logo3, setLogo3] = useState(footer ? footer.social_media_logo_3 : "");
  const [address, setAddress] = useState(footer ? footer.address : "");
  const [city, setCity] = useState(footer ? footer.city : "");
  const [state, setState] = useState(footer ? footer.state : "");
  const [zip, setZip] = useState(footer ? footer.zip : "");
  const [phone_number, setPhone_number] = useState(
    footer ? footer.phone_number : ""
  );
  const [email, setEmail] = useState(footer ? footer.email : "");
  const [url1, setUrl1] = useState(footer ? footer.social_media_url_1 : "");
  const [url2, setUrl2] = useState(footer ? footer.social_media_url_2 : "");
  const [url3, setUrl3] = useState(footer ? footer.social_media_url_3 : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (logo1.length >= 1) {
        let data = new FormData();
        data.append("fileHere", logo1[0].file);
        let res1 = await axios.post("/api/images/upload", data);
        var img1 = res1.data.cloud_image.secure_url;
      }
      if (logo2.length >= 1) {
        let data = new FormData();
        data.append("fileHere", logo2[0].file);
        let res2 = await axios.post("/api/images/upload", data);
        var img2 = res2.data.cloud_image.secure_url;
      }
      if (logo3.length >= 1) {
        let data = new FormData();
        data.append("fileHere", logo3[0].file);
        let res3 = await axios.post("/api/images/upload", data);
        var img3 = res3.data.cloud_image.secure_url;
      }
      let res = await axios.put(`/api/footers/${footer.id}`, {
        address: address,
        city: city,
        email: email,
        phone_number: phone_number,
        social_media_logo_1: img1,
        social_media_logo_2: img2,
        social_media_logo_3: img3,
        social_media_url_1: url1,
        social_media_url_2: url2,
        social_media_url_3: url3,
        state: state,
        zip: zip
      })
      console.log('footer update',res)
    } catch (err) {
      console.log("inside catch handleSubmit", handleSubmit);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Edit Footer</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="Address"
                defaultValue={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="City"
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>State</Form.Label>
              <Form.Control
                placeholder="State"
                defaultValue={state}
                onChange={(e) => setState(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Zip</Form.Label>
              <Form.Control
                placeholder="Zip"
                defaultValue={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                placeholder="Phone Number"
                defaultValue={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FilePond
                files={logo1}
                allowReorder={true}
                allowMultiple={false}
                onupdatefiles={setLogo1}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </Col>
            <Col>
              <Form.Label>Social Media Link 1</Form.Label>
              <Form.Control
                placeholder="Social Media Link 1"
                defaultValue={url1}
                onChange={(e) => setUrl1(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FilePond
                files={logo2}
                allowReorder={true}
                allowMultiple={false}
                onupdatefiles={setLogo2}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </Col>
            <Col>
              <Form.Label>Social Media Link 2</Form.Label>
              <Form.Control
                placeholder="Social Media Link 2"
                defaultValue={url2}
                onChange={(e) => setUrl2(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FilePond
                files={logo3}
                allowReorder={true}
                allowMultiple={false}
                onupdatefiles={setLogo3}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </Col>
            <Col>
              <Form.Label>Social Media Link 3</Form.Label>
              <Form.Control
                placeholder="Social Media Link 3"
                defaultValue={url3}
                onChange={(e) => setUrl3(e.target.value)}
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
export default FooterEditor;
