import React from "react";
import "../styles/Navbar.css";
import logo from "./images/PRODname.png";
const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <div className="nav-logo">
          <img src={logo} alt=""></img>
        </div>

        <div className="navigation-menu">
          <ul>
            <li>
              <a href="#">PRODUCT</a>
            </li>
            <li>
              <a href="#">RESOURSES</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <a href="#">DEMO</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
