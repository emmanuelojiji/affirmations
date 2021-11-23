import "./Menu.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../logo.svg";
const Menu = (props) => {
  return (
    <div className="Menu-container">
      <div className="Menu">
        <Link
          to="/"
          class="menu-option active"
          onClick={() => {
            props.setCurrentPage("Home");
          }}
        >
          <span className="menu-option-text">Home</span>
        </Link>
        <Link
          to="/signup"
          class="menu-option"
          onClick={() => {
            props.setCurrentPage("SignUp");
          }}
        >
          <span className="menu-option-text">Account</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
