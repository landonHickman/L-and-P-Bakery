// https://react.semantic-ui.com/images/wireframe/short-paragraph.png
import React from 'react'
import { Dimmer, Loader as SemanticLoader, Image, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
const Spinner = () => {
    return (
    <SpinnerContainer>
      <Segment>
        <Dimmer>
          <SemanticLoader content='Loading'/>
        </Dimmer>
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>
    </SpinnerContainer>
    )
}

const SpinnerContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  margin: auto;
  width: auto;
  max-width: 650px;
`

export default Spinner