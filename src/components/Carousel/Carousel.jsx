import React,{useState} from "react";
import "./Carousel.css";
import { motion } from "framer-motion";
const Carousel = ({ img }) => {
 
    const allimg = [
        "https://cdn.shopify.com/s/files/1/0087/2159/6471/files/featured_image_all_purpose_straw_lid.jpg?v=1722843700",
        "https://cdn.shopify.com/s/files/1/0087/2159/6471/files/BACK2SCHOOL_-_Home_-_Desktop.jpg?v=1723463239",
        "thrid element"
    ]
   


  return (
    <>
      <div className="image-container">
        <div className="hero-text">
          <motion.div
            className="mytext"
            initial={{ opacity: 0, y: "40%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1>New term New Essential</h1>
            <p>Exclusive Offers that make it easier to sip and study!</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <button>SHOP NOW</button>
          </motion.div>
        </div>
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default Carousel;
