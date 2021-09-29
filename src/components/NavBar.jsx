import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">MODEL AGENCY</Link>
        </div>
        <div className="menu">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          MENU
        </div>
      </div>
    </div>
  );
};

export default NavBar;
