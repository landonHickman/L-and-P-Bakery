import React, { useEffect, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Form, Button, Row, Col, Card, CardGroup } from "react-bootstrap";
import axios from "axios";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Drinks = (props) => {
  const { drinkCategoryId } = props;
  const [drinks, setDrinks] = useState([]);
  const [files, setFiles] = useState([]);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const [limitedTime, setLimitedTime] = useState(false);
  const [specialItem, setSpecialItem] = useState(false);

  useEffect(()=>{
    getDrinks()
  },[])

  const getDrinks = async () => {
    try{

      let res = await axios.get(`/api/categories/${drinkCategoryId}/products`);
      setDrinks(res.data);
    }catch(err){
      console.log('inside getDrinks catch',err)
      console.log('inside getDrinks catch',err.response)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(files);
    try {
      let data = new FormData();
      data.append("fileHere", files[0].file);
      let res1 = await axios.post("/api/images/upload", data);

      const image = res1.data.cloud_image.secure_url;

      await axios.post(`/api/categories/${drinkCategoryId}/products`, {
        image: image,
        name: name,
        price: price,
        description: description,
        limited_time: limitedTime,
        special_item_carousel: specialItem,
      });
    } catch (err) {
      alert("err");
      console.log("err", err);
      console.log("err.response", err.response);
    }
  };

 
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label>Price</Form.Label>
              <Form.Control
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />

              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Limited Time"
                onChange={(e) => setLimitedTime(e.target.checked)}
              />
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Special Item"
                onChange={(e) => setSpecialItem(e.target.checked)}
              />
              <Button type="submit" block>
                submit
              </Button>
            </Col>
            <Col>
              <FilePond
                files={files}
                allowReorder={true}
                allowMultiple={false}
                onupdatefiles={setFiles}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {drinks.map((d) => {
        return (
          <Card style={{ width: "16rem", margin: '5px' }} key={d.id}>
            <Card.Img variant="top" src={d.image}/>
            <Card.Body>
              <Card.Title>{d.name}</Card.Title>
              <Card.Subtitle>${d.price}</Card.Subtitle>
              <Card.Text>
                {d.description}
              </Card.Text>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>
        );
      })}
      </div>
    </div>
  );
};

export default Drinks;
