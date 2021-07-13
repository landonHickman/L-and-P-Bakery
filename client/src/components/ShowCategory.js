import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";
import CreateCategoryItem from "./CreateCategoryItem";
import EditProduct from "../pages/EditProduct";

const ShowCategory = (props) => {
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
  };


  const catAddPut = async (y) => {
    try{
      await axios.put(`/api/categories/${catId}/products/${y.id}`, {
        order: y.order + 1
      })
    }catch(err){
      console.log('Inside Catch catPut',err)
      console.log('err.response',err.response)
    }
  }

  const prodAddPut = async (p) => {
    try{
      let res1 = await axios.put(`/api/categories/${catId}/products/${p.id}`, {
        order: 1
      })
      console.log('Top Button Clicked',res1.data.order)
    }catch(err){
      console.log('insideCatch HandleTop', err)
      console.log('err.response', err.response)
    }
  }

  const handleTop = (prod) => {
    let UpdatedItem = catItems.map(c=> {
      if(c.id === prod.id){
        return {...prod, order: 1}
      }
      if(c.order < prod.order){
        return {...c, order: c.order + 1}
      }
      return c
    })
    sortByOrder(UpdatedItem)
    catItems.forEach(cat=>{
      if(cat.order < prod.order){
        catAddPut(cat)
      }
    })
    prodAddPut(prod)
  }

  const catMinusPut = async (y) => {
    try{
      await axios.put(`/api/categories/${catId}/products/${y.id}`, {
        order: y.order - 1
      })
    }catch(err){
      console.log('Inside Catch catPut',err)
      console.log('err.response',err.response)
    }
  }

  const prodMinusPut = async (p) => {
    try{
      let res1 = await axios.put(`/api/categories/${catId}/products/${p.id}`, {
        order: catItems.length
      })
      console.log('Top Button Clicked',res1.data.order)
    }catch(err){
      console.log('insideCatch HandleTop', err)
      console.log('err.response', err.response)
    }
  }

  const handleBot = (prod) => {
    let UpdatedItem = catItems.map(c=> {
      if(c.id === prod.id){
        return {...prod, order: catItems.length}
      }
      if(c.order > prod.order){
        return {...c, order: c.order - 1}
      }
      return c
    })
    sortByOrder(UpdatedItem)
    catItems.forEach(cat=>{
      if(cat.order > prod.order){
        catMinusPut(cat)
      }
    })
    prodMinusPut(prod)
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
                    <Button onClick={(e) =>handleBot(d)}>Bottom</Button>
                    <Button onClick={(e) =>handleTop(d)}>left</Button>
                    <Button onClick={(e) =>handleTop(d)}>Right</Button>
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
