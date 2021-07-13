import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import CreateCategoryItem from "../components/CreateCategoryItem";

const EditProduct = (props) => {
  const { productId, catId} = props;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  
  const getProduct = async () => {
    let res = await axios.get(`/api/categories/${catId}/products/${productId}`);
    // console.log("limited", res.data.limited_time);
    // console.log("special", res.data.special_item_carousel);
    setProduct(res.data);
  };

  const updateCatItem = (i) => {
    console.log('catItems', product)
    console.log('i',i)
    setProduct(i)
  }

  return (
    <div>
      <Card style={{ width: "16rem", margin: "5px" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          {/* TODO: remove order */}
          <Card.Title>{product.name} order:{product.order}</Card.Title>
          <Card.Subtitle>${product.price}</Card.Subtitle>
          <Card.Text>{product.description}</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              {`Limited Time: ${product.limited_time}`}
            </ListGroupItem>
            <ListGroupItem>
              {`Special Item: ${product.special_item_carousel}`}
            </ListGroupItem>
            <ListGroupItem>
              {`Category Carousel: ${product.category_carousel}`}
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
      <CreateCategoryItem
        productId={product.id}
        catId={catId}
        name={product.name}
        image={product.image}
        price={product.price}
        description={product.description}
        limited_time={product.limited_time}
        category_carousel={product.category_carousel}
        order={product.order}
        special_item_carousel={product.special_item_carousel}
        updateCatItem={updateCatItem}
        
      />
      <hr />
    </div>
  );
};
export default EditProduct;
