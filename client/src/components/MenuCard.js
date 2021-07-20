import React, { useState } from "react";
// import FlippedCard from "../components/FlippedCard";
import { Card } from "react-bootstrap";
import { MenuCards, MenuCol, MenuCardPrice, MenuCardTitle} from '../styles/MenuStyles'
import ReactCardFlip from 'react-card-flip';
import FlippedCard from "./FlippedCard";

const MenuCard = ({ product, category }) => {
  const [isFlipped, setIsFlipped] = useState(false);


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
        </MenuCards>
           
          </div>
        </div>
        <div
          onClick={() => setIsFlipped(false)}
          className="CardBack"
        >
          <FlippedCard product={product} category={category}/>
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
