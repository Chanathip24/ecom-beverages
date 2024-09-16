import React from "react";
import "./Component.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Dashproductcard = () => {
  const navigate = useNavigate();
  const goedit = (id) => {
    navigate("/dashboard/product/edit/" + id);
  };
  return (
    <div className="dashproductcard">
      <img
        src="https://static.vecteezy.com/system/resources/previews/036/573/453/original/a-can-of-coca-cola-drink-isolated-free-png.png"
        alt=""
      />
      <div className="dashproductcard-title">
        <p className="dashproductcard-pname">Product Name</p>
        <p className="dashproductcard-pprice">359 baht</p>
      </div>

      <div className="dashproductcard-button">
        <button
          onClick={
            () => goedit(10) //ex id ==10
          }
        >
          <FaPencilAlt /> Edit
        </button>
        <h2>
          <RiDeleteBin6Line />
        </h2>
      </div>
    </div>
  );
};

export default Dashproductcard;
