import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { MenuCards, CardImgOverlayStyled } from "../styles/MenuStyles";
import Truncate from "react-truncate";
import { useHistory } from "react-router-dom";

const FlippedCard = ({ product, category }) => {
  let history = useHistory();

  // console.log(category);
  // console.log(product);
  const handleMore = (prod) => {
    console.log(prod);
    history.push({
      pathname: "/product_show",
      state: { category, product: prod },
    });
  };
  return (
    <MenuCards>
      <Card.Img variant="top" src={product.image} />
      <Row sm={1}>
        <Col>
          <CardImgOverlayStyled>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle>${product.price}</Card.Subtitle>
          </CardImgOverlayStyled>
        </Col>
        <Col>
          <Card.Body>
            <Card.Text>
              <Truncate
                lines={7}
                ellipsis={
                  <span>
                    ...
                  </span>
                }
              >
                {product.description}
              </Truncate>
            </Card.Text>
            <Button variant="dark"
              onClick={() => handleMore(product)}>
              More
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </MenuCards>
  );
};
export default FlippedCard;
