import React from "react";
import { Row} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { RightColProductShow, ProductContainer, ProductImg, LeftColProductShow } from "../styles/MenuStyles";
import { EmptyDiv } from "../styles/styles";

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
      <EmptyDiv/>
      {renderProduct()}
      <div style={{ marginTop: "225px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default ProductShow;
