import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import picon from "../img/phone-icon.png";
import "./Header.scss";
import { useState } from "react";
import "../themify-icons.css";

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
              <Link to="/" className="navbar-links-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className="navbar-links-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Services" className="navbar-links-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className="navbar-links-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/Services" className="navbar-links-link">
                Services
              </Link>
            </li>
          </ul>
        </nav>
        <div className="social">
          <a href="">
            <i className="ti-facebook social-icon"></i>
          </a>
          <a href="">
            <i className="ti-twitter social-icon"></i>
          </a>
          <a href="">
            <i className="ti-instagram social-icon"></i>
          </a>
          <a href="">
            <i className="ti-skype social-icon"></i>
          </a>
        </div>
      </div>
    </>
  );
}
