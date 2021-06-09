import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import RenderData from '../components/RenderData'
import Spinner from '../components/Spinner'
import StringifyJSON from '../components/StringifyJSON'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'

const AxiosOnMountDemo = () => {
  const {data, loading, error} = useAxiosOnMount('/api/tests')

  if(loading) return <Spinner />
  if(error) return <ErrorMessage error={error}/>

  return(
    <div style={{textAlign: 'center'}}>
      <h1>RenderData Component</h1>
      <RenderData data={data} />
      <h1>StringifyJSON Component</h1>
      <StringifyJSON json={data}/>
    </div>
  )
}

export default AxiosOnMountDemo