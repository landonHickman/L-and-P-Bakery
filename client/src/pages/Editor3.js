import React, {useState, useEffect} from "react";
import axios from "axios";
import {styles, MenuH1, MenuButton, MenuRow, MenuEditLegend} from '../styles/MenuStyles'
import ShowProduct from "../components/ShowProduct";
import { ArrowClockwise, Clock, StarFill } from "react-bootstrap-icons";
import EditProduct from "./EditProduct";

const Editor3 = () => {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCards, setShowCards] = useState(true)
  const [showEditForm, setShowEditForm] = useState(false);


  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = async () => {
    try{
      let res = await axios.get('/api/categories')
      setCategories(res.data)
      handleCategoryButtonClick(res.data[0])
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

  const handleCategoryButtonClick = async(category) => {
    try{
      let res = await axios.get(`/api/categories/${category.id}/products`)
      // console.log('products',res.data)
      setCategory(category)
      sortByOrder(res.data)
      setShowEditForm(false)
      setShowCards(true)
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
        <ShowProduct prod={prod} category={category} setShowCards={setShowCards} setShowEditForm={setShowEditForm} setProduct={setProduct} products={products} sortByOrder={sortByOrder}/>
      </React.Fragment>
    )
  })
  }

  if(loading) return <p>Loading</p>
  return (
    <div style={{textAlign: 'center'}}>
      <MenuH1>{category.name}</MenuH1>
      {renderCategoryButtons()}
      <MenuRow>
        {showCards && renderProducts()}
      </MenuRow>
      {showEditForm && (
        <EditProduct
          productId={product.id}
          catId={category.id}
          // setProducts={setProducts}
        />
      )}
      <MenuEditLegend>
        <div>
          <StarFill style={styles.iconsLegend} />
          Limited Time Only
        </div>
        <div>
          <Clock style={styles.iconsLegend} />
          Special Bakery Items
        </div>
        <div>
          <ArrowClockwise style={styles.iconsLegend} />
          Category Carousel
        </div>
      </MenuEditLegend>
    </div>
  );
};



export default Editor3;
