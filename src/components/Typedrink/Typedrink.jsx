import React, { useState } from "react";
import "./Typedrink.css";
import { Scard } from "../Shop/SCard/Scard";
import { Subcarousel } from "../Subcarousel/Subcarousel";
const Typedrink = () => {
  const [active, setActive] = useState(1);
  const allshop = [
    {
      title: "Black Summer Glass",
      price: "21.30",
      desc: "Black Durable Borosilicate Glass Bottle",
      imgurl: "image/s1.webp",
    },
    {
      title: "2+2 Limited Summer Set",
      price: "27.30",
      desc: "Real Tea, Vitamin and Zero Sugar",
      imgurl: "image/s2.webp",
    },
  ];
  const set = (id) => {
    setActive(id);
  };
  return (
    <>
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
      <div className="container typedrink">
        <div className="content-wrapper">
          <Subcarousel />
          <div className="card" >
            {allshop.map((item, index) => (
              <Scard product={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Typedrink;
