import React, {useState, useEffect} from "react";
// import { Button, Row } from "react-bootstrap";
// import ShowCategory from "../components/ShowCategory";
import axios from "axios";
import {styles, MenuH1, MenuButton, MenuRow} from '../styles/MenuStyles'
import ShowProduct from "../components/ShowProduct";



const Editor3 = () => {
  // const [cat1, setCat1] = useState([])
  // const [cat2, setCat2] = useState([])
  // const [cat3, setCat3] = useState([])
  // const [showCat1, setShowCat1] = useState(false)
  // const [showCat2, setShowCat2] = useState(false)
  // const [showCat3, setShowCat3] = useState(false)
  const [categories, setCategories] = useState([])
  const [categoryTitle, setCategoryTitle] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = async () => {
    try{
      let res = await axios.get('/api/categories')
      setCategories(res.data)
      handleCategoryButtonClick(res.data[0])
      // setCat1(res.data[0])
      // setCat2(res.data[1])
      // setCat3(res.data[2])
      setLoading(false)
    }catch(err){
      console.log('inside catch getCategories',err)
      console.log('inside catch getCategories',err.response)
    }
  }

  const sortByOrder = (o) => {
    let orderedProducts = o.sort((a, b) => {
      return a.order - b.order;
    });
    setProducts(orderedProducts);
    // console.log(orderedProducts)
  };

  // const cat1Handle = () => {
  //   setShowCat1(true)
  //   setShowCat2(false)
  //   setShowCat3(false)
  //   // console.log(cat1.id)
  // }
  // const cat2Handle = () => {
  //   setShowCat1(false)
  //   setShowCat2(true)
  //   setShowCat3(false)
  //   // console.log(cat2.id)
  // }
  // const cat3Handle = () => {
  //   setShowCat1(false)
  //   setShowCat2(false)
  //   setShowCat3(true)
  //   // console.log(cat3.id)
  // }

  const handleCategoryButtonClick = async(category) => {
    try{
      let res = await axios.get(`/api/categories/${category.id}/products`)
      // console.log('products',res.data)
      sortByOrder(res.data)
      setCategoryTitle(category.name)
    }catch(err){
      console.log('inside handleCategoryButtonClick', err)
      console.log('inside handleCategoryButtonClick', err.response)
    }
  }

  const renderCategoryButtons = () => {
    return categories.map(cat=>{
      return (
      <React.Fragment key={cat.id}>
        <MenuButton variant="default" onClick={(e)=>handleCategoryButtonClick(cat)}>{cat.name}</MenuButton>
      </React.Fragment>
    )
  })
  }

  const renderProducts = () => {
    return products.map(prod=>{
      return(
        <React.Fragment key={prod.id}>
        <ShowProduct prod={prod}/>
      </React.Fragment>
    )
  })
  }

  if(loading) return <p>Loading</p>
  return (
    <div style={{textAlign: 'center'}}>
        {/* {showCat1 && <MenuH1 style={{textAlign: 'center'}}>{cat1.name}</MenuH1>}
        {showCat2 && <MenuH1 style={{textAlign: 'center'}}>{cat2.name}</MenuH1>}
        {showCat3 && <MenuH1 style={{textAlign: 'center'}}>{cat3.name}</MenuH1>} */}
      {/* <div style={{textAlign: 'center'}}>
        <MenuButton variant="default" onClick={cat1Handle}>{cat1.name}</MenuButton>
        <MenuButton variant="default" onClick={cat2Handle}>{cat2.name}</MenuButton>
        <MenuButton variant="default" onClick={cat3Handle}>{cat3.name}</MenuButton>
      </div> */}
      <MenuH1>{categoryTitle}</MenuH1>
      {renderCategoryButtons()}
      <MenuRow>

      {renderProducts()}
      </MenuRow>
        {/* {showCat1 && <ShowCategory catId={cat1.id}/>}
        {showCat2 && <ShowCategory catId={cat2.id}/>}
        {showCat3 && <ShowCategory catId={cat3.id}/>} */}
    </div>
  );
};



export default Editor3;
