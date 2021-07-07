import React, {useState} from "react";
import { Button } from "react-bootstrap";


const Editor3 = () => {
  const [showDrinks, setShowDrinks] = useState(true)
  const [showBakery, setShowBakery] = useState(false)
  const [showCakes, setShowCakes] = useState(false)
  // const [but, setBut] = useState(false)

  const drinkHandle = () => {
    setShowDrinks(true)
    setShowBakery(false)
    setShowCakes(false)
  }
  const bakeryHandle = () => {
    setShowDrinks(false)
    setShowBakery(true)
    setShowCakes(false)
  }
  const cakesHandle = () => {
    setShowDrinks(false)
    setShowBakery(false)
    setShowCakes(true)
  }

  return (
    <div>
        {showDrinks && <h1 style={{textAlign: 'center'}}>Drinks</h1>}
        {showBakery && <h1 style={{textAlign: 'center'}}>Bakery</h1>}
        {showCakes && <h1 style={{textAlign: 'center'}}>Cakes</h1>}
      <div style={{textAlign: 'center'}}>
        <Button variant="outline-primary" onClick={drinkHandle}>Drinks</Button>
        <Button variant="outline-primary" onClick={bakeryHandle}>Bakery</Button>
        <Button variant="outline-primary" onClick={cakesHandle}>Cakes</Button>
      </div>
    </div>
  );
};



export default Editor3;
