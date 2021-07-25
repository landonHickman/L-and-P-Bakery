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
    console.log(finalArr)
    return finalArr
  }
  dataCleanup(specialProducts);


  const renderSpecProducts = () => {
    return specialProducts.map((specProducts) => {
      return (
        <Carousel.Item key={specProducts.id} align= 'center'>
          <Row>
          {specProducts.map(() => (
            <Col>
          <img
            className="d-block w-100"
            src={specProducts.image}
            alt="First slide"
          />
          <div>
            <SpecProductName>{specProducts.name}</SpecProductName>
            <SpecProductPrice>${specProducts.price} </SpecProductPrice>
          </div>
        </Col>
        ))}
        </Row>
      </Carousel.Item>
      )
    })
  }
  return (
      <Carousel>{renderSpecProducts()}</Carousel>
  )};

export default LPSpecials

const CustomLPS = styled.div`
font-size: 2.5vh;
font-weight: 500;
`;

const SpecProductName = styled.p`
font-size: 1.5rem;
font-weight: 500;
`
const SpecProductPrice = styled.p`
font-size: 1.25;
font-weight: 400;
`