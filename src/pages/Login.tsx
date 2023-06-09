import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ApiRoutes from "../utils/ApiRoutes.json";
import { toast } from "react-toastify";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = login;

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const persistLogin = (token: string, user: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
  };

  const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${ApiRoutes.url.production}${ApiRoutes.api.LOGIN}`,
        login
      );
      if (response.data.status) {
        persistLogin(response.data.token, JSON.stringify(response.data.user));
        navigate("/");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="main-container">
      <div className="login--container container">
        <h1 className="uppercase fs-700 ff-serif letter-spacing-1 text-accent">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="form flex fs-500 ff-sans-cond letter-spacing-2"
        >
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button
            className="login-btn uppercase text-accent letter-spacing-2"
            type="submit"
          >
            Login
          </button>
        </form>

        <Link to="/register" className="sign-up-btn">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
