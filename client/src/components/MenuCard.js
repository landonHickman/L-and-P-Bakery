import React, { useState } from "react";
// import FlippedCard from "../components/FlippedCard";
import { Card } from "react-bootstrap";
import { MenuCards, MenuCol, MenuCardPrice, MenuCardTitle} from '../styles/MenuStyles'
import ReactCardFlip from 'react-card-flip';
import FlippedCard from "./FlippedCard";
import {Clock} from 'react-bootstrap-icons'

const MenuCard = ({ product, category }) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const CardFlippable = () => {
    // console.log(project);
  
    const limitedTime = () => {
      if(product.limited_time === true){
        return <Clock style ={{margin: '5px '}}/>
      }else{
        return <div style ={{height: '26px'}}></div>
      }
    }

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          onClick={() => setIsFlipped(true)}
          className="CardFront"
        >
          <div>
          <MenuCards>
            <Card.Img variant="top" src={product.image}/>
            {limitedTime()}
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
