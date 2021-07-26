import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {style} from '../styles/styles'

const LPSpecials = () => {
  const [specProducts, setSpecProducts] = useState([]);
  const [largeCarousel, setLargeCarousel] = useState(false);
  const [smallCarousel, setSmallCarousel] = useState(false);

  useEffect(() => {
    getLPSpecials();
    checkInitialSize()
  }, []);

  const getLPSpecials = async () => {
    try {
      let res = await axios.get(`/api/all_special_products`);
      // console.log('specProducts', res.data)
      setSpecProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  let specialProducts = [specProducts];
  let ideal = [
    [{ id: 1 }, { id: 2 }],
    [{ id: 3 }, { id: 4 }],
  ];
  const dataCleanup = (specialProducts) => {
    let newArr = [];
    let finalArr = [];
    specProducts.forEach((e, i) => {
      // console.log('length',specProducts.length)
      if (i % 2 !== 1) {
        newArr.push(e);
        if (specProducts[i + 1]) {
          newArr.push(specProducts[i + 1]);
        }
        // console.log('i',i)
        finalArr.push(newArr);
        newArr = [];
      }
    });
    // console.log("finalArr", finalArr)
    return finalArr;
  };

  const renderSpecProducts = (specialProducts) => {
    const finalData = dataCleanup(specialProducts);
    // console.log('finalData',finalData)
    return finalData.map((productPair) => {
      // console.log('productPair', productPair)
      return (
        <Carousel.Item key={productPair[0].id} align="center">
          <Row>
            {productPair.map((product) => {
              // console.log('Product',product)
              return (
                <React.Fragment key={product.id + 1000}>
                  <Col>
                    <img
                      style={style.carouselImage}
                      className="d-block w-100"
                      src={product.image}
                      alt="First slide"
                    />
                    <CustomLPS>
                      <p>{product.name}</p>
                      <p>${product.price} </p>
                    </CustomLPS>
                  </Col>
                </React.Fragment>
              );
            })}
          </Row>
        </Carousel.Item>
      );
    });
  };

  const renderSmallCarousel = () => {
    return specProducts.map((small) => {
      return (
        <Carousel.Item key={small.id} align="center">
          <Row>
            <Col>
              <img
                style={style.carouselImage}
                className="d-block w-100"
                src={small.image}
                alt="First slide"
              />
              <CustomLPS>
                <p>{small.name}</p>
                <p>${small.price} </p>
              </CustomLPS>
            </Col>
          </Row>
        </Carousel.Item>
      );
    });
  };

  const checkInitialSize = () => {
    if(window.innerWidth >= 768){
      setLargeCarousel(true);
      setSmallCarousel(false);
    } else {
      setLargeCarousel(false);
        setSmallCarousel(true);
    }
  }

  const checkSize = () => {
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        // console.log("Screen width is at least 767px");
        setLargeCarousel(true);
        setSmallCarousel(false);
      } else {
        // console.log("Screen less than 767px");
        setLargeCarousel(false);
        setSmallCarousel(true);
      }
    });
  };

  return (
    <>
      {checkSize()}
      {largeCarousel && <Carousel>{renderSpecProducts()}</Carousel>}
      {smallCarousel && <Carousel>{renderSmallCarousel()}</Carousel>}
    </>
  );
};

export default LPSpecials;

const CustomLPS = styled.div`
  font-size: 2.5vh;
  font-weight: 500;
`;
const SpecProductName = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;
const SpecProductPrice = styled.p`
  font-size: 1.25;
  font-weight: 400;
`;
