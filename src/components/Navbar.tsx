import React from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="primary-header">
      <div>
        <img src={logo} alt="space tourism logo" className="logo" />
      </div>
      <nav>
        <ul className="primary-navigation underline-indicators flex">
          <li className="active">
            <Link
              to="/"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span>00</span>Home
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span>01</span>Destination
            </Link>
          </li>
          <li>
            <Link
              to="/crew"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span>02</span>Crew
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
            >
              <span>02</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
