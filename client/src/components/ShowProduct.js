import axios from 'axios'
import React, {useState} from 'react'
import { Button, Card, Dropdown, DropdownButton } from 'react-bootstrap'
import { ArrowClockwise, CaretLeftFill, CaretRightFill, Clock, StarFill } from 'react-bootstrap-icons'
import EditProduct from '../pages/EditProduct'
import { MenuCol, MenuCards, MenuImgIcons, styles, MenuCardTitle, MenuCardPrice, ButtonDiv } from '../styles/MenuStyles'

const ShowProduct = ({prod, category, setShowEditForm, setShowCards, setProduct, products, sortByOrder}) => {


  console.log(category.id)
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

  const handleClick = (prod) => {
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
                      // onClick={(e) => handleLeft(d)}
                    />
                    <CaretRightFill
                      style={styles.arrows}
                      // onClick={(e) => handleRight(d)}
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
                    onClick={(e) => handleClick(prod)}
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
                    // onClick={(e) => handleTop(d)}
                    >
                      Top
                    </Dropdown.Item>
                    <Dropdown.Item 
                    // onClick={(e) => handleBot(d)}
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