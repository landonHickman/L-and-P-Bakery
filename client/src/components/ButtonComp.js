import React from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS, BUTTON_BACKGROUND, BUTTON_TEXT_COLOR, FONT_SIZES, INV_BUTTON_BACKGROUND, INV_BUTTON_TEXT_COLOR } from '../styles/styles'

const ButtonComp = (props) => {
  return (
    <Btn>{props.children}</Btn>
  )
}

const Btn = styled.button`
  border: 2px solid ${BUTTON_TEXT_COLOR};
  border-radius: ${BORDER_RADIUS};
  color: ${BUTTON_TEXT_COLOR};
  background-color: ${BUTTON_BACKGROUND};
  font-size: ${FONT_SIZES.MEDIUM};
  cursor: pointer;
  padding: 3px 5px 3px 5px;

  &:hover {
    font-size: ${FONT_SIZES.MEDIUMV2};
  }
`

export default ButtonComp