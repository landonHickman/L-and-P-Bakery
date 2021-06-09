// https://react.semantic-ui.com/images/wireframe/short-paragraph.png
import React from 'react'
import { Dimmer, Loader as SemanticLoader, Image, Segment } from 'semantic-ui-react'
const Spinner = () => {
    return (
    <Segment>
      <Dimmer active >
        <SemanticLoader content='Loading'/>
      </Dimmer>
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
    )
}
export default Spinner