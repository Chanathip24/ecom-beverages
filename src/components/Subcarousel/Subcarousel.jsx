import React from "react";
import "./Subcarousel.css";
export const Subcarousel = () => {
  return (
    <div className="subcarousel">
      <div className="img-wrapper">
        <img
          src="https://cdn.shopify.com/s/files/1/0087/2159/6471/files/carousel-with-banner-mobile-ice-tea-peach-waterdrop.png?v=1712762429"
          width={660}
          alt=""
        />
        <div className="subca-content">
          <h1>For your daily</h1>
          <h2>Hydration</h2>
          <div className="subca-button">
            <button>ZERO SUGAR</button>
            <button>VALUABLE VITAMINS</button>
            <button>MANY FLAVORS</button>
            <button>SUSTAINABLE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
