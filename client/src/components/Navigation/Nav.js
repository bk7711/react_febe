import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHome, FaComment } from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <h3>FEBE</h3>
      <ul className="nav-icons">
        <li>
          <Link to="/home">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/products">
            <FaComment />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUser />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
