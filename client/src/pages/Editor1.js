import React from "react";
import FooterEditor from "../components/FooterEditor";
import GridEditor2 from "../components/GridEditor2";
import GridEditor1 from "../components/GridEditor1";
import LandingPageEditor from "../components/LandingPageEditor";

const Editor1 = () => {
  return (
    <div>
        <LandingPageEditor/>
        <GridEditor1/>
        <GridEditor2/>
        <FooterEditor/>
    </div>
  );
};



export default Editor1;
