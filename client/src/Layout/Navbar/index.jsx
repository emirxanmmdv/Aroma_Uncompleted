import React from "react";
import { CiSearch, CiShop } from "react-icons/ci";
import "./index.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbarContents">
          <div className="logo">
            <img src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp" />
          </div>
          <div className="bars">
            <ul>
              <li>
                <NavLink to={"/"} className={"home"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Pages</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="icons">
            <CiSearch />
            <CiShop />
          </div>
          <button className="buyNowBtn">Buy Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
