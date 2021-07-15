import React, { useState } from "react";
import { Row, Card, CardGroup, ListGroupItem, Button, Col } from "react-bootstrap";
import FlippedCard from "../components/FlippedCard";
import {styles} from '../styles/MenuStyles'

const MenuCard = ({ product }) => {
  const [showFlippedCard, setShowFlippedCard] = useState(false);

  const handleFlip = () => {
    setShowFlippedCard(true);
  };

  return (
    <>
      <Col style={{padding: "12px"}}>
        <Card style={{ width: "16rem", margin: "5px" }}>
            <Card.Img variant="top" src={product.image}/>
          <Card.Title style={styles.cardTitle}>{product.name}</Card.Title>
          <Card.Subtitle style={styles.cardPrice}>${product.price}</Card.Subtitle>
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
