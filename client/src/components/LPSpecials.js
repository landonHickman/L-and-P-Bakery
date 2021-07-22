import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel, Row, Col} from "react-bootstrap";
import styled from "styled-components";

const LPSpecials = () => {
  const [specProducts, setSpecProducts] = useState([]);

  useEffect(() => {
    getLPSpecials();
  }, []);

  const getLPSpecials = async () => {
    try {
      let res = await axios.get(`/api/all_special_products`);
      console.log('specProducts', res.data)
      setSpecProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  let specialProducts = [
    specProducts
  ]
  let ideal = [
    [ {id: 1}, {id: 2} ],
    [ {id: 3}, {id: 4} ]
  ]
  const dataCleanup = (specialProducts) => {
    let newArr = []
    let finalArr = []
    specProducts.forEach((e, i) => {
      if (i % 2 !== 1) {
        newArr.push(e);
        newArr.push(specProducts[i+1])
        console.log(i)
        finalArr.push(newArr)
        newArr = []
      }
    })
    console.log("finalArr", finalArr)
    return finalArr
  }
  
  const renderSpecProducts = (specialProducts) => {
    const finalData = dataCleanup(specialProducts);
    return specialProducts.map((productPair) => {
      return (
        <Carousel.Item key={productPair.id} align= 'center'>
          <Row>
          {productPair.map((product) => (
            <Col >
          <img
            className="d-block w-100"
            src={product.image}
            alt="First slide"
          />
          <CustomLPS>
            <p>{product.name}</p>
            <p>${product.price} </p>
          </CustomLPS>
        </Col>
        ))}
        </Row>
      </Carousel.Item>
      )
    })
  }
  return (
      <Carousel>{renderSpecProducts(specialProducts)}</Carousel>
  )};

export default LPSpecials

const CustomLPS = styled.div`
font-size: 2vw;
`;