import React, { useState } from "react";
import "./Navbar.css";
import { CiUser, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Announce from "../Announcemnet/Announce";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navres, setnavres] = useState(false);
  return (
    <>
      {navres ? null : <Announce />}
      <nav>
        <div className="nav-container container">
          <div className="nav-wrapper">
            <Link to="/" onClick={()=>setnavres(false)}>
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
          <div className="nav-account">
            <Link to="/login" onClick={()=>setnavres(false)}>
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
        </div>
        {navres ? (
          <div className="resnav">
            <ul>
              <li>Featured</li>
              <li>Flavors</li>
              <li>Bottle & Accessories</li>
              <li>Learn More</li>
              <li>
                <Link to="/login" onClick={()=>setnavres(false)}>สมัครสมาชิก</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
