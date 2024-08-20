import React from "react";
import Subcard from "../Subcard/Subcard";
import "./Subhero.css";
import {motion} from 'framer-motion'
const Subhero = () => {
  return (
    <>
      <motion.div className="Subhero"
      initial={{opacity : 0}}
      whileInView={{opacity:1}}
      transition={{
        duration:0.5,
        staggerChildren:0.5,
    }}
      >
        <div className="Subhero-wrapper">
          <Subcard />
          <Subcard />
          <Subcard />
        </div>
      </motion.div>
    </>
  );
};

export default Subhero;
