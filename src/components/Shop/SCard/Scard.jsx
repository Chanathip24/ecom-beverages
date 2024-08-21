import React from "react";
import "./Scard.css";
import {motion} from 'framer-motion'
export const Scard = () => {
  return (
    <motion.div className="Scard"
    variants={{
      hidden: { y:40, opacity: 0 },
      visible: { y:0, opacity: 1 },
    }}
    transition={{ duration: 0.5 }}
    
    >
      <div className="mainimg">
        <img
          src="https://www.waterdrop.com/cdn/shop/files/All_purpose_bottles_Thermo_Straw_Lid_1L_black.png?v=1721238266&width=1200"
          alt=""
          width={350}
          className="scard-product"
        />
        <div className="additional">
          <p className="productdes1">NEW</p>
          {/* <p className="productdes2">LIMITED OFFER</p> */}
        </div>
      </div>
      <h3>All-Purpose Thermo Straw lit</h3>
      <div className="scard-detail">
            <p className="scard-price">$34.00</p>
            <p className="scard-desc">34 oz, 20 oz, 47 oz, 64 oz, 14 oz · Stainless Steel Bottle with Wide Opening · Straw Lid</p>
      </div>
    </motion.div>
  );
};
