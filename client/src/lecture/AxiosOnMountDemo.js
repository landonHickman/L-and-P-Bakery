import React from 'react'
import StringifyJSON from '../components/StringifyJSON'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'

const AxiosOnMountDemo = () => {
  const {data, loading, error} = useAxiosOnMount('/api/tests')

  if(loading) return <p>loading </p>
  if(error) return <p>error occured</p>

  return(
    <div style={{textAlign: 'center'}}>
      <h1>Tests</h1>
      <StringifyJSON json={data}/>
    </div>
  )
}

export default AxiosOnMountDemo