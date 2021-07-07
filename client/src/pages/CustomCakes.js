import React from "react"
import {form, Card} from 'react-bootstrap'

const CustomCakes = () => {
  return (
    
    <div>
      <div class="customcake">
      
   </div>
      <h1>Custom Cakes</h1>
      <p>Select custom cake options below:</p>

      <Card className="text-center">
    <form>
    <select class="form-select form-select-lg mb-5" aria-label=".form-select-lg example">
      <option selected>Cake Flavor</option>
      <option value="1">Fruit</option>
      <option value="2">Strawberry</option>
      <option value="3">Tropical</option>
      <option value="4">Napolean</option>
      <option value="5">Peach</option>
      <option value="6">Durian</option>
      <option value="7">Coffee</option>
      <option value="8">Chocolate</option>
      <option value="9">Tiramisu</option>
      <option value="10">Cheesecake</option>
      <option value="11">Chestnut</option>
    </select>
    
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
      <option selected>Mousse Flavor</option>
      <option value="1">Strawberry</option>
      <option value="2">Mango</option>
      <option value="3">Coffee</option>
      <option value="4">Chocolate</option>
      <option value="5">None</option>
    </select>
    
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Triangle Cake Size</option>
      <option value="1">Vanilla</option>
      <option value="2">Green Tea</option>
      <option value="3">Taro</option>
      <option value="4">Coffee</option>
      <option value="4">Chocolate</option>
    </select>
  
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
      <option selected>Cake Size</option>
      <option value="1">6 inch</option>
      <option value="2">10 inch</option>
      <option value="3">Full sheet cake</option>
      <option value="4">Custom size cake</option>
    </select>
      
    <div class="form-floating">
      <textarea class="form-control" placeholder="Special order instructions" id="floatingTextarea"></textarea>
      <label for="floatingTextarea"></label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </Card>
    </div>
  
    // <Footer/>
  )}
   export default CustomCakes
