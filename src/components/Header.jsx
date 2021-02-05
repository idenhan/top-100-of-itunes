import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/itunesLogo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <span className="logo">
            <img src={logo} alt="Logo" />
            <h1>THOI</h1>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
