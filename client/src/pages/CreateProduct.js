import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { ExclamationCircle } from 'react-bootstrap-icons'
import CreateCategoryItem from '../components/CreateCategoryItem'
import { MenuButton, MenuH1 } from '../styles/MenuStyles'
import { EmptyDiv, ErrorSpan } from '../styles/styles'

const CreateProduct = () => {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])
  const [showTitle, setShowTitle] = useState(false)
  const [showSelect, setShowSelect] = useState(true)
  const [showWarning, setShowWarning] = useState(false)

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
    setShowSelect(false)
    setShowTitle(true)
    setShowWarning(false)
    // console.log(category)
  }

  const createProduct = (prod) => {
    setProducts([...products, prod])
  }

  const renderCategoryButtons = () => {
    return categories.map(cat=>{
      return (
      <React.Fragment key={cat.id}>
        <MenuButton variant="default" style={{marginBottom: '20px'}} onClick={(e)=>handleCategoryButtonClick(cat)}>{cat.name}</MenuButton>
      </React.Fragment>
      )
    })
  }

  const warning = () => {
    return (
    <>
    <ErrorSpan style={{justifyContent: 'center', marginBottom: '20px'}}>
        <ExclamationCircle style={{marginRight: '10px'}}/>
          Please Select a Category
        <ExclamationCircle style={{marginLeft: '10px'}}/>
    </ErrorSpan>
    </>
    )
  }
  return (
    <>
    <EmptyDiv/>
    <div style={{textAlign: 'center', margin: '0rem 5rem 5rem 5rem'}}>
      {/* {console.log(products)} */}
      {showTitle && <MenuH1>Create {category.name}</MenuH1>}
      {showSelect && <MenuH1>Select Category</MenuH1>}
      {renderCategoryButtons()}
      {showWarning && warning()}
      <CreateCategoryItem catId={category.id} products={products} createProduct={createProduct} setShowWarning={setShowWarning}/>
    </div>
    </>
  )
}
export default CreateProduct