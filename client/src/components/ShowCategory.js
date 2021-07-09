import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";
import CreateCategoryItem from "./CreateCategoryItem";
import { useHistory } from "react-router";
import EditProduct from "../pages/EditProduct";

const ShowCategory = (props) => {
  const history = useHistory();
  const { catId } = props;
  const [catItems, setCatItems] = useState([]);
  const [productId, setProductId] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showItems, setShowItems] = useState(true);
  const [showCreate, setShowCreate] = useState(true);

  useEffect(() => {
    getCat();
  }, []);

  const getCat = async () => {
    try {
      let res = await axios.get(`/api/categories/${catId}/products`);
      setCatItems(res.data);
    } catch (err) {
      console.log("inside getCat catch", err);
      console.log("inside getCat catch", err.response);
    }
  };

  const createCat = (item) => {
    console.log('item',item)
    setCatItems([item, ...catItems]);
  };

  

  const handleClick = (id) => {
    // console.log(id)
    setShowEditForm(!showEditForm);
    setProductId(id);
    setShowItems(!showItems);
    setShowCreate(!showCreate);
    // history.push({
    //   pathname: '/edit_product',
    //   state: {productId: productId,
    //   catId: catId}
    // })
  };
  return (
    <div>
      {showCreate && <CreateCategoryItem catId={catId} createCat={createCat} />}
      {showEditForm && <EditProduct productId={productId} catId={catId} setCatItems={setCatItems} catItems={catItems}/>}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {showItems &&
          catItems.map((d) => {
            return (
              <div key={d.id}>
                <h1></h1>
                <Card style={{ width: "16rem", margin: "5px" }}>
                  <Card.Img variant="top" src={d.image} />
                  <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
                    <Card.Subtitle>${d.price}</Card.Subtitle>
                    <Card.Text>{d.description}</Card.Text>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        {`Limited Time: ${d.limited_time}`}
                      </ListGroupItem>
                      <ListGroupItem>
                        {`Special Item: ${d.special_item_carousel}`}
                      </ListGroupItem>
                    </ListGroup>
                    <Button
                      variant="primary"
                      onClick={(e) => handleClick(d.id)}
                    >
                      Edit
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShowCategory;
