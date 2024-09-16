import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Dashsidebar.css";
import { BsCartDash } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { FaUserCog, FaChartPie } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Dashsidebar = ({ activemenu, changemenu }) => {
  axios.defaults.withCredentials = true;
  const { page } = useParams();
  const checkpage = () => {
    switch (page) {
      case "main":
        return changemenu(1);
      case "allproducts":
        return changemenu(2);
      case "orders":
        return changemenu(3);
      case "allusers":
        return changemenu(4);
      case "addproduct":
        return changemenu(6);
      case "category":
        return changemenu(7);
      default:
        return changemenu(1);
    }
  };

  const navigate = useNavigate();
  const logout = async () => {
    try {
      localStorage.removeItem("authToken");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkpage();
  }, []);
  return (
    <>
      <div className="dashsidebar-res">
        <Link to="/">
          <h3 style={{ marginBottom: "1rem" }}>Logo </h3>
        </Link>

        <ul>
          <li
            onClick={() => {
              changemenu(1)
              navigate("/dashboard/main");
            }}
            className={activemenu === 1 ? "active" : null}
          >
            <h1>
              <FaChartPie />
            </h1>
          </li>
          <li
            onClick={() => {
              changemenu(2);
              navigate("/dashboard/allproducts")
            }}
            className={activemenu === 2 ? "active" : null}
          >
            <h1>
              <AiOutlineProduct />
            </h1>
          </li>

          <li
            onClick={() => {
              changemenu(7);
              navigate("/dashboard/category")
            }}
            className={activemenu === 7 ? "active" : null}
          >
            <h1>
              <AiOutlineProduct />
            </h1>
          </li>
          <li
            onClick={() => {
              changemenu(6);
              navigate("/dashboard/addproduct")
            }}
            className={activemenu === 6 ? "active" : null}
          >
            <h1>
              <AiOutlineProduct />
            </h1>
          </li>

          <li
            onClick={() => {
              changemenu(3);
              navigate("/dashboard/orders");
            }}
            className={activemenu === 3 ? "active" : null}
          >
            <h1>
              <BsCartDash />
            </h1>
          </li>
          <li
            onClick={() => {
              changemenu(4);
              navigate("/dashboard/allusers");
            }}
            className={activemenu === 4 ? "active" : null}
          >
            <h1>
              <FaUserCog />
            </h1>
          </li>

          <li onClick={logout} className={activemenu === 5 ? "active" : null}>
            <h1>
              <IoMdExit />
            </h1>
          </li>
        </ul>
      </div>

      <div className="dashsidebar">
        <Link to="/">
          <h2 style={{ marginBottom: "1rem" }}>Mylogo</h2>
        </Link>

        <ul>
          <li
            onClick={() => {
              changemenu(1);
              navigate("/dashboard/main");
            }}
            className={activemenu === 1 ? "active" : null}
          >
            <FaChartPie /> Dashboard
          </li>
          <li
            onClick={() => {
              changemenu(2);
              navigate("/dashboard/allproducts");
            }}
            className={activemenu === 2 ? "active" : null}
          >
            <AiOutlineProduct />
            All Products
          </li>

          <li
            onClick={() => {
              changemenu(7);
              navigate("/dashboard/category");
            }}
            className={activemenu === 7 ? "active" : null}
          >
            <AiOutlineProduct />
            Category
          </li>
          <li
            onClick={() => {
              changemenu(6);
              navigate("/dashboard/addproduct");
            }}
            className={activemenu === 6 ? "active" : null}
          >
            <AiOutlineProduct />
            Add Product
          </li>

          <li
            onClick={() => {
              changemenu(3);
              navigate("/dashboard/orders");
            }}
            className={activemenu === 3 ? "active" : null}
          >
            <BsCartDash /> Orders
          </li>
          <li
            onClick={() => {
              changemenu(4);
              navigate("/dashboard/allusers");
            }}
            className={activemenu === 4 ? "active" : null}
          >
            <FaUserCog /> Users
          </li>

          <li onClick={logout} className={activemenu === 5 ? "active" : null}>
            <IoMdExit /> Sign Out
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dashsidebar;
