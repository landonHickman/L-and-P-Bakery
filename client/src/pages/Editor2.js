import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import AboutPageEditor from "../components/AboutPageEditor";

const Editor2 = () => {
  useEffect(() => {
    getAboutPages();
  }, []);
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAboutPages = async () => {
    try{
      let res = await axios.get("/api/about_pages");
      setAbout(res.data[0]);
      setLoading(false)
      // console.log('About res.data',res.data[0]);
    }catch(err){
      console.log('inside catch getAboutPages', err)
      console.log('inside catch getAboutPages', err.response)
    }
  };

  if(loading) return <Spinner animation="border" size="lg" />

  return (
    <div>
      <AboutPageEditor about={about}/>
    </div>
  );
};
export default Editor2;
