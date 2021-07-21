import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const LPGrid3Carousel = () => {
  const [limitedTimeBakeryProducts, setLimitedTimeBakeryProducts] = useState([]);
  
  useEffect(() => {
    getLimitedTimeBakeryProducts();
  }, []);
  
  const getLimitedTimeBakeryProducts = async () => {
    try {
      let res = await axios.get(`/api/all_limited_time_bakery_products`);
      setLimitedTimeBakeryProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const renderBakeryProducts = () => {
    return limitedTimeBakeryProducts.map((product) => {
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

  return <Carousel>{renderBakeryProducts()}</Carousel>;
};

export default LPGrid3Carousel;