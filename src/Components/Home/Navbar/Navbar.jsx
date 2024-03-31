import React from "react";
import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="header">
        <div className="newHeader">
          <nav className="nav">
            <div className="logo">
              <img
                src="src\Components\Home\image\logo_master.png"
                alt="logo_master"
              />
            </div>
            <div className="list">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/service">Service</NavLink>
                </li>

                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Navbar;
