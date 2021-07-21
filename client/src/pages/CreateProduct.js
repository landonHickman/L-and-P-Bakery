import axios from 'axios'
import React, {useEffect, useState} from 'react'
import CreateCategoryItem from '../components/CreateCategoryItem'
import { MenuButton, MenuH1 } from '../styles/MenuStyles'

const CreateProduct = () => {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = async () => {
    try{
      let res = await axios.get(`/api/categories`)
      // console.log('categories',res.data)
      setCategories(res.data)
    }catch(err){
      console.log('inside catch getCategories', err)
      console.log('inside catch getCategories', err.response)
    }
  }

  const handleCategoryButtonClick = async (category) => {
    let res = await axios.get(`/api/categories/${category.id}/products`)
    // console.log(res.data)
    setProducts(res.data)
    setCategory(category)
    // console.log(category)
  }

  const createProduct = (prod) => {
    setProducts([...products, prod])
    console.log('worked',prod.order)
  }

  const renderCategoryButtons = () => {
    return categories.map(cat=>{
      return (
      <React.Fragment key={cat.id}>
        {/* <Form.Check
          type="checkbox"
          id="autoSizingCheck"
          className="mb-2"
          label={cat.name}
          onClick={(e)=>handleCategoryButtonClick(cat)}
        /> */}
        <MenuButton variant="default" onClick={(e)=>handleCategoryButtonClick(cat)}>{cat.name}</MenuButton>
      </React.Fragment>
      )
    })
  }
  return (
    <div style={{textAlign: 'center', margin: '0rem 5rem 5rem 5rem'}}>
      {/* {console.log(products)} */}
      <MenuH1>Create {category.name}</MenuH1>
      {renderCategoryButtons()}
      <CreateCategoryItem catId={category.id} products={products} createProduct={createProduct}/>
    </div>
  )
}
export default CreateProduct