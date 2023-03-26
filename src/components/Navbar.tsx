import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import close from "../assets/shared/icon-close.svg";
import ham from "../assets/shared/icon-hamburger.svg"
import "../styles/Navbar.css"

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [toggleTab, setToggleTab] = useState<Number>(1);

  const handleTabs = (index: Number) => {
    setToggleTab(index);
    setOpenNav(false)
  };

  const hamburgerClick = () =>{
    setOpenNav(!openNav);
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
          
            <Link
              to="/"
              className={`${toggleTab === 0 && "active"} ff-sans-cond uppercase text-white letter-spacing-2`}
              onClick={() => handleTabs(0)}
            >
              <span>00</span>Home
            </Link>
          
          
            <Link
              to="/destination"
              className={`${toggleTab === 1 && "active"} ff-sans-cond uppercase text-white letter-spacing-2`}
              onClick={() => handleTabs(1)}
            >
              <span>01</span>Destination
            </Link>
          
          
            <Link
              to="/crew"
              className={`${toggleTab === 2 && "active"} ff-sans-cond uppercase text-white letter-spacing-2`}
              onClick={() => handleTabs(2)}
            >
              <span>02</span>Crew
            </Link>
          
          
            <Link
              to="/technology"
              className={`${toggleTab === 3 && "active"} ff-sans-cond uppercase text-white letter-spacing-2`}
              onClick={() => handleTabs(3)}
            >
              <span>03</span>Technology
            </Link>
          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
