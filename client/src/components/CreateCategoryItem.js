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

  const [files, setFiles] = useState(props.image ? props.image : '');
  const [name, setName] = useState(props.name ? props.name : '');
  const [price, setPrice] = useState(props.price ? props.price : '');
  const [description, setDescription] = useState(props.description ? props.description : '');
  const [limitedTime, setLimitedTime] = useState(props.limited_time ? props.limited_time : false);
  const [specialItem, setSpecialItem] = useState(props.special_item_carousel ? props.special_item_carousel : false);
  const [catCarousel, setCatCarousel] = useState(props.category_carousel ? props.category_carousel : false);

  // console.log('limitedTime', limitedTime)
  // console.log('specialItem', specialItem)
  // console.log('catCarousel', catCarousel)
  // console.log('----------------------')

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(files);
    try {
      if (productId){
        //TODO: edge case doesn't work
        if(files.length >= 1){
          let data = new FormData();
          data.append("fileHere", files[0].file);
          let res1 = await axios.post("/api/images/upload", data);
          var img = res1.data.cloud_image.secure_url;
        }
        let res = await axios.put(`/api/categories/${catId}/products/${productId}`, {
          image: img,
          name: name,
          price: price,
          description: description,
          limited_time: limitedTime,
          special_item_carousel: specialItem,
          category_carousel: catCarousel,
          order: props.order
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
                defaultValue={name}
              />
              <Form.Label>Price</Form.Label>
              <Form.Control
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
                defaultValue={price}
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                defaultValue={description}
              />
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Limited Time"
                onChange={(e) => setLimitedTime(e.target.checked)}
                defaultChecked={limitedTime}
              />
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Special Item"
                onChange={(e) => setSpecialItem(e.target.checked)}
                defaultChecked={specialItem}
              />
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Category Carousel"
                onChange={(e) => setCatCarousel(e.target.checked)}
                //doesn't work correctly
                // defaultChecked={props.category_carousel}
                //doesn't work
                // defaultChecked={props.id ? props.category_carousel : false}
                defaultChecked={catCarousel}
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
    </>
  )
}
export default CreateCategoryItem