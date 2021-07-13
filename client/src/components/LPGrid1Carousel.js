import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const LPGrid1Carousel = () => {
  const [limitedTimeCakeProducts, setLimitedTimeCakeProducts] = useState([]);

  useEffect(() => {
    getLimitedTimeCakeProducts();
  }, []);

  const getLimitedTimeCakeProducts = async () => {
    try {
      let res = await axios.get(`/api/all_limited_time_cake_products`);
      setLimitedTimeCakeProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderCakeProducts = () => {
    return limitedTimeCakeProducts.map((product) => {
      return (
        <Carousel.Item >
          <img key={product.id}
            className="d-block w-100"
            src={product.image}
            alt="First slide"
          />
        </Carousel.Item>
      );
    });
  };

  return <Carousel>{renderCakeProducts()}</Carousel>;
};

export default LPGrid1Carousel;