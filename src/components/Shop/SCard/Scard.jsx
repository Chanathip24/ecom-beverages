import React from "react";
import "./Scard.css";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
export const Scard = ({ product }) => {

  return (
    <>

      <motion.div className="Scard"
        variants={{
          hidden: { y: 40, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.5 }}

      >
        <Link to={`/product/${product.id}`}>
          <div className="mainimg">
            <img
              src={product.imgurl}
              alt=""
              width={320}
              className="scard-product"
            />
            <div className="addcart" style={{color: "black"}}>
              + ADD TO CART
            </div>
            <div className="additional">
              <p className="productdes1">NEW</p>
              {/* <p className="productdes2">LIMITED OFFER</p> */}
            </div>
          </div>
        </Link>

        <h3>{product.title}</h3>
        <div className="scard-detail">
          <p className="scard-price">${product.price}</p>
          <p className="scard-desc">{product.desc}</p>
        </div>
      </motion.div>


    </>

  );
};
