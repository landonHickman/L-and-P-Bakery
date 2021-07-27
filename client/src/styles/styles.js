import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components'

export const PRIMARY_COLOR = 'steelblue';
export const TEXT_COLOR = 'black';
export const INV_TEXT_COLOR = 'white';
export const FONT_SIZES = { SMALL: '.5em', MEDIUM: "1em", MEDIUMV2: "1.2em", LARGE:'1.5em', LARGER: '2.0em'};
export const BORDER_RADIUS = '3px';
export const INV_PRIMARY_COLOR = 'white';
export const NAV_BACKGROUND = 'lightgrey';
export const WHITE_BACKGROUND = 'white';
// export const PADDING = '.25em 1em';
// export const PADDING_EVEN = '.5em';
// export const MEDIUM_SPACING = '.5em';
export const PADDING2_EVEN_LARGE = '1em';
// export const MARGIN = '1em';
export const SHADOW = '2px 2px 7px 1px #ddd'

export const ALERT_TEXT_COLOR = 'purple';
export const ALERT_BACKGROUND = 'pink';

export const WARN_TEXT_COLOR = 'darkorange';
export const WARN_BACKGROUND = 'lightyellow';

export const NOTIFY_TEXT_COLOR = 'darkblue';
export const NOTIFY_BACKGROUND = 'skyblue';

export const STRING_TEXT_COLOR = 'Green';
export const STRING_BACKGROUND = 'LightGreen';

export const BUTTON_TEXT_COLOR = '#662E9B';
export const BUTTON_BACKGROUND = '#43BCCD';

export const MAIN_CONTAINER = styled.div`
  border: 2px solid ${NAV_BACKGROUND};
  border-radius: ${BORDER_RADIUS};
  margin: 10px;
  padding: 20px;
`
export const btn = {
  blackButton: {backgroundColor: 'black', border: '1px solid black', fontWeight: '500'}
}
export const FormBackground ={
  background: '#EEEEEE',
  border: '0px',
}

export const CustomCakeBtn = styled(Button)`
width: 100%;
background-color: black;
border: 1px solid black;
font-weight: 500;
`
export const ErrorSpan = styled.span`
color: red;
display: flex;
align-items: center;
`
export const LoginMargin = styled.div`
margin: 0rem 5rem 0rem 5rem;
`
export const EmptyDiv = styled.div`
height: 116px;
`
export const CustomCakesControl = styled(Form.Control)`
margin-bottom: 15px !important;
border: 0px;
`
export const CustomCakesForm ={
  background: '#EEEEEE',
  marginBottom: '15px',
  border: '0px'
}
export const style = {
  carouselImage: {
    height: '500px', 
    width: '500px', 
    objectFit: 'cover'
  },
  ProductCardImage: {
    height: '200px', 
    objectFit: 'cover'
  } 
}