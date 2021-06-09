import React from 'react'
import ButtonComp from '../components/ButtonComp'
import FormattedMessage from '../components/FormattedMessage'
import AxiosOnMountDemo from '../lecture/AxiosOnMountDemo'
import HookDemo from '../lecture/HookDemo'

const Examples = () => {
  return (
    <div>
      <h1>Examples Here</h1>
      <ButtonComp>Button Component</ButtonComp>
      <h3>Formatted Message Component</h3>
      <FormattedMessage type='alert'>
        <p>Error</p>
        </FormattedMessage>
      <FormattedMessage type='warn'>
        <p>Warning</p>
        </FormattedMessage>
      <FormattedMessage>
        <p>Default</p>
        </FormattedMessage>
      <HookDemo />
      <h1>Axios on Mount</h1>
      <AxiosOnMountDemo />
    </div>
  )
}


export default Examples