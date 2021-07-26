import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Form, Button, Row, Col} from "react-bootstrap";
import axios from "axios";
import {
  EditProductH1,
  ProductBooleanCheck,
  TextAreaBoxStyle,
  TextBoxStyle,
} from "../styles/EditProductStyles";
import { FormBackground, btn } from "../styles/styles";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const CreateCategoryItem = (props) => {
  const history = useHistory() 
  const { catId, createProduct, productId, updateCatItem, products, handleDelete, product, setShowCards, setShowEditForm, setShowWarning } = props;
  const [files, setFiles] = useState(props.image ? props.image : "");
  const [name, setName] = useState(props.name ? props.name : "");
  const [price, setPrice] = useState(props.price ? props.price : "");
  const [description, setDescription] = useState(
    props.description ? props.description : ""
  );
  const [limitedTime, setLimitedTime] = useState(
    props.limited_time ? props.limited_time : false
  );
  const [specialItem, setSpecialItem] = useState(
    props.special_item_carousel ? props.special_item_carousel : false
  );
  const [catCarousel, setCatCarousel] = useState(
    props.category_carousel ? props.category_carousel : false
  );

  // console.log('limitedTime', limitedTime)
  // console.log('specialItem', specialItem)
  // console.log('catCarousel', catCarousel)
  // console.log('----------------------')
  // console.log('products', products)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(files);
    try {
      if (productId) {
        //TODO: edge case doesn't work
        if (files.length >= 1) {
          let data = new FormData();
          // console.log('data',data)
          // console.log('files[0].file',files[0].file)
          data.append("fileHere", files[0].file);
          let res1 = await axios.post("/api/images/upload", data);
          // console.log('res1',res1)
          var img = res1.data.cloud_image.secure_url;
          // console.log('img',img)
        }
        let res = await axios.put(
          `/api/categories/${catId}/products/${productId}`,
          {
            image: img,
            name: name,
            price: price,
            description: description,
            limited_time: limitedTime,
            special_item_carousel: specialItem,
            category_carousel: catCarousel,
            order: props.order,
          }
        );
        const update = res.data;
        updateCatItem(update);
        setShowCards(true)
        setShowEditForm(false)
      } else {
        if (files.length >= 1) {
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
            order: products.length + 1,
          });
          createProduct(res1.data);
          history.push('/editor3')
      }
    } catch (err) {
      setShowWarning(true)
    }
  };

  const h1 = () => {
    if(productId){
      return <EditProductH1>{name}</EditProductH1>
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <FilePond
            files={files}
            allowReorder={true}
            allowMultiple={false}
            onupdatefiles={setFiles}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          {h1()}
          <div style={{ display: "flex" }}>
            <ProductBooleanCheck
              type="checkbox"
              id="autoSizingCheck"
              className="mb-2"
              label="Limited Time"
              onChange={(e) => setLimitedTime(e.target.checked)}
              defaultChecked={limitedTime}
            />
            <ProductBooleanCheck
              type="checkbox"
              id="autoSizingCheck"
              className="mb-2"
              label="Special Item"
              onChange={(e) => setSpecialItem(e.target.checked)}
              defaultChecked={specialItem}
            />
            <ProductBooleanCheck
              type="checkbox"
              id="autoSizingCheck"
              className="mb-2"
              label="Category Carousel"
              onChange={(e) => setCatCarousel(e.target.checked)}
              defaultChecked={catCarousel}
            />
          </div>

          <TextBoxStyle
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            defaultValue={name}
            style={FormBackground}
          />
          
          <TextBoxStyle
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={price}
            style={FormBackground}
          />
          
          <Form.Control
            type="text"
            as="textarea"
            defaultValue={description}
            placeholder="Description of the item you want your customers to see"
            onChange={(e) => setDescription(e.target.value)}
            maxLength="250"
            rows={5}
            style={TextAreaBoxStyle}
          />
          
          <Row>
            {product && <Col>
              <Button style={{fontWeight: '500'}} variant="danger" block onClick={()=>handleDelete(product)}>
                Delete
              </Button>
            </Col>}
            <Col>
              <Button style={ btn.blackButton } type="submit" block>
                Save
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
};
export default CreateCategoryItem;
