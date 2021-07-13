import React, { useState, useEffect } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Footer from "../components/Footer"

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    Axios.get("/api/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        alert("Error: couldnt find categories");
      });
  };

  const getProducts = () => {
    Axios.get("/api/products")
      .then((res) => {
        setProducts(res.data);
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

          <Button variant="outline-primary" onClick={() => setShow(!show)}>Drinks</Button>{show ?
            
          <Card key={category.id}>
            <Card.Body>
              <Card.Title>{category.name}</Card.Title>
              <Card.Text>{singleCategoryIdArray.length} Products</Card.Text>
            </Card.Body>
          </Card>
            : null}
    
        </div>
      );
    });
  };

  return (
    <>
    <div className="Menu">
      
      <Card>{renderCategories()}</Card> 
    </div>
    <Footer/>
</>
  );
};

export default Categories;
