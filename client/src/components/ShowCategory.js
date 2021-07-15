import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Dropdown,
  ListGroup,
  ListGroupItem,
  Row,
  DropdownButton,
} from "react-bootstrap";
import axios from "axios";
import CreateCategoryItem from "./CreateCategoryItem";
import EditProduct from "../pages/EditProduct";
import {
  ArrowClockwise,
  CaretLeftFill,
  CaretRightFill,
  Clock,
  StarFill,
} from "react-bootstrap-icons";

const ShowCategory = (props) => {
  const { catId } = props;
  const [catItems, setCatItems] = useState([]);
  const [productId, setProductId] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showItems, setShowItems] = useState(true);
  const [showCreate, setShowCreate] = useState(true);

  useEffect(() => {
    getCatItem();
  }, []);

  const sortByOrder = (o) => {
    let orderedProducts = o.sort((a, b) => {
      return a.order - b.order;
    });
    setCatItems(orderedProducts);
    // console.log(orderedProducts)
  };

  const getCatItem = async () => {
    try {
      let res = await axios.get(`/api/categories/${catId}/products`);
      // console.log('res.data',res.data)
      sortByOrder(res.data);
    } catch (err) {
      console.log("inside getCat catch", err);
      console.log("inside getCat catch", err.response);
    }
  };

  const createCat = (item) => {
    // console.log('item',item)
    setCatItems([...catItems, item]);
  };

  const deleteUpdate = async (cat) => {
    try {
      await axios.put(`/api/categories/${catId}/products/${cat.id}`, {
        order: cat.order - 1,
      });
      // console.log(res1.data.order)
    } catch (err) {
      console.log("inside deleteUpdate Catch", err);
      console.log("inside deleteUpdate Catch", err.response);
    }
  };
  const handleDelete = async (prod) => {
    let removedItem = catItems.filter((c) => c.id !== prod.id);
    let minusOrder = removedItem.map((cat) => {
      if (cat.order > prod.order) {
        return { ...cat, order: cat.order - 1 };
      }
      return cat;
    });
    sortByOrder(minusOrder);
    await axios.delete(`/api/categories/${catId}/products/${prod.id}`);
    // console.log('deleted',res.data)
    catItems.forEach((cat) => {
      if (cat.order > prod.order) {
        deleteUpdate(cat);
      }
    });
  };

  const handleClick = (id) => {
    // console.log(id)
    setShowEditForm(!showEditForm);
    setProductId(id);
    setShowItems(!showItems);
    setShowCreate(!showCreate);
  };

  const catTopPut = async (c) => {
    try {
      await axios.put(`/api/categories/${catId}/products/${c.id}`, {
        order: c.order + 1,
      });
    } catch (err) {
      console.log("Inside Catch catTopPut", err);
      console.log("err.response", err.response);
    }
  };

  const prodTopPut = async (p) => {
    try {
      await axios.put(`/api/categories/${catId}/products/${p.id}`, {
        order: 1,
      });
    } catch (err) {
      console.log("Inside Catch prodTopPut", err);
      console.log("err.response", err.response);
    }
  };

  const handleTop = (prod) => {
    let UpdatedItem = catItems.map((c) => {
      if (c.id === prod.id) {
        return { ...prod, order: 1 };
      }
      if (c.order < prod.order) {
        return { ...c, order: c.order + 1 };
      }
      return c;
    });
    // console.log(UpdatedItem)
    sortByOrder(UpdatedItem);
    catItems.forEach((cat) => {
      if (cat.order < prod.order) {
        catTopPut(cat);
      }
    });
    prodTopPut(prod);
  };

  const catBotPut = async (c) => {
    try {
      await axios.put(`/api/categories/${catId}/products/${c.id}`, {
        order: c.order - 1,
      });
    } catch (err) {
      console.log("Inside Catch catBotPut", err);
      console.log("err.response", err.response);
    }
  };

  const prodBotPut = async (p) => {
    try {
      await axios.put(`/api/categories/${catId}/products/${p.id}`, {
        order: catItems.length,
      });
    } catch (err) {
      console.log("Inside Catch prodBotPut", err);
      console.log("err.response", err.response);
    }
  };

  const handleBot = (prod) => {
    let UpdatedItem = catItems.map((c) => {
      if (c.id === prod.id) {
        return { ...prod, order: catItems.length };
      }
      if (c.order > prod.order) {
        return { ...c, order: c.order - 1 };
      }
      return c;
    });
    sortByOrder(UpdatedItem);
    catItems.forEach((cat) => {
      if (cat.order > prod.order) {
        catBotPut(cat);
      }
    });
    prodBotPut(prod);
  };

  const catLeftPut = async (c) => {
    try {
      await axios.put(`/api/categories/${catId}/products/${c.id}`, {
        order: c.order + 1,
      });
    } catch (err) {
      console.log("Inside Catch catLeftPut", err);
      console.log("err.response", err.response);
    }
  };

  const prodLeftPut = async (p) => {
    try {
      await axios.put(`/api/categories/${catId}/products/${p.id}`, {
        order: p.order - 1,
      });
    } catch (err) {
      console.log("Inside Catch prodLeftPut", err);
      console.log("err.response", err.response);
    }
  };

  const handleLeft = (prod) => {
    let UpdatedItem = catItems.map((c) => {
      if (c.order === prod.order - 1) {
        return { ...c, order: c.order + 1 };
      }
      if (c.id === prod.id) {
        return { ...prod, order: prod.order - 1 };
      }
      return c;
    });
    sortByOrder(UpdatedItem);
    catItems.forEach((cat) => {
      if (cat.order === prod.order - 1) {
        catLeftPut(cat);
      }
    });
    prodLeftPut(prod);
  };

  const catRightPut = async (c) => {
    try {
      await axios.put(`/api/categories/${catId}/products/${c.id}`, {
        order: c.order - 1,
      });
    } catch (err) {
      console.log("Inside Catch catRightPut", err);
      console.log("err.response", err.response);
    }
  };

  const prodRightPut = async (p) => {
    try {
      await axios.put(`/api/categories/${catId}/products/${p.id}`, {
        order: p.order + 1,
      });
    } catch (err) {
      console.log("Inside Catch prodRightPut", err);
      console.log("err.response", err.response);
    }
  };

  const handleRight = (prod) => {
    let UpdatedItem = catItems.map((c) => {
      if (c.order === prod.order + 1) {
        return { ...c, order: c.order - 1 };
      }
      if (c.id === prod.id) {
        return { ...prod, order: prod.order + 1 };
      }
      return c;
    });
    sortByOrder(UpdatedItem);
    catItems.forEach((cat) => {
      if (cat.order === prod.order + 1) {
        catRightPut(cat);
      }
    });
    prodRightPut(prod);
  };

  const limitBoolean = (d) => {
    if (d.limited_time === true) {
      return <StarFill />;
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
  const renderProducts = () => {
    return catItems.map((d) => {
      return (
        <div key={d.id}>
          <Card style={{ width: "16rem", margin: "5px" }}>
            <Card.Img variant="top" src={d.image} />
            <Card.ImgOverlay>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  {limitBoolean(d)}
                  {SpecialBoolean(d)}
                  {CarouselBoolean(d)}
                </div>
                <div>
                  <CaretLeftFill onClick={(e) => handleLeft(d)} />
                  <CaretRightFill onClick={(e) => handleRight(d)} />
                </div>
              </div>
            </Card.ImgOverlay>
            <Card.Body>
              <Card.Title>{d.name}</Card.Title>
              <Card.Subtitle>${d.price}</Card.Subtitle>
              <Card.Text>{d.description}</Card.Text>
              <ListGroup className="list-group-flush"></ListGroup>
              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

              <Button
                style={{ position: "relative" }}
                variant="dark"
                onClick={(e) => handleClick(d.id)}
                >
                Edit
              </Button>
              <Button
                style={{ position: "relative" }}
                variant="danger"
                onClick={(e) => handleDelete(d)}
                >
                Delete
              </Button>
              <DropdownButton variant="outline-dark" id="dropdown-basic-button" title="Move">
                <Dropdown.Item onClick={(e) => handleTop(d)}>Top</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleBot(d)}>
                  Bottom
                </Dropdown.Item>
              </DropdownButton>
                </div>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return (
    <div style={{textAlign: 'center'}}>
      {showCreate && (
        <CreateCategoryItem
          catId={catId}
          createCat={createCat}
          catItems={catItems}
        />
      )}
      {showEditForm && (
        <EditProduct
          productId={productId}
          catId={catId}
          setCatItems={setCatItems}
          catItems={catItems}
        />
      )}
      
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <CardGroup>
          <Row lg={4} md={3} sm={2} style={{display: 'flex', justifyContent: 'center'}}>
            {showItems && renderProducts()}
          </Row>
        </CardGroup>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <StarFill />
      Limited Time
      <Clock />
      Special Bakery Items
      <ArrowClockwise />
        Category Carousel
      </div>
    </div>
  );
};

export default ShowCategory;
