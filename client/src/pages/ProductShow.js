import React from "react";
import { Row} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { RightColProductShow, ProductContainer, ProductImg, LeftColProductShow } from "../styles/MenuStyles";
import styled from "styled-components";

const ProductShow = () => {
  let location = useLocation();
  //console.log(location.state);

  const renderProduct = () => {
    return (
      <ProductContainer fluid >
        <Row>
          <LeftColProductShow md={6}>
            <ProductImg
              src={location.state.product.image}
              style={{flex: '1'}}
            />
          </LeftColProductShow>
          <RightColProductShow md={6}>
            <ShowH1>{location.state.product.name}</ShowH1>
            <ShowText>{location.state.product.description}</ShowText>
            <ShowPrice>${location.state.product.price}</ShowPrice>
          </RightColProductShow>
        </Row>
      </ProductContainer>
    );
  };

  return (
    <div>
      <div style={{height: '116px'}}/>
      {renderProduct()}
      <div style={{ marginTop: "225px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default ProductShow;

const ShowH1 = styled.h1`
  font-size: 3.25rem;
  font-weight: 500;
`
const ShowText = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
`
const ShowPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`
