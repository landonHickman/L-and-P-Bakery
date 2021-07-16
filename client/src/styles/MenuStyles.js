import { Card, Col, Button, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const styles= {
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  iconsLegend: {marginBottom: '4px', marginRight: '10px'},
  arrows: {cursor: 'pointer'},
}
export const MenuImgIcons = styled.div`
  display: flex;
  justify-content: space-between;
`
export  const MenuEditLegend = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const MenuH1 = styled.h1`
  margin-top: 20px;
`
export const MenuCol = styled(Col)`
  padding: 0px;
  margin: 10px 10px 20px 10px;
  display: flex;
  flex: 1;
  justify-content: center;
`
export const MenuCards = styled(Card)`
  width: 16rem;
  height: 100%;
  border: 1px black solid;
  border-radius: 4px;
`
export const MenuButton = styled(Button)`
  border-radius: 25px;
  border: 2px solid black;
  margin: 10px;
  margin-bottom: 50px;
  padding-right: 25px;
  padding-left: 25px;
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
  padding-top: 50px;
  margin-bottom: 0px;
`

export const MenuCardPrice = styled(Card.Subtitle)`
  margin-bottom: 25px;
  padding-top: 20px;
`