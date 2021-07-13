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
    getCatItem();
  }, []);

  const sortByOrder = (o) => {
    let orderedProducts = o.sort((a, b)=>{
      return a.order - b.order  
    } )
    setCatItems(orderedProducts)
    // console.log(orderedProducts)
  }

  const getCatItem = async () => {
    try {
      let res = await axios.get(`/api/categories/${catId}/products`);
      // console.log('res.data',res.data)
      sortByOrder(res.data)
      ;
    } catch (err) {
      console.log("inside getCat catch", err);
      console.log("inside getCat catch", err.response);
    }
  };

  const createCat = (item) => {
    // console.log('item',item)
    setCatItems([...catItems, item]);
  };

  const handleDelete = async (id) => {
    setCatItems(catItems.filter(c => c.id !== id))
    let res = await axios.delete(`/api/categories/${catId}/products/${id}`)
    console.log('deleted',res)
  }

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


  const catPut = async (y) => {
    let res = await axios.put(`/api/categories/${catId}/products/${y.id}`, {
      image: y.image,
      name: y.name,
      price: y.price,
      description: y.description,
      limited_time: y.limitedTime,
      special_item_carousel: y.specialItem,
      category_carousel: y.category_carousel,
      order: y.order + 1
    })
    console.log('res',res.data.order)
  }
  const handleTop = async (prod) => {

    // let add = catItems.map(c=> {
    //   return {order: c.order < prod.order ? c.order + 1 : c.order,
    //   }})
    
    // let setFirst = catItems.map(c=> c.id === prod.id ? prod.order = 1 : c.id)
    // console.log(add)
    // console.log(setFirst)
    catItems.forEach(cat=>{
      if(cat.order < prod.order){
        catPut(cat)
       
      }
    })
    let res1 = await axios.put(`/api/categories/${catId}/products/${prod.id}`, {
      image: prod.image,
      name: prod.name,
      price: prod.price,
      description: prod.description,
      limited_time: prod.limitedTime,
      special_item_carousel: prod.specialItem,
      category_carousel: prod.category_carousel,
      order: prod.order = 1
    })
    console.log('res1',res1.data.order)
  }

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
                    <Card.Subtitle>${d.price} Order:{d.order}</Card.Subtitle>
                    <Card.Text>{d.description}</Card.Text>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        {`Limited Time: ${d.limited_time}`}
                      </ListGroupItem>
                      <ListGroupItem>
                        {`Special Item: ${d.special_item_carousel}`}
                      </ListGroupItem>
                      <ListGroupItem>
                        {`Category Carousel: ${d.category_carousel}`}
                      </ListGroupItem>
                    </ListGroup>
                    <Button
                      variant="primary"
                      onClick={(e) => handleClick(d.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="primary"
                      onClick={(e) => handleDelete(d.id)}
                    >
                      Delete
                    </Button>
                    <Button onClick={(e) =>handleTop(d)}>Top</Button>
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
