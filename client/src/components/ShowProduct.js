import axios from 'axios'
import React from 'react'
import { Button, Card, Dropdown, DropdownButton } from 'react-bootstrap'
import { ArrowClockwise, CaretLeftFill, CaretRightFill, Clock, StarFill } from 'react-bootstrap-icons'
import { MenuCol, MenuCards, MenuImgIcons, styles, MenuCardTitle, MenuCardPrice, ButtonDiv } from '../styles/MenuStyles'

const ShowProduct = ({prod, category, setShowEditForm, setShowCards, setProduct, products, sortByOrder}) => {


  // console.log(category.id)
  // console.log(products)

  const limitBoolean = (d) => {
    if (d.limited_time === true) {
      return <StarFill title="Limited Time" />;
    }
  };
  const SpecialBoolean = (d) => {
    if (d.special_item_carousel === true) {
      return <Clock />;
    }
  };
  const CarouselBoolean = (d) => {
    if (d.category_carousel === true) {
      return <ArrowClockwise />;
    }
  };

  const handleEditClick = (prod) => {
    // console.log('edit clicked',prod)
    setProduct(prod)
    setShowEditForm(true);
    setShowCards(false)
  };

  const deleteUpdate = async (p) => {
    try {
      await axios.put(`/api/categories/${category.id}/products/${p.id}`, {
        order: p.order - 1,
      });
      // console.log(res1.data.order)
    } catch (err) {
      console.log("inside deleteUpdate Catch", err);
      console.log("inside deleteUpdate Catch", err.response);
    }
  };

  const handleDelete = async (prod) => {
    let removedItem = products.filter((p) => p.id !== prod.id);
    let minusOrder = removedItem.map((r) => {
      if (r.order > prod.order) {
        return { ...r, order: r.order - 1 };
      }
      return r;
    });
    sortByOrder(minusOrder);
    await axios.delete(`/api/categories/${category.id}/products/${prod.id}`);
    // console.log('deleted',res.data)
    products.forEach((p) => {
      if (p.order > prod.order) {
        deleteUpdate(p);
      }
    });
  };


  const catLeftPut = async (c) => {
    try {
      await axios.put(`/api/categories/${category.id}/products/${c.id}`, {
        order: c.order - 1,
      });
    } catch (err) {
      console.log("Inside Catch catLeftPut", err);
      console.log("err.response", err.response);
    }
  };

  const prodLeftPut = async (p) => {
    try {
      await axios.put(`/api/categories/${category.id}/products/${p.id}`, {
        order: p.order + 1,
      });
    } catch (err) {
      console.log("Inside Catch prodLeftPut", err);
      console.log("err.response", err.response);
    }
  };

  const handleRight = (prod) => {
    let UpdatedItem = products.map((product) => {
      if (prod.order === products.length){
        return product
      }
      if (product.order === prod.order + 1) {
        return { ...product, order: product.order - 1 };
      }
      if (product.id === prod.id) {
        return { ...prod, order: prod.order + 1 };
      }
      return product;
    });
    sortByOrder(UpdatedItem);
    products.forEach((product) => {
      if (product.order === prod.order + 1) {
        catLeftPut(product);
      }
    });
    if (prod.order !== products.length){
      prodLeftPut(prod);
    }
  };

  const catRightPut = async (c) => {
    try {
      await axios.put(`/api/categories/${category.id}/products/${c.id}`, {
        order: c.order + 1,
      });
    } catch (err) {
      console.log("Inside Catch catRightPut", err);
      console.log("err.response", err.response);
    }
  };

  const prodRightPut = async (p) => {
    try {
      await axios.put(`/api/categories/${category.id}/products/${p.id}`, {
        order: p.order - 1,
      });
    } catch (err) {
      console.log("Inside Catch prodRightPut", err);
      console.log("err.response", err.response);
    }
  };

  const handleLeft = (prod) => {
    let UpdatedItem = products.map((product) => {
      if(prod.order === 1){
        return product
      }
      if (product.order === prod.order - 1) {
        return { ...product, order: product.order + 1 };
      }
      if (product.id === prod.id) {
        return { ...prod, order: prod.order - 1 };
      }
      return product;
    });
    sortByOrder(UpdatedItem);
    products.forEach((product) => {
      if (product.order === prod.order - 1) {
        catRightPut(product);
      }
    });
    if(prod.order !== 1){
      prodRightPut(prod);
    }
  };

  const catTopPut = async (c) => {
    try {
      await axios.put(`/api/categories/${category.id}/products/${c.id}`, {
        order: c.order + 1,
      });
    } catch (err) {
      console.log("Inside Catch catTopPut", err);
      console.log("err.response", err.response);
    }
  };

  const prodTopPut = async (p) => {
    try {
      await axios.put(`/api/categories/${category.id}/products/${p.id}`, {
        order: 1,
      });
    } catch (err) {
      console.log("Inside Catch prodTopPut", err);
      console.log("err.response", err.response);
    }
  };

  const handleTop = (prod) => {
    let UpdatedItem = products.map((product) => {
      if (product.id === prod.id) {
        return { ...prod, order: 1 };
      }
      if (product.order < prod.order) {
        return { ...product, order: product.order + 1 };
      }
      return product;
    });
    // console.log(UpdatedItem)
    sortByOrder(UpdatedItem);
    products.forEach((product) => {
      if (product.order < prod.order) {
        catTopPut(product);
      }
    });
    prodTopPut(prod);
  };

  const catBotPut = async (c) => {
    try {
      await axios.put(`/api/categories/${category.id}/products/${c.id}`, {
        order: c.order - 1,
      });
    } catch (err) {
      console.log("Inside Catch catBotPut", err);
      console.log("err.response", err.response);
    }
  };

  const prodBotPut = async (p) => {
    try {
      await axios.put(`/api/categories/${category.id}/products/${p.id}`, {
        order: products.length,
      });
    } catch (err) {
      console.log("Inside Catch prodBotPut", err);
      console.log("err.response", err.response);
    }
  };

  const handleBot = (prod) => {
    let UpdatedItem = products.map((product) => {
      if (product.id === prod.id) {
        return { ...prod, order: products.length };
      }
      if (product.order > prod.order) {
        return { ...product, order: product.order - 1 };
      }
      return product;
    });
    sortByOrder(UpdatedItem);
    products.forEach((product) => {
      if (product.order > prod.order) {
        catBotPut(product);
      }
    });
    prodBotPut(prod);
  };

  const card = () => {
    return(
      <MenuCol>
            <MenuCards>
              <Card.Img variant="top" src={prod.image} />
              <Card.ImgOverlay>
                <MenuImgIcons>
                  <div>
                    {limitBoolean(prod)}
                    {SpecialBoolean(prod)}
                    {CarouselBoolean(prod)}
                  </div>
                  <div>
                    <CaretLeftFill
                      style={styles.arrows}
                      onClick={(e) => handleLeft(prod)}
                    />
                    <CaretRightFill
                      style={styles.arrows}
                      onClick={(e) => handleRight(prod)}
                    />
                  </div>
                </MenuImgIcons>
              </Card.ImgOverlay>
              <Card.Body>
                <MenuCardTitle>{prod.name} {prod.order}</MenuCardTitle>
                <MenuCardPrice>
                  ${prod.price}
                </MenuCardPrice>
                {/* <Card.Text>{d.description}</Card.Text> */}
                <ButtonDiv>
                  <Button 
                    style={{ position: "relative" }}
                    variant="dark"
                    onClick={(e) => handleEditClick(prod)}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{ position: "relative" }}
                    variant="danger"
                    onClick={(e) => handleDelete(prod)}
                  >
                    Delete
                  </Button>
                  <DropdownButton
                    variant="outline-dark"
                    id="dropdown-basic-button"
                    title="Move"
                  >
                    <Dropdown.Item 
                    onClick={(e) => handleTop(prod)}
                    >
                      Top
                    </Dropdown.Item>
                    <Dropdown.Item 
                    onClick={(e) => handleBot(prod)}
                    >
                      Bottom
                    </Dropdown.Item>
                  </DropdownButton>
                </ButtonDiv>
              </Card.Body>
            </MenuCards>
          </MenuCol>
   
    )
  }
  return (
    <React.Fragment>
      
      { card()}
    </React.Fragment>
  )
}
export default ShowProduct