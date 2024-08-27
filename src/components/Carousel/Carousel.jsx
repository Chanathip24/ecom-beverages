import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { AnimatePresence, motion } from "framer-motion";

//arrow icon
import { IoIosArrowDropright } from "react-icons/io";
const Carousel = () => {
  const allimg = [
    {
      id: 1,
      title: "New term new Essential",
      description: "Exclusive Offers that make it easier to sip and study!",
      img: "image/2.webp",
    },
    {
      id: 2,
      title: "Carousel 2",
      description: "Exclusive Offers that make it easier to sip and study! 2",
      img: "image/1.webp",
    },
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
      <div className="carouselcontainer container-fluid">
        <div className="carousel">
          <div className="carousel-arrow">
            <IoIosArrowDropright onClick={gonext} />
          </div>
          {allimg.map((item, key) => (
            <div
            key={key}
              className="image-container"
              style={{ translate: `${-100 * index}%` }}
            >
              <div className="hero-text">
                <motion.div
                  className="mytext"
                  key={`${index}-key`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </motion.div>

                <motion.div
                  className="mytext"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  key={index}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  <button>SHOP NOW</button>
                </motion.div>
              </div>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
