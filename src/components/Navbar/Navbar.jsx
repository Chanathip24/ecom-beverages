import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { CiUser, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  axios.defaults.withCredentials = true; //for cookie
  const [navres, setnavres] = useState(false);
  const [isAuthen, setAuthen] = useState(false);

  const checkadmin = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_URL}/checkcookie`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      if (res.data.role === "ADMIN") setAuthen("ADMIN");
      if (res.data.role === "CUSTOMER") setAuthen("CUSTOMER");
    } catch (error) {
      console.log(error);
      setAuthen(false);
    }
  };
  useEffect(() => {
    checkadmin();
  }, []);
  return (
    <>
      <nav>
        <div className="nav-container container">
          <div className="nav-wrapper">
            <Link to="/" onClick={() => setnavres(false)}>
              <img
                src="//www.waterdrop.com/cdn/shop/files/Main_Logo_260x.svg?v=1703068377"
                alt=""
              />
            </Link>

            <ul>
              <li>Featured</li>
              <li>Flavors</li>
              <li>Bottle & Accessories</li>
              <li>Learn More</li>
            </ul>
          </div>

          <div
            className="burger"
            onClick={() => {
              setnavres(!navres);
            }}
          >
            {navres ? <IoMdCloseCircleOutline /> : <RxHamburgerMenu />}
          </div>
          {isAuthen ? (
            <div className="nav-account">
              <h4 style={{ color: "GREEN" }}>You are {isAuthen}</h4>
              <Link to="/dashboard">
                <p style={{ color: "black" }}>Dashboard</p>
              </Link>
              <span>
                <CiUser />
              </span>
              <span>
                <CiSearch />
              </span>
              <span>
                <IoBagOutline />
              </span>
            </div>
          ) : (
            <div className="nav-account">
              <Link to="/login">
                <p style={{ color: "black" }}>My account</p>
              </Link>
              <span>
                <CiUser />
              </span>
              <span>
                <CiSearch />
              </span>
              <span>
                <IoBagOutline />
              </span>
            </div>
          )}
        </div>

        {navres ? (
          <div className="resnav">
            <ul>
              <li>Featured</li>
              <li>Flavors</li>
              <li>Bottle & Accessories</li>
              <li>Learn More</li>
              <li>
                {isAuthen === "ADMIN" || isAuthen === "MEMBER" ? (
                  <Link to="/Dashboard">{isAuthen} Dashboard</Link>
                ) : (
                  <Link to="/login">Register</Link>
                )}
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
