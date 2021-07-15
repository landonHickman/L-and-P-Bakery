import React, { useState } from "react";
import { Row, Card, CardGroup, ListGroupItem, Button, Col } from "react-bootstrap";
import FlippedCard from "../components/FlippedCard";
import {styles, MenuCards, MenuCol, MenuCardPrice, MenuCardTitle} from '../styles/MenuStyles'

const MenuCard = ({ product }) => {
  const [showFlippedCard, setShowFlippedCard] = useState(false);

  const handleFlip = () => {
    setShowFlippedCard(true);
  };

  return (
    <>
      <MenuCol>
        <MenuCards>
            <Card.Img variant="top" src={product.image}/>
          <MenuCardTitle>{product.name}</MenuCardTitle>
          <MenuCardPrice>${product.price}</MenuCardPrice>
            {/* <Card.Text>{product.description}</Card.Text> */}
            {/* <ListGroupItem>{`Limited Time: ${product.limited_time}`}</ListGroupItem> */}
            {/* <Button onClick={handleFlip}>Flip</Button> */}
        </MenuCards>
        {showFlippedCard && <FlippedCard product={product} />}
      </MenuCol>
    </>
    
  );
};
export default MenuCard;
