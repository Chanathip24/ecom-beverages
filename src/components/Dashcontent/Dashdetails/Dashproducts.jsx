import React from "react";
import Dashproductcard from "../Dashcomponent/Dashproductcard";

const Dashproducts = () => {
  return (
    <>
      <div className="pd-1">
        <div className="dashproducts bg-white rounded pd-1">
          <div className="dashproducts-top">
            <h2>All products</h2>
            <div>
              <input type="text" placeholder="Search product" />
              <select name="" id="">
                <option value="">Filter</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="dashproducts-products">
            <Dashproductcard />
            <Dashproductcard />
            <Dashproductcard />
            <Dashproductcard />
            <Dashproductcard />
            <Dashproductcard />
            <Dashproductcard />
            <Dashproductcard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashproducts;
