import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { motion } from "framer-motion";
const Carousel = ({ img }) => {
  const allimg = [
    "https://cdn.shopify.com/s/files/1/0087/2159/6471/files/featured_image_all_purpose_straw_lid.jpg?v=1722843700",
    "https://cdn.shopify.com/s/files/1/0087/2159/6471/files/BACK2SCHOOL_-_Home_-_Desktop.jpg?v=1723463239",
  ];

  const [index, setIndex] = useState(0);

  //next carousel
  const gonext = () => {
    setIndex((prev) => {
      if (prev === allimg.length - 1) return 0;
      return prev + 1;
    });
  };

  //back carousel
  const goback = () => {
    setIndex((prev) => {
      if (prev === 0) return allimg.length - 1;
      return prev - 1;
    });
  };
  useEffect(() => {
    const myinterval = setInterval(() => {
      gonext();
    }, 5000);
    return () => clearInterval(myinterval);
  }, []);
  return (
    <>
      <div className="carousel">
        <div className="carousel-arrow">
          
        </div>
        <div
          className="image-container"
          style={{ translate: `${-100 * index}%` }}
        >
          <div className="hero-text">
            <motion.div
              className="mytext"
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h1>New term New Essential</h1>
              <p>Exclusive Offers that make it easier to sip and study!</p>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <button>SHOP NOW</button>
            </motion.div>
          </div>
          <img src={img} alt="" />
        </div>

        <div
          className="image-container"
          style={{ translate: `${-100 * index}%` }}
        >
          <div className="hero-text">
            <motion.div
              className="mytext"
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h1>Carousel2 Title</h1>
              <p>test2 carousel!</p>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <button>SHOP NOW</button>
            </motion.div>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0087/2159/6471/files/BACK2SCHOOL_-_Home_-_Desktop.jpg?v=1723463239"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
