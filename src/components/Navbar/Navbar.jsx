import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch(
          "https://todo-app-gma4.onrender.com/api/users/profile",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (res.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoggedIn(false);
      }
    };

    checkUser();
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={assets.profile_icon} alt="Profile" />
        <p>Todo</p>
      </div>

      {/* Navigation */}
      <ul className={`tabs ${menu ? "activeTab" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/task"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Task
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/create"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Create
          </NavLink>
        </li>

        <li>
          {isLoggedIn ? (
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Profile
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login
            </NavLink>
          )}
        </li>
      </ul>

      {/* Menu */}
      <div className="menu" onClick={() => setMenu(!menu)}>
        {!menu ? (
          <img src={assets.Menu} alt="Menu" />
        ) : (
          <img src={assets.Close} alt="Close" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;