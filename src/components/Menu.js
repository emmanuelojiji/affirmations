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
          <div className="menu-icon-text-wrap">
            <i class="fas fa-headphones"></i>
            <span className="menu-option-text">Home</span>
          </div>
        </Link>
        <Link
          to="/library"
          class="menu-option active"
          onClick={() => {
            props.setCurrentPage("Home");
          }}
        >
          <div className="menu-icon-text-wrap">
            <i class="far fa-bookmark"></i>
            <span className="menu-option-text">Library</span>
          </div>
        </Link>
        <Link
          to="/signup"
          class="menu-option"
          onClick={() => {
            props.setCurrentPage("SignUp");
          }}
        >
          <div className="menu-icon-text-wrap">
            <i class="far fa-user"></i>
            <span className="menu-option-text">Account</span>
          </div>
        </Link>

        <Link
          to="/"
          class="menu-option active"
          onClick={() => {
            props.setCurrentPage("Home");
          }}
        >
          <div className="menu-icon-text-wrap">
            <i class="fas fa-headphones"></i>
            <span className="menu-option-text">Page</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
