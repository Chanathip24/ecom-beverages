import React, { useState } from "react";
import { Scard } from "../Shop/SCard/Scard";
import "./Topseller.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Topseller = () => {
  const allshop = [
    {
      id : 1,
      title: "Black Summer Glass",
      price : "21.30",
      desc : "Black Durable Borosilicate Glass Bottle",
      imgurl: "image/s1.webp"
    },
    {
      id : 2,
      title: "2+2 Limited Summer Set",
      price : "27.30",
      desc : "Real Tea, Vitamin and Zero Sugar",
      imgurl: "image/s2.webp"
    },
    {
      id : 3,
      title: "ICED TEA Set",
      price : "44.30",
      desc : "Vitamin and Zero Sugar",
      imgurl: "image/S3.webp"
    },
    {
      id : 4,
      title: "Summer Glass",
      price : "29.30",
      desc : "Durable Borosilicate Glass Bottle",
      imgurl: "image/S4.webp"
    },
  ];
  const [active, setActive] = useState(1);
  const set = (id) => {
    setActive(id);
  };
  return (
    <>
    
    
      <div className="mt-2 container-fluid">
        <div className="topseller container">
          <h1>Discover our Top Sellers</h1>
          <div className="topsellercata">
            <button
              key={1}
              className={active === 1 ? "active" : ""}
              onClick={() => set(1)}
            >
              Back to School
            </button>
            <button
              key={2}
              className={active === 2 ? "active" : ""}
              onClick={() => set(2)}
            >
              Limited Summer Collection
            </button>
            <button
              key={3}
              className={active === 3 ? "active" : ""}
              onClick={() => set(3)}
            >
              Bestsellers
            </button>
          </div>
        </div>
        <div className="card-container container-fluid" >
          <motion.div
            className="card-wrapper"
            initial="hidden" //คุม animation ของ children
            whileInView="visible" //อันนี้ด้วย
            transition={{
              staggerChildren: 0.2,
              delayChildren: 0.2,
            }}
            key={`${active}+i`}
            viewport={{ once: true }}
          >
            {allshop.map((item, index) => (
              <Scard product={item} key={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Topseller;
