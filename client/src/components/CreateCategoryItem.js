import React, {useState} from 'react'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Form, Button, Row, Col} from "react-bootstrap";
import axios from 'axios';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const CreateCategoryItem = (props) => {
  const {catId, createCat, productId, updateCatItem, catItems } = props

  const [files, setFiles] = useState([]);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const [limitedTime, setLimitedTime] = useState(props.limited_time);
  const [specialItem, setSpecialItem] = useState(props.special_item_carousel);
  const [catCarousel, setCatCarousel] = useState(props.category_carousel);
  const [order, setOrder] = useState(props.order);

  console.log('limitedTime', limitedTime)
  console.log('specialItem', specialItem)
  console.log('catCarousel', catCarousel)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(files);
    try {
      if (productId){
        //TODO: edge case doesn't work
        // if(files.length >= 1){
          let data = new FormData();
          data.append("fileHere", files[0].file);
          let res1 = await axios.post("/api/images/upload", data);
          var img = res1.data.cloud_image.secure_url;
        // }
        let res = await axios.put(`/api/categories/${catId}/products/${productId}`, {
          image: img,
          name: name,
          price: price,
          description: description,
          limited_time: limitedTime,
          special_item_carousel: specialItem,
          category_carousel: catCarousel,
          order: order
        })
        const update = res.data
        updateCatItem(update)
      } else {
        if(files.length >= 1){
          let data = new FormData();
          data.append("fileHere", files[0].file);
          let res1 = await axios.post("/api/images/upload", data);
          var img1 = res1.data.cloud_image.secure_url;
        }
        let res1 = await axios.post(`/api/categories/${catId}/products`, {
          image: img1,
          name: name,
          price: price,
          description: description,
          limited_time: limitedTime,
          special_item_carousel: specialItem,
          category_carousel: catCarousel,
          order: catItems.length + 1
          
        });
        createCat(res1.data)
      }
      
    } catch (err) {
      alert("err");
      console.log("err", err);
      console.log("err.response", err.response);
    }
  };

 

  return (
    <>
    <h1>{productId ? 'Edit Item' : 'Create Item'}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                defaultValue={props.name ? props.name: ''}
              />
              <Form.Label>Price</Form.Label>
              <Form.Control
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
                defaultValue={props.price ? props.price : ''}
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                defaultValue={props.description ? props.description : ''}
              />
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Limited Time"
                onChange={(e) => setLimitedTime(e.target.checked)}
                defaultChecked={props.limited_time}
              />
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Special Item"
                onChange={(e) => setSpecialItem(e.target.checked)}
                defaultChecked={props.special_item_carousel}
              />
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Category Carousel"
                onChange={(e) => setCatCarousel(e.target.checked)}
                defaultChecked={props.category_carousel}
              />
              <Button type="submit" block>
                submit
              </Button>
            </Col>
            <Col>
              <FilePond
                files={props.image ? props.image : files}
                allowReorder={true}
                allowMultiple={false}
                onupdatefiles={setFiles}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  )
}
export default CreateCategoryItem