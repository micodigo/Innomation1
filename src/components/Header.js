import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo6.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" className="logo-img" />
      </div>
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
        </ul>
      </nav>
    </header>
  );
}
