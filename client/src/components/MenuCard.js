import React, { useState } from "react";
// import FlippedCard from "../components/FlippedCard";
import { Card } from "react-bootstrap";
import { MenuCards, MenuCol, MenuCardPrice, MenuCardTitle} from '../styles/MenuStyles'
import ReactCardFlip from 'react-card-flip';
import FlippedCard from "./FlippedCard";

const MenuCard = ({ product }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // const [showFlippedCard, setShowFlippedCard] = useState(false);

  // const handleFlip = () => {
  //   setShowFlippedCard(true);
  // };


  const CardFlippable = () => {
    // console.log(project);
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          onClick={() => setIsFlipped(true)}
          className="CardFront"
        >
          <div>
          <MenuCards>
            <Card.Img variant="top" src={product.image}/>
          <MenuCardTitle>{product.name}</MenuCardTitle>
          <MenuCardPrice>${product.price}</MenuCardPrice>
            
            {/* <ListGroupItem>{`Limited Time: ${product.limited_time}`}</ListGroupItem> */}
            {/* <Button onClick={handleFlip}>Flip</Button> */}
        </MenuCards>
           
          </div>
        </div>
        <div
          onClick={() => setIsFlipped(false)}
          className="CardBack"
        >
          <FlippedCard product={product}/>
          {/* <Card.Text>{product.description}</Card.Text> */}
        </div>
      </ReactCardFlip>
    );
  };

  return (
    <>
      <MenuCol>
        {CardFlippable()}
      </MenuCol>
    </>
    
  );
};
export default MenuCard;
