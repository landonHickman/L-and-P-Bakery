import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MenuCards } from "../styles/MenuStyles";

const FlippedCard = ({ product }) => {
  // console.log(product)
  return (
    <MenuCards>
      <Card.Img variant="top" src={product.image} />
      <Row sm={1}>
        <Col>
          <Card.ImgOverlay
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0px",
              height: "45%",
            }}
          >
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle>${product.price}</Card.Subtitle>
          </Card.ImgOverlay>
        </Col>
        <Col>
          <Card.Body>
            <Card.Text style={{ padding: "10px", overflow: 'auto', height: '11rem' }}>
              {product.description}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </MenuCards>
  );
};
export default FlippedCard;
