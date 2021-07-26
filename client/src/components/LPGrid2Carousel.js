import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const LPGrid2Carousel = () => {
  const [limitedTimeBobaProducts, setLimitedTimeBobaProducts] = useState([]);

  useEffect(() => {
    getLimitedTimeBobaProducts();
  }, []);

  const getLimitedTimeBobaProducts = async () => {
    try {
      let res = await axios.get(`/api/all_limited_time_boba_products`);
      setLimitedTimeBobaProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderBobaProducts = () => {
    return limitedTimeBobaProducts.map((product) => {
      return (
        <Carousel.Item key={product.id}>
          <img
            className="d-block w-100"
            src={product.image}
            alt="First slide"
          />
        </Carousel.Item>
      );
    });
  };

  return <Carousel>{renderBobaProducts()}</Carousel>;
};

export default LPGrid2Carousel;
