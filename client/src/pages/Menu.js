import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import {
  styles,
  MenuH1,
  MenuButton,
  MenuRow,
  MarginDiv,
  MenuLegend,
} from "../styles/MenuStyles";
import MenuCard from "../components/MenuCard";
import { Container } from "react-bootstrap";
import { EmptyDiv } from "../styles/styles";
import { Clock } from "react-bootstrap-icons";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAxios();
  }, []);

  const getAxios = async () => {
    try {
      let res = await axios.get("/api/categories");
      // console.log('categories',res.data)
      setCategories(res.data);
      handleCategoryButtonClick(res.data[0]);
      setLoading(false);
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
      setCategory(category);
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
        <React.Fragment key={product.id}>
          <MenuCard product={product} category={category} />
        </React.Fragment>
      );
    });
  };

  if (loading) return <p>Loading</p>;
  return (
    <>
      <EmptyDiv />
      <MarginDiv>
        <div style={{ textAlign: "center" }}>
          <MenuH1>{category.name}</MenuH1>
          <div style={styles.card}>{renderCategories()}</div>

          <Container>
            <MenuRow>{renderProducts()}</MenuRow>
          </Container>
          <MenuLegend>
            <Clock style={{ marginRight: "5px", height: "16px" }} />
            <p style={{paddingTop:'18px'}}>Limited Time</p>
          </MenuLegend>
        </div>
      </MarginDiv>
      <Footer />
    </>
  );
};

export default Categories;
