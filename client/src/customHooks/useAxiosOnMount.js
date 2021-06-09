import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxiosOnMount = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try{
      let res = await axios.get(url)
      setData(res.data)
      setError(null)
      setLoading(false)
    }catch (err){
      setError(err)
      setLoading(false)
    }
  }

  return {data, loading, error}
}
export default useAxiosOnMount