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
          <img src={picon} alt="" className="p-icon" /> +91-9958075432
        </i>
        <Link to="/ContactUs" className="header-sub-contact">
          Contact Us
        </Link>
      </div>

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

        {/* Social Links */}
        <div className="social">
          <a
            href="https://www.facebook.com/"
            target="blank"
            className="social-link"
          >
            <i className="ti-facebook social-icon"></i>
          </a>

          <a href="https://twitter.com/" target="blank" className="social-link">
            <i className="ti-twitter social-icon"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="blank"
            className="social-link"
          >
            <i className="ti-instagram social-icon"></i>
          </a>

          <a
            href="https://www.skype.com"
            target="blank"
            className="social-link"
          >
            <i className="ti-skype social-icon"></i>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="blank"
            className="social-link"
          >
            <i className="ti-linkedin social-icon"></i>
          </a>
        </div>
      </div>
    </>
  );
}
