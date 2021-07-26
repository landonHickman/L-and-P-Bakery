import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const LPGrid1Carousel = () => {
  const [limitedTimeCakeProducts, setLimitedTimeCakeProducts] = useState([]);

  useEffect(() => {
    getLimitedTimeCakeProducts();
  }, []);

  const getLimitedTimeCakeProducts = async () => {
    try {
      let res = await axios.get(`/api/all_limited_time_cake_products`);
      //console.log("cake carousel axios", res.data);
      setLimitedTimeCakeProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderCakeProducts = () => {
    return limitedTimeCakeProducts.map((product) => {
      return (
        <Carousel.Item key={product.id} >
          <img
            className="d-block w-100"
            alt="First slide"
            src={product.image}
          />
        </Carousel.Item>
      );
    });
  };

  return (
    <div>
      <Carousel>{renderCakeProducts()}</Carousel>
    </div>
  );
};

export default LPGrid1Carousel;
