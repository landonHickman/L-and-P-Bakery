import React, {useState, useEffect} from 'react'
import axios from 'axios'

const HookDemo = () => {
  const [count, setCount] = useState(0)
  const [people, setPeople] = useState([])
  const [count1, setCount1] = useState(0)

  //componentWillMount
  useEffect(()=>{
    console.log('useEffect getPeople')
    getPeople()

    // componentWillUnmount
    return () => {
      // remove eventlistener, timers, animations
      // real lif example 
      // polling, clear a setInterval
      console.log('unmounted')
    }
  }, [])
  
  //componentWillUpdate
  useEffect(()=>{
    console.log('useEffect setCount')
    if(count > 10){
      setCount(0)
    }
  }, [count])
  
  const getPeople = async () => {
    console.log('getting people')
    try {
      let res = await axios.get(`https://reqres.in/api/users?delay=1`)
      console.log('res.data.data',res.data.data)
      setPeople(res.data.data)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h3>HookDemo Here</h3>
      <p>People count: {people.length}</p>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count + 1)}>Click to add to Count</button>
      <p>Count 1: {count1}</p>
      <button onClick={()=>setCount1(count1 + 1)}>Click to add to Count 1</button>
    </div>
  )
}


export default HookDemo