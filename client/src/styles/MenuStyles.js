import { Card, Col, Button, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const styles= {
  menuButton: {
    borderRadius: '25px',
    border: '1px solid black',
    margin: '10px',
    marginBottom: '50px',
    paddingRight: '25px',
    paddingLeft: '25px',
  },
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cardTitle: {paddingTop: "50px", marginBottom: "0px"},
  cardPrice: { marginBottom: "25px", paddingTop: "20px" },
  legend: {display: 'flex', alignItems: 'center'},
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
  justifyContent: center;
`
export const MenuCards = styled(Card)`
  width: 16rem !important;
  height: 25rem !important;
  border: 1px black solid;
  border-radius: 5px;
`
export const MenuButton = styled(Button)`
  border-radius: 25px;
  border: 1px solid black;
  margin: 10px;
  margin-bottom: 50px;
  padding-right: 25px;
  padding-left: 25px;
`

export const ButtonDiv = styled.div`
display: flex;
justify-content: space-evenly;
flex: auto;
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
