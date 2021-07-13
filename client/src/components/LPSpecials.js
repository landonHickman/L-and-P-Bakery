import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Carousel } from 'react-bootstrap'

const LPSpecials = () => {

  const [specProducts, setSpecProducts] = useState([])

  useEffect(()=>{
    getLPSpecials()
  },[])

  const getLPSpecials = async () => {
    try{
      let res = await axios.get(`/api/all_special_products`)
      setSpecProducts(res.data)
      console.log(res.data)
    }catch (err){
      alert('err check console')
      console.log(err)
    }
  }
  
  const renderSpecProducts = () => {
    return specProducts.map((specProduct) => {
      return (
        <div key={specProduct.id}>
          <h3>{specProduct.name}</h3>
        </div>
      )
    })
  }
  return(
    <div>
      <h1>hello</h1>
      {renderSpecProducts()}
    </div>
  )
}

export default LPSpecials