import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import ShowCategory from "../components/ShowCategory";
import axios from "axios";


const Editor3 = () => {
  const [cat1, setCat1] = useState([])
  const [cat2, setCat2] = useState([])
  const [cat3, setCat3] = useState([])
  const [showCat1, setShowCat1] = useState(false)
  const [showCat2, setShowCat2] = useState(false)
  const [showCat3, setShowCat3] = useState(false)

  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = async () => {
    let res = await axios.get('/api/categories')
    setCat1(res.data[0])
    setCat2(res.data[1])
    setCat3(res.data[2])
  }

  const cat1Handle = () => {
    setShowCat1(true)
    setShowCat2(false)
    setShowCat3(false)
    // console.log(cat1.id)
  }
  const cat2Handle = () => {
    setShowCat1(false)
    setShowCat2(true)
    setShowCat3(false)
    // console.log(cat2.id)
  }
  const cat3Handle = () => {
    setShowCat1(false)
    setShowCat2(false)
    setShowCat3(true)
    // console.log(cat3.id)
  }

  return (
    <div>
        {showCat1 && <h1 style={{textAlign: 'center'}}>{cat1.name}</h1>}
        {showCat2 && <h1 style={{textAlign: 'center'}}>{cat2.name}</h1>}
        {showCat3 && <h1 style={{textAlign: 'center'}}>{cat3.name}</h1>}
      <div style={{textAlign: 'center'}}>
        <Button variant="outline-primary" onClick={cat1Handle}>{cat1.name}</Button>
        <Button variant="outline-primary" onClick={cat2Handle}>{cat2.name}</Button>
        <Button variant="outline-primary" onClick={cat3Handle}>{cat3.name}</Button>
      </div>
        {showCat1 && <ShowCategory catId={cat1.id}/>}
        {showCat2 && <ShowCategory catId={cat2.id}/>}
        {showCat3 && <ShowCategory catId={cat3.id}/>}
    </div>
  );
};



export default Editor3;
