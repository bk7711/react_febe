import React from "react";
import { FaUser, FaHome, FaComment } from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <h3>FEBE</h3>
      <ul className="nav-icons">
        <li>
          <FaHome />
        </li>
        <li>
          <FaComment />
        </li>
        <li>
          <FaUser />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
