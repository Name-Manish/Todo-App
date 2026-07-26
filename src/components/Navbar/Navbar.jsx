import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={assets.profile_icon} alt="Profile" />
        <p>Todo</p>
      </div>

      {/* Navigation Links */}
      <ul className={`tabs ${menu ? "activeTab" : ""}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/task" className={({ isActive }) => (isActive ? "active" : "")}>
            Task
          </NavLink>
        </li>

        <li>
          <NavLink to="/create" className={({ isActive }) => (isActive ? "active" : "")}>
            Create
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
            Login
          </NavLink>
        </li>
      </ul>

      {/* Menu Icon */}
      <div className="menu" onClick={() => setMenu(!menu)}>
        {/* <img src={assets.Menu} alt="Menu" /> */}

        {!menu?<img src={assets.Menu} alt="Menu" />:<img src={assets.Close} alt="Menu" />}
        {/* <img src={assets.Close} alt="Menu" /> */}
      </div>
    </nav>
  );
};

export default Navbar;