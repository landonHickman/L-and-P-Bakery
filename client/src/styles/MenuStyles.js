import { Card, Col, Button, Row, Image, Container } from 'react-bootstrap'
import styled from 'styled-components'

export const styles= {
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  icons: {marginRight: '5px', height: '16px'},
  iconsLegend: {marginBottom: '4px', marginRight: '5px', height: '16px'},
  arrows: {cursor: 'pointer'},
  
  
}
export const MenuImgIcons = styled.div`
  display: flex;
  justify-content: space-between;
`
export  const MenuEditLegend = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0px 0px 0px;
`
export  const MenuLegend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0px 0px 0px;
  font-size: 1rem;
  font-weight: 500;
`
export const MenuH1 = styled.h1`
  margin-top: 20px;
  font-size: 3.25rem;
  font-weight: 300;
`
export const MenuCol = styled(Col)`
  padding: 0px;
  margin: 10px 10px 20px 10px;
  display: flex;
  flex-shrink: 0;
  width: 100%;
  justify-content: center;
  
`

export const MenuCards = styled(Card)`
  width: 16rem;
  height: 100%;
  border: 1px black solid;
  border-radius: 4px;
  cursor: pointer;
  @keyframes enlarge {
    from {
      box-shadow: 0px 0px 0px black;
    }
    to {
      box-shadow: -2px 1px 10px black;
    }
  }
  :hover {
    animation: enlarge 300ms;
    animation-fill-mode: forwards;
  }
`
export const MenuEditCards = styled(Card)`
  width: 16rem;
  height: 100%;
  border: 1px black solid;
  border-radius: 4px;
  text-align: center;
`

export const MenuButton = styled(Button)`
  border-radius: 25px;
  border: 2px solid black;
  margin: 10px;
  margin-bottom: 50px;
  padding-right: 25px;
  padding-left: 25px;
  font-size: 1rem;
  font-weight: 500;
`

export const ButtonDiv = styled.div`
display: flex;
justify-content: space-evenly;
flex: auto;
margin-bottom: 25px;
`
export const MenuRow = styled(Row)`
  display: flex;
  justify-content: center;
`

export const MenuCardTitle = styled(Card.Title)`
  padding-top: 40px;
  margin-bottom: 0px;
  font-size: 1.625rem;
  font-weight: 500;
`

export const MenuCardPrice = styled(Card.Subtitle)`
  margin-bottom: 35px;
  padding-top: 20px;
  font-size: 1.125rem;
  font-weight: 400;
`
export const RightColProductShow = styled(Col)`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 3.75rem 0rem 7rem;
`
export const LeftColProductShow = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
`
export const ProductImg = styled(Image)`
  flex-shrink: 0; 
  min-width: 100%; 
  min-height: 100%
`
export const ProductContainer = styled(Container)`
padding: "0px"
`
export const CardImgOverlayStyled = styled(Card.ImgOverlay)`

display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
padding: 0px;
`
export const MarginDiv = styled.div`
  margin: 0rem 11vw 5vh 11vw;
`
export const FlippedCardTitle = styled(Card.Title)`
  padding: 0px 5px 0px 5px;
  max-width: 254px;
  font-size: 1.625rem;
  font-weight: 500;
`
export const FlippedCardPrice = styled(Card.Subtitle)`
  font-size: 1.125rem;
  font-weight: 400;
`

// export const MenuLegend = styled.div`
//   font-size
// `