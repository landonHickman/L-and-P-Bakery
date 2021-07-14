import React, { useState } from "react";
import { Row, Card, CardGroup, ListGroupItem, Button, Col } from "react-bootstrap";
import FlippedCard from "../components/FlippedCard";

const MenuCard = ({ product }) => {
  const [showFlippedCard, setShowFlippedCard] = useState(false);

  const handleFlip = () => {
    setShowFlippedCard(true);
  };

  return (
    <>
      <Col style={{padding: "12px"}}>
        <Card>
            <Card.Img variant="top" src={product.image} style={{height: "100%"}} />
          <Card.Title style={{paddingTop: "50px", marginBottom: "0px"}}>{product.name}</Card.Title>
          <Card.Subtitle style={{ marginBottom: "25px", paddingTop: "20px" }}>${product.price}</Card.Subtitle>
            {/* <Card.Text>{product.description}</Card.Text> */}
            {/* <ListGroupItem>{`Limited Time: ${product.limited_time}`}</ListGroupItem> */}
            {/* <Button onClick={handleFlip}>Flip</Button> */}
        </Card>
        {showFlippedCard && <FlippedCard product={product} />}
      </Col>
    </>
    
  );
};
export default MenuCard;
