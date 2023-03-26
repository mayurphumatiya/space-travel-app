import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import close from "../assets/shared/icon-close.svg";
import ham from "../assets/shared/icon-hamburger.svg"
import "../styles/Navbar.css"

interface NavbarProps {
  toggleTab: Number,
  setToggleTab: React.Dispatch<React.SetStateAction<Number>>,
}

const Navbar = (props:NavbarProps) => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleTabs = (index: Number) => {
   props.setToggleTab(index);
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
              className={`${props.toggleTab === 0 && "active"} ff-sans-cond uppercase text-white letter-spacing-2`}
              onClick={() => handleTabs(0)}
            >
              <span>00</span>Home
            </Link>
          
          
            <Link
              to="/destination"
              className={`${props.toggleTab === 1 && "active"} ff-sans-cond uppercase text-white letter-spacing-2`}
              onClick={() => handleTabs(1)}
            >
              <span>01</span>Destination
            </Link>
          
          
            <Link
              to="/crew"
              className={`${props.toggleTab === 2 && "active"} ff-sans-cond uppercase text-white letter-spacing-2`}
              onClick={() => handleTabs(2)}
            >
              <span>02</span>Crew
            </Link>
          
          
            <Link
              to="/technology"
              className={`${props.toggleTab === 3 && "active"} ff-sans-cond uppercase text-white letter-spacing-2`}
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
