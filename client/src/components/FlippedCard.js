import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { MenuCards, CardImgOverlayStyled, FlippedCardTitle, FlippedCardPrice} from "../styles/MenuStyles";
import Truncate from "react-truncate";
import { useHistory } from "react-router-dom";
import { btn, style } from "../styles/styles";

const FlippedCard = ({ product, category }) => {
  let history = useHistory();

  // console.log(category);
  // console.log(product);
  const handleMore = (prod) => {
    // console.log(prod);
    history.push({
      pathname: "/product_show",
      state: { category, product: prod },
    });
  };
  return (
    <MenuCards>
      <Row sm={1} style={{flexDirection: 'column'}}>
        <Col>
      <Card.Img variant="top" src={product.image} style={style.ProductCardImage}/>
          <CardImgOverlayStyled>
            {/* <div style={{ display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,.5)',
color: 'white'}}> */}

            <FlippedCardTitle >{product.name}</FlippedCardTitle>
            <FlippedCardPrice>${product.price}</FlippedCardPrice>
{/* </div> */}
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
            <Button style={btn.blackButton}
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

