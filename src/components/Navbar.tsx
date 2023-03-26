import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import close from "../assets/shared/icon-close.svg";
import ham from "../assets/shared/icon-hamburger.svg"
import "../styles/Navbar.css"

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const hamburgerClick = () =>{
    setOpenNav(!openNav);
  }

  const closeNav=()=>{
    setOpenNav(false)
  }


  return (
    <header className="primary-header flex">
      <div>
        <img src={logo} alt="space tourism logo" className="logo" />
      </div>
      <img src={openNav ? close : ham} alt="navImg" className="mobile-nav-toggle"  onClick={hamburgerClick} aria-controls="primary-navigation" />
      <nav>
         {/* @ts-ignore */}
        <ul id="primary-navigation" style={{transform: openNav && "translateX(0)"}} className="primary-navigation underline-indicators flex">
          <li className="active">
            <Link
              to="/"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              onClick={closeNav}
            >
              <span>00</span>Home
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              onClick={closeNav}
            >
              <span>01</span>Destination
            </Link>
          </li>
          <li>
            <Link
              to="/crew"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              onClick={closeNav}
            >
              <span>02</span>Crew
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              onClick={closeNav}
            >
              <span>03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
