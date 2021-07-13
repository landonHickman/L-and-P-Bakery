import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

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
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={specProduct.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{specProduct.name}</h3>
            <p>{specProduct.price} </p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
  }
  return (
    <div>
      <Carousel>{renderSpecProducts()}</Carousel>
    </div>
  )};

export default LPSpecials
