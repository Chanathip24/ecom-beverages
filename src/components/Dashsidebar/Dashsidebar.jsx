import React from "react";
import { Link } from "react-router-dom";
import "./Dashsidebar.css";
import { BsCartDash } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { FaUserCog, FaChartPie } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Dashsidebar = ({ activemenu, changemenu }) => {
    axios.defaults.withCredentials = true
    

    const navigate = useNavigate()
    const logout = async()=>{
        try {
            localStorage.removeItem('authToken')
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="dashsidebar">
      <Link to="/">
        <h2 style={{ marginBottom: "1rem" }}>Mylogo</h2>
      </Link>

      <ul>
        <li
          onClick={() => {
            changemenu(1);
          }}
          className={activemenu === 1 ? "active" : null}
        >
          <FaChartPie /> Dashboard
        </li>
        <li
          onClick={() => {
            changemenu(2);
          }}
          className={activemenu === 2 ? "active" : null}
        >
          <AiOutlineProduct /> Product
        </li>
        <li
          onClick={() => {
            changemenu(3);
          }}
          className={activemenu === 3 ? "active" : null}
        >
          <BsCartDash /> Order
        </li>
        <li
          onClick={() => {
            changemenu(4);
          }}
          className={activemenu === 4 ? "active" : null}
        >
          <FaUserCog /> Users
        </li>
        <li
          onClick={logout}
          className={activemenu === 5 ? "active" : null}
        >
          <IoMdExit /> Sign Out
        </li>
      </ul>
    </div>
  );
};

export default Dashsidebar;
