import styled from 'styled-components'
import { BORDER_RADIUS, FONT_SIZES, STRING_BACKGROUND, STRING_TEXT_COLOR } from '../styles/styles'

const StringifyJSON = ({json}) => {
  return (
    <Container>
    <pre>{JSON.stringify(json, null, 2)}</pre>
    </Container>
  )
}

const Container = styled.div`
  border: 2px solid ${STRING_TEXT_COLOR};
  border-radius: ${BORDER_RADIUS};
  color: ${STRING_TEXT_COLOR};
  background-color: ${STRING_BACKGROUND};
  font-size: ${FONT_SIZES.LARGE};
  width: auto;
  max-width: 600px;
  margin: auto;
  margin-bottom: 10px;
`

export default StringifyJSON