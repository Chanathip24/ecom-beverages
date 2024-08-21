import React, { useState } from "react";
import { Scard } from "../Shop/SCard/Scard";
import "./Topseller.css";
import { motion } from "framer-motion";
const Topseller = () => {
  const buttonactive = {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "white",
    border: "1.5px solid black",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 350,
  };
  const button = {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "white",
    border: "1.5px solid #808080",
    color: "#808080",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 350,
  };
  const [active, setActive] = useState(1);
  const set = (id) => {
    setActive(id);
  };
  return (
    <>
      <div className="topseller">
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
      <div className="card-container">
        <motion.div
          className="card-wrapper"
          initial="hidden" //คุม animation ของ children
          whileInView="visible" //อันนี้ด้วย
          transition={{
            staggerChildren: 0.2,
            delayChildren: 0.3,
          }}
          viewport={{ once: true }}
        >
          <Scard />
          <Scard />
          <Scard />
          <Scard />
        </motion.div>
      </div>

      <hr />
    </>
  );
};

export default Topseller;
