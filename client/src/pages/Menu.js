import React, { useState, useEffect } from "react";
import { Card, Container, CardGroup, ListGroupItem, Button, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import axios from "axios";
import {styles, MenuH1, MenuButton} from '../styles/MenuStyles'

import MenuCard from "../components/MenuCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getAxios();
  }, []);

  const getAxios = async () => {
    try {
      let res = await axios.get("/api/categories");
      // console.log('categories',res.data)
      setCategories(res.data);
      handleCategoryButtonClick(res.data[0])
      setLoading(false)
    } catch (err) {
      console.log("inside catch getAxios", err);
      console.log("inside catch getAxios", err.response);
    }
  };

  const sortByOrder = (o) => {
    let orderedProducts = o.sort((a, b) => {
      return a.order - b.order;
    });
    setProducts(orderedProducts);
    // console.log('orderedProducts',orderedProducts)
  };

  const handleCategoryButtonClick = async (category) => {
    try {
      let res = await axios.get(`/api/categories/${category.id}/products`);
      // console.log('products',res.data)
      setCategoryTitle(category.name);
      sortByOrder(res.data);
    } catch (err) {
      console.log("inside handleCategoryButtonClick", err);
      console.log("inside handleCategoryButtonClick", err.response);
    }
  };

  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <div key={category.id}>
          <MenuButton
            variant="default"
            onClick={() => handleCategoryButtonClick(category)}  
          >
            {category.name}
          </MenuButton>
        </div>
      );
    });
  };

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <div key={product.id}>
          <MenuCard product={product} />
        </div>
      );
    });
  };

  if(loading) return <p>Loading</p>
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <MenuH1>{categoryTitle}</MenuH1>
        <div
          style={styles.card}
        >
          {renderCategories()}
        </div>
        <div>
          <CardGroup >
            <Row lg={4} md={3} sm={2}>
              {renderProducts()}
            </Row>
          </CardGroup>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
