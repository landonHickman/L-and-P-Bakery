import React from 'react'
// import {Card, CardGroup, ListGroupItem, Button} from 'react-bootstrap'

const FlippedCard = ({product}) => {
  console.log(product)
  // const handleFlip = () =>{}
  return(
    <div>
      <h1>worked</h1>
    </div>
  )
  // return (
  //           <Card style={{ width: "16rem", margin: "5px" }}>
  //             <Card.Img variant="top" src={product.image} />
  //             <Card.Title>{product.name}</Card.Title>
  //             <Card.Subtitle>${product.price}</Card.Subtitle>
  //             <Card.Text>{product.description}</Card.Text>
  //             <ListGroupItem>
  //               {`Limited Time: ${product.limited_time}`}
  //             </ListGroupItem>
  //             <Button onClick={handleFlip}>Flip</Button>
  //           </Card>
  // )
}
export default FlippedCard