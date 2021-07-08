import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import Bakery from "../components/Bakery";
import Drinks from "../components/Drinks";
import Cakes from "../components/Cakes";
import axios from "axios";


const Editor3 = () => {
  const [drinkCategory, setDrinkCategory] = useState([])
  const [bakeryCategory, setBakeryCategory] = useState([])
  const [cakesCategory, setCakesCategory] = useState([])
  const [showDrinks, setShowDrinks] = useState(true)
  const [showBakery, setShowBakery] = useState(false)
  const [showCakes, setShowCakes] = useState(false)

  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = async () => {
    let res = await axios.get('/api/categories')
    setDrinkCategory(res.data[0])
    setBakeryCategory(res.data[1])
    setCakesCategory(res.data[2])
  }

  const drinkHandle = () => {
    setShowDrinks(true)
    setShowBakery(false)
    setShowCakes(false)
    // console.log(drinkCategory.id)
  }
  const bakeryHandle = () => {
    setShowDrinks(false)
    setShowBakery(true)
    setShowCakes(false)
    // console.log(bakeryCategory.id)
  }
  const cakesHandle = () => {
    setShowDrinks(false)
    setShowBakery(false)
    setShowCakes(true)
    // console.log(cakesCategory.id)
  }

  return (
    <div>
        {showDrinks && <h1 style={{textAlign: 'center'}}>{drinkCategory.name}</h1>}
        {showBakery && <h1 style={{textAlign: 'center'}}>{bakeryCategory.name}</h1>}
        {showCakes && <h1 style={{textAlign: 'center'}}>{cakesCategory.name}</h1>}
      <div style={{textAlign: 'center'}}>
        <Button variant="outline-primary" onClick={drinkHandle}>{drinkCategory.name}</Button>
        <Button variant="outline-primary" onClick={bakeryHandle}>{bakeryCategory.name}</Button>
        <Button variant="outline-primary" onClick={cakesHandle}>{cakesCategory.name}</Button>
      </div>
        {showDrinks && <Drinks drinkCategoryId={drinkCategory.id}/>}
        {showBakery && <Bakery bakeryCategoryId={bakeryCategory.id}/>}
        {showCakes && <Cakes cakesCategoryId={cakesCategory.id}/>}
    </div>
  );
};



export default Editor3;
