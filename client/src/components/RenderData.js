import React from 'react'

//pass in data i.e. data={data} then it outputs a mapped over array in jsx.
const RenderData = ({data}) => {
  return data.map(d => {
    return (
      <div key={d.id}>
        <h4>{d.name}</h4>
      </div>
    )
  })
}
export default RenderData