import React from "react";
import "./Scard.css";
import {motion} from 'framer-motion'
export const Scard = ({product}) => {
  
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
          src={product.imgurl}
          alt=""
          width={320}
          className="scard-product"
        />
        <div className="addcart">
          + ADD TO CART
        </div>
        <div className="additional">
          <p className="productdes1">NEW</p>
          {/* <p className="productdes2">LIMITED OFFER</p> */}
        </div>
      </div>
      <h3>{product.title}</h3>
      <div className="scard-detail">
            <p className="scard-price">${product.price}</p>
            <p className="scard-desc">{product.desc}</p>
      </div>
    </motion.div>
  );
};
