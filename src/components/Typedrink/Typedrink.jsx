import React, { useState } from "react";
import "./Typedrink.css";
import { Scard } from "../Shop/SCard/Scard";
import { Subcarousel } from "../Subcarousel/Subcarousel";
const Typedrink = () => {
  const [active, setActive] = useState(1);
  const set = (id) => {
    setActive(id);
  };
  return (
    <>
        <div className="typedrink">
      <div className="button">
        <button
          key={1}
          className={active === 1 ? "active" : ""}
          onClick={() => set(1)}
        >
          Microdrinks
        </button>
        <button
          key={2}
          className={active === 2 ? "active" : ""}
          onClick={() => set(2)}
        >
            Microlyte
        </button>
        <button
          key={3}
          className={active === 3 ? "active" : ""}
          onClick={() => set(3)}
        >
            Microenergy
        </button>
        <button
          key={4}
          className={active === 4 ? "active" : ""}
          onClick={() => set(4)}
        >
            Microtea
        </button>
      </div>
      <div className="content-wrapper">
        <Subcarousel/>
        <div className="card">
          <Scard />
          <Scard />
        </div>
        
      </div>
      
    </div>
    <hr />
    </>

  );
};

export default Typedrink;
