import React, { useState, useEffect } from "react";
import logo from "../assets/shared/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import close from "../assets/shared/icon-close.svg";
import ham from "../assets/shared/icon-hamburger.svg";
import "../styles/Navbar.css";
import { clearUserData } from "../utils/ClearUserData";
import axios from "axios";
import ApiRoutes from "../utils/ApiRoutes.json";
import { useDispatch } from "react-redux";
import { overlappin } from "../Store/Slices/OverlapSlice";
import {toast} from "react-toastify"

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const loggedUser = localStorage.getItem("token");

  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loct = location.pathname;

  const hamburgerClick = () => {
    setOpenNav(!openNav);
  };

  const closeMobileNav = () => {
    setOpenNav(false);
  };

  const logoutHandler = async () => {
    try {
      const user = localStorage.getItem("user");
      const headers = {
        token: localStorage.getItem("token"),
      };
      const response = await axios.post(
        `${ApiRoutes.url.local}${ApiRoutes.api.LOGOUT}`,
        user,
        { headers: headers }
      );
      if (response.status === 201) {
        clearUserData();
        navigate("/login");
        toast.success(response.data.message)
      }
      setOpenNav(false);
    } catch (e : any) {
      toast.error(e.response.data.message)
    }
  };

  useEffect(() => {
    dispatch(overlappin(openNav))
  }, [openNav]); //eslint-disable-line


  return (
    <header className="primary-header flex">
      <div>
        <img src={logo} alt="space tourism logo" className="logo" />
      </div>
      <img
        src={openNav ? close : ham}
        alt="navImg"
        className="mobile-nav-toggle"
        onClick={hamburgerClick}
        aria-controls="primary-navigation"
      />
      <nav>
        {/* @ts-ignore */}
        <ul style={{ transform: openNav && "translateX(0)" }}
          id="primary-navigation"
          className="primary-navigation underline-indicators flex"
        >
          <Link
            to="/"
            className={`${
              loct === "/" && "active"
            } ff-sans-cond uppercase text-white letter-spacing-2`}
            onClick={closeMobileNav}
          >
            <span>00</span>Home
          </Link>

          <Link
            to="/destination"
            className={`${
              loct === "/destination" && "active"
            } ff-sans-cond uppercase text-white letter-spacing-2`}
            onClick={closeMobileNav}
          >
            <span>01</span>Destination
          </Link>

          <Link
            to="/crew"
            className={`${
              loct === "/crew" && "active"
            } ff-sans-cond uppercase text-white letter-spacing-2`}
            onClick={closeMobileNav}
          >
            <span>02</span>Crew
          </Link>

          <Link
            to="/technology"
            className={`${
              loct === "/technology" && "active"
            } ff-sans-cond uppercase text-white letter-spacing-2`}
            onClick={closeMobileNav}
          >
            <span>03</span>Technology
          </Link>
          {!loggedUser ? (
            <Link
              to="/login"
              className={`${
                loct === "/login" && "active"
              } ff-sans-cond uppercase text-white letter-spacing-2`}
              onClick={closeMobileNav}
            >
              <span>04</span>login
            </Link>
          ) : (
            <li
              className={`ff-sans-cond uppercase text-white letter-spacing-2`}
              onClick={logoutHandler}
            >
              <span>04</span>logout
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
