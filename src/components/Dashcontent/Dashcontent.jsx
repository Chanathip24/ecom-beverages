import React from "react";
import Dashchart from "./Dashdetails/Dashchart";
import Dashproducts from "./Dashdetails/Dashproducts";
import Dashorder from "./Dashdetails/Dashorder";
import Dashusers from "./Dashdetails/Dashusers";

const Dashcontent = ({ contentid }) => {
  return (
    <>
      {contentid === 1 ? <Dashchart /> : null}
      {contentid === 2 ? <Dashproducts /> : null}
      {contentid === 3 ? <Dashorder /> : null}
      {contentid === 4 ? <Dashusers /> : null}
    </>
  );
};

export default Dashcontent;
