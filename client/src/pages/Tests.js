import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Tests = () => {
  //declares variable tests, setTests modifies tests and useState specifies the default value.
  const [tests, setTests] = useState([])

  //mounts component
  useEffect(()=>{
    //calls function
    getTests()
  },[])

  //function to get data and then set equal to setTests.
  const getTests = async () => {
    // try will go through code if it can and if not it will go to the catch.
    try{
      let res = await axios.get(`/api/tests`)
      setTests(res.data)
      //catch happens if try fails we put alerts in here so that we can find the issue and fix it.
    }catch (err){
      alert('err check console')
      console.log(err)
    }
  }
  
  //render array so that i don't have to check console to see if its working.
  //data we got from getTests rendered as jsx.
  const renderTests = () => {
    return tests.map(test=> {
      return (
        //each child in a list needs to have a unique key.
        <div key={test.id}>
          <h4>{test.name}</h4>
        </div>
      )
    })
  }

  //this is what shows up on the page.
  return(
    <div style={{textAlign: 'center'}}>
      <h1>Tests</h1>
      {renderTests()}
    </div>
  )
}

export default Tests