import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  styles,
  MenuH1,
  MenuButton,
  MenuRow,
  MenuEditLegend,
  MarginDiv,
} from "../styles/MenuStyles";
import ShowProduct from "../components/ShowProduct";
import { Clock, StarFill } from "react-bootstrap-icons";
import EditProduct from "./EditProduct";
import { Container, Image, Spinner } from "react-bootstrap";
import carousel from '../images/carousel.png'
import { IconDiv } from "../styles/EditProductStyles";
import { EmptyDiv } from "../styles/styles";

const Editor3 = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCards, setShowCards] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showIconLegend, setShowIconLegend] = useState(true);

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategories = async () => {
    try {
      let res = await axios.get("/api/categories");
      setCategories(res.data);
      handleCategoryButtonClick(res.data[0]);
      setLoading(false);
    } catch (err) {
      console.log("inside catch getCategories", err);
      console.log("inside catch getCategories", err.response);
    }
  };

  const sortByOrder = (o) => {
    let orderedProducts = o.sort((a, b) => {
      return a.order - b.order;
    });
    setProducts(orderedProducts);
    // console.log(orderedProducts)
  };

  const handleCategoryButtonClick = async (category) => {
    try {
      let res = await axios.get(`/api/categories/${category.id}/products`);
      // console.log('products',res.data)
      setCategory(category);
      sortByOrder(res.data);
      setShowEditForm(false);
      setShowCards(true);
      setShowIconLegend(true)
    } catch (err) {
      console.log("inside handleCategoryButtonClick", err);
      console.log("inside handleCategoryButtonClick", err.response);
    }
  };

  const renderCategoryButtons = () => {
    return categories.map((cat) => {
      return (
        <React.Fragment key={cat.id}>
          <MenuButton
            variant="default"
            onClick={(e) => handleCategoryButtonClick(cat)}
          >
            {cat.name}
          </MenuButton>
        </React.Fragment>
      );
    });
  };

  const renderProducts = () => {
    return products.map((prod) => {
      return (
        <React.Fragment key={prod.id}>
          <ShowProduct
            prod={prod}
            category={category}
            setShowCards={setShowCards}
            setShowEditForm={setShowEditForm}
            setProduct={setProduct}
            products={products}
            sortByOrder={sortByOrder}
            setShowIconLegend={setShowIconLegend}
          />
        </React.Fragment>
      );
    });
  };

  const deleteUpdate = async (p) => {
    try {
      await axios.put(`/api/categories/${category.id}/products/${p.id}`, {
        order: p.order - 1,
      });
      // console.log(res1.data.order)
    } catch (err) {
      console.log("inside deleteUpdate Catch", err);
      console.log("inside deleteUpdate Catch", err.response);
    }
  };

  const handleDelete = async (prod) => {
    console.log(prod)
    let removedItem = products.filter((p) => p.id !== prod.id);
    let minusOrder = removedItem.map((r) => {
      if (r.order > prod.order) {
        return { ...r, order: r.order - 1 };
      }
      return r;
    });
    sortByOrder(minusOrder);
    let res = await axios.delete(`/api/categories/${category.id}/products/${prod.id}`);
    console.log('deleted',res.data)
    products.forEach((p) => {
      if (p.order > prod.order) {
        deleteUpdate(p);
      }
    });
    setShowEditForm(false)
    setShowCards(true)
  };

  const updateCatItem = (product) => {
    // console.log('inside updateCatItem editor3',product)
    sortByOrder(products.map(prod => prod.id === product.id ? product : prod))
  }

  if (loading) return <Spinner animation="border" size="lg" />;
  return (
    <>
    <EmptyDiv/>
    <MarginDiv>
      <div style={{textAlign: 'center'}}>

      <MenuH1>{category.name}</MenuH1>
      {renderCategoryButtons()}
      </div>
      <Container >
        <MenuRow>{showCards && renderProducts()}</MenuRow>
      </Container>
      {showEditForm && (
        <EditProduct
          productId={product.id}
          catId={category.id}
          setProducts={setProducts}
          products={products}
          sortByOrder={sortByOrder}
          handleDelete={handleDelete}
          setShowEditForm={setShowEditForm}
          setShowCards={setShowCards}
          updateCatItem={updateCatItem}
        />
      )}
      {showIconLegend && <MenuEditLegend>
        <IconDiv>
          <StarFill style={styles.iconsLegend} />
          Special Bakery Items
        </IconDiv>
        <IconDiv>
          <Clock style={styles.iconsLegend} />
          Limited Time Only
        </IconDiv>
        <IconDiv>
          <Image src={carousel} style={styles.iconsLegend} />
          Category Carousel
        </IconDiv>
      </MenuEditLegend>}
    </MarginDiv>
    </>
  );
};

export default Editor3;
