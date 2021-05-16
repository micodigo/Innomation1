import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import picon from "../img/phone-icon.png";
import "./Header.scss";
import { useState } from "react";
export default function Header() {
  const [navbar, setnavbar] = useState(false);
  const headerHandler = () => {
    if (window.scrollY >= 150) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  window.addEventListener("scroll", headerHandler);
  return (
    <>
      <div className="header-sub">
        <div className="logo">
          <img src={logo} alt="" className="logo-img" />
        </div>
        <i className="header-sub-phone">
          <img src={picon} alt="" className="p-icon" /> +919876346722
        </i>
        <Link to="/ContactUs" className="header-sub-contact">
          Contact Us
        </Link>
      </div>
      <hr className="header-partition" />
      <div
        className={navbar ? "header-main header-main-scroll" : "header-main"}
      >
        <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className="link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Services" className="link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className="link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/Services" className="link">
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
