import React, {useEffect, useState} from "react";
import FooterEditor from "../components/FooterEditor";
import GridEditor2 from "../components/GridEditor2";
import GridEditor1 from "../components/GridEditor1";
import LandingPageEditor from "../components/LandingPageEditor";
import axios from 'axios'
import { Spinner } from "react-bootstrap";
import GridEditor3 from "../components/GridEditor3";

const Editor1 = () => {
  const [landingPage, setLandingPage] = useState([])
  const [footer, setFooter] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axiosCalls()
  },[])

  const axiosCalls = async()=> {
    try{

      let res = await axios.get(`/api/landing_pages`)
      let res1 = await axios.get(`/api/footers`)
      setLandingPage(res.data)
      setFooter(res1.data)
      setLoading(false)
      // console.log('landing Page',res.data)
      // console.log('footer',res1.data)
    }catch(err){
      console.log('Inside Catch axiosCalls',err)
      console.log('Inside Catch axiosCalls',err.response)
    }
  }
  if(loading) return <Spinner animation="border" size="lg" />
  return (
    <div>
        <LandingPageEditor landing={landingPage[0]}/>
        <GridEditor1 landing={landingPage[0]}/>
        <GridEditor2 landing={landingPage[0]}/>
        <GridEditor3 landing={landingPage[0]}/>
        <FooterEditor footer={footer[0]}/>
    </div>
  );
};



export default Editor1;
