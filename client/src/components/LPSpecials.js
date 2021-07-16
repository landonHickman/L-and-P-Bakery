import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel, Row, Col} from "react-bootstrap";

const LPSpecials = () => {
  const [specProducts, setSpecProducts] = useState([]);

  useEffect(() => {
    getLPSpecials();
  }, []);

  const getLPSpecials = async () => {
    try {
      let res = await axios.get(`/api/all_special_products`);
      setSpecProducts(res.data);
    } catch (err) {
      alert("err check console");
      console.log(err);
    }
  };

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
          <Carousel.Caption>
            <h3>{specProduct.name}</h3>
            <p>${specProduct.price} </p>
          </Carousel.Caption>

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
