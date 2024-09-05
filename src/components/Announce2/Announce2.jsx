import React from "react";
import "./Announce2.css";
import { motion } from "framer-motion";
import { transform } from "framer-motion";
const Announce2 = () => {
  return (
    <div className="an2">
      <div className="textwrap">
        <motion.div
          className="an2text"
          initial={{ translateX: "100%" }}
          animate={{ translateX: "-100%" }}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <div className="textkub">
            <h1>
              <span>Daily Hidration,</span> made simple.
            </h1>
            <h1>
              <span>Daily Hidration,</span> made simple.
            </h1>
          </div>
          <div className="textkub">
            <h1>
              <span>Daily Hidration,</span> made simple.
            </h1>
            <h1>
              <span>Daily Hidration,</span> made simple.
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Announce2;
