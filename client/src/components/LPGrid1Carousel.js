import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const LPGrid1Carousel = () => {
  const [limitedTimeProducts, setLimitedTimeProducts] = useState([]);

  useEffect(() => {
    getLimitedTimeProducts();
  }, []);

  const getLimitedTimeProducts = async () => {
    try {
      let res = await axios.get(`/api/all_limited_time_cake_products`);
      console.log(res.data);
      setLimitedTimeProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderProducts = () => {
    return limitedTimeProducts.map((product) => {
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

  return <Carousel>{renderProducts()}</Carousel>;
};

export default LPGrid1Carousel;

{/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>; */}
