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
      alert("err check console");
      console.log(err);
    }
  };

  let specialProducts = [
    {specProducts},
  ]
  let ideal = [
    [ {id: 1}, {id: 2} ],
    [ {id: 3}, {id: 4} ]
  ]
  const dataCleanup = (arr) => {
    let newArr = []
    let finalArr = []
    arr.forEach((e, i) => {
      if (i % 2 !== 1) {
        newArr.push(e);
        newArr.push(arr[i+1])
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
    return specProducts.map((specProduct) => {
      return (
        <Carousel.Item key={specProduct.id} align= 'center'>
          <Row xs={1} xs={2} className="g-4">
          {Array.from({ length:2  }).map(() => (
          <Col>
          <img
            className="d-block w-100"
            src={specProduct.image}
            alt="First slide"
          />
          <CustomLPS>
            <p>{specProduct.name}</p>
            <p>${specProduct.price} </p>
          </CustomLPS>

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
font-size: 2vw;
`;