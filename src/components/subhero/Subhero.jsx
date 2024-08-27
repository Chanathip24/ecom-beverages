import React from "react";
import Subcard from "../Subcard/Subcard";
import "./Subhero.css";
import { motion } from "framer-motion";
const Subhero = () => {
  return (
    <>
      <div className="container">
        <motion.div
          className="Subhero"
          initial="hidden"
          whileInView="visible"
          transition={{
            staggerChildren: 0.2,
            delayChildren: 0.1,
          }}
          viewport={{ once: true }}
        >
          <div className="Subhero-wrapper">
            <Subcard />
            <Subcard />
            <Subcard />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Subhero;
