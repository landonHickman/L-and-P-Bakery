import React, { useState, useEffect, Component } from "react";
import { Card, Spinner, Button } from "react-bootstrap";
import Axios from "axios";
import Footer from "../components/Footer";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  // const [ products, setProduct] = useState([])
  const [show, setShow] = useState(true);

  useEffect(() => {
    getCategories();
    // getProducts();
  }, []);

  // const getProduct = async () => {
  //   let res = await axios.get(`/api/categories/${catId}/products/${productId}`);
  //   // console.log("limited", res.data.limited_time);
  //   // console.log("special", res.data.special_item_carousel);
  //   setProduct(res.data);
  // };

  const getCategories = () => {
    Axios.get("/api/categories")
      .then((res) => {
        setCategories(res.data);
      })
  }

  render() {
    const { name } = this.state
    const nameList = name.length ? (
      name.map(name => {
        return (
          <div key={name.id}>
            <div alignment='center'>
              <Button variant="outline-primary">{name.name}</Button>
            </div>
          </div>
        );
      })
      .catch((err) => {
        alert("Error: couldnt find products");
      });
  };

  const findProductsByCategory = () => {
    let productCategoryIds = [];
    products.map((product) => {
      productCategoryIds.push(product.category_id);
    });
    return productCategoryIds;
  };

  const renderCategories = () => {
    let productCategoryIds = findProductsByCategory();
    return categories.map((category) => {
      let singleCategoryIdArray = productCategoryIds.filter(
        (id) => id === category.id
      );
      return (
        <div>
          <Button variant="outline-primary" onClick={() => setShow(!show)}>
            Drinks
          </Button>
          {show ? (
            <Card key={category.id}>
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>{singleCategoryIdArray.length} Products</Card.Text>
              </Card.Body>
            </Card>
          ) : null}
        </div>
      );
    });
  };

  return (
    <>
      <div className="Menu">
        <Card>{renderCategories()}</Card> 
      </div>
      <Footer />
    </>
  );
};

export default Categories;
