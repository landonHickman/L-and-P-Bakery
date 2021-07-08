import React, { useEffect, useState } from "react";
import { Button, Card} from "react-bootstrap";
import axios from "axios";
import CreateDrinks from "./CreateDrinks";

const Drinks = (props) => {
  const { drinkCategoryId } = props;
  const [drinks, setDrinks] = useState([]);

  useEffect(()=>{
    getDrinks()
  },[])

  const getDrinks = async () => {
    try{
      let res = await axios.get(`/api/categories/${drinkCategoryId}/products`);
      setDrinks(res.data);
    }catch(err){
      console.log('inside getDrinks catch',err)
      console.log('inside getDrinks catch',err.response)
    }
  };

  const createDrink = (drink) => {
    setDrinks([drink, ...drinks])
  }

  return (
    <div>
      <CreateDrinks drinkCategoryId={drinkCategoryId} createDrink={createDrink}/>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {drinks.map((d) => {
        return (
          <Card style={{ width: "16rem", margin: '5px' }} key={d.id}>
            <Card.Img variant="top" src={d.image}/>
            <Card.Body>
              <Card.Title>{d.name}</Card.Title>
              <Card.Subtitle>${d.price}</Card.Subtitle>
              <Card.Text>
                {d.description}
              </Card.Text>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>
        );
      })}
      </div>
      </div>
  );
};

export default Drinks;