import React from "react";
import Subcard from "../Subcard/Subcard";
import "./Subhero.css";
const Subhero = () => {
  return (
    <>
      <div className="Subhero">
        <div className="Subhero-wrapper">
          <Subcard />
          <Subcard />
          <Subcard />
        </div>
      </div>
    </>
  );
};

export default Subhero;
