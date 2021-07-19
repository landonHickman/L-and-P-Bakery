import React from "react";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { RightColProductShow, ProductContainer, ProductImg, LeftColProductShow } from "../styles/MenuStyles";

const ProductShow = () => {
  let location = useLocation();
  //console.log(location.state);

  const renderProduct = () => {
    return (
      <ProductContainer fluid >
        <Row>
          <LeftColProductShow>
            <ProductImg
              src={location.state.product.image}
              thumbnail
            />
          </LeftColProductShow>
          <RightColProductShow>
            <h1>{location.state.product.name}</h1>
            <p>{location.state.product.description}</p>
            <h5>${location.state.product.price}</h5>
          </RightColProductShow>
        </Row>
      </ProductContainer>
    );
  };

  return (
    <div>
      {renderProduct()}
      <div style={{ marginTop: "225px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default ProductShow;
