import React, { useState, useEffect, Component } from "react";
import { Card, Spinner, Button } from "react-bootstrap";
import Axios from "axios";
import Footer from "../components/Footer"

// const Menu = () => {
//   //const [productId, categoryId] = props;
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);

//   useEffect(() =>{
//     getCategories()
//     //getProducts()
//   }, [])

//   const getCategories = async () => {
//     try {
//       let res = await Axios.get(
//         `/api/categories`
//       );
//       setCategories(res.data);
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//     }
//   };

// }
// export default Menu;

class Menu extends Component {
  state = {
    name: []
  }
  
  componentDidMount() {
    Axios.get(`/api/categories`)
      .then(res => {
        console.log(res)
        this.setState({
          name: res.data
        })
      })
  }

  render() {
    const { name } = this.state
    const nameList = name.length ? (
      name.map(name => {
        return (
          <div key={name.id}>
            <div alignment='center'>
              <Button variant="outline-primary">{name.name}</Button>
            </div>
          </div>
        );
      })
    ) : (
        <div className="center">Nothing to show</div>
      )
    return (
      <div className="container">
        <h4 className="center">Menu</h4>
        {nameList}
        <br/>
        <Footer />
      </div>
      
    );
  }
}
 
export default Menu;

// import React, { useState, useEffect } from "react";
// import CardGroup from "react-bootstrap/CardGroup";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Axios from "axios";
// import Footer from "../components/Footer";

// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   //const [products, setProduct] = useState([]);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     getCategories();
//     getProducts();
//   }, []);

  

//   const getCategories = () => {
//     Axios.get(`/api/categories`)
//       .then((res) => {
//         setCategories(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const getProducts = () => {
//     Axios.get("/api/products")
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => {
//         console.error(err)
//       });
//   };

//   const findProductsByCategory = () => {
//     let productCategoryIds = [];
//     products.map((product) => {
//       productCategoryIds.push(product.category_id);
//     });
//     return productCategoryIds;
//   };

//   const renderCategories = () => {
//     let productCategoryIds = findProductsByCategory();
//     return categories.map((category) => {
//       let singleCategoryIdArray = productCategoryIds.filter(
//         (id) => id === category.id
//       );
//       return (
//         <div>
//           <Button variant="outline-primary" onClick={() => setShow(!show)}>
//             {category.name}
//           </Button>
//           {show ? (
//             <Card key={category.id}>
//               <Card.Body>
//                 <Card.Title>{category.name}</Card.Title>
//                 <Card.Text>{singleCategoryIdArray.length} Products</Card.Text>
//               </Card.Body>
//             </Card>
//           ) : null}
//         </div>
//       );
//     });
//   };

//   return (
//     <>
//       <div className="Menu">
//         <Card>{renderCategories()}</Card>
//       </div>
//       <br/>
//       <Footer />
//     </>
//   );
// };

// export default Categories;