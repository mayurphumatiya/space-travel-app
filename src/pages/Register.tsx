import React, { useState } from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [register, setRegister] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    console.log(register);
  };

  return (
    <div className="main-container">
      <div className="register--container container">
        <h1 className="uppercase fs-700 ff-serif letter-spacing-1 text-accent">
          Register
        </h1>
        <form
          onSubmit={handleSubmit}
          className="form flex fs-500 ff-sans-cond letter-spacing-2"
        >
            <div className="form-div flex" style={{ width:"100%"}}>
            <div className="form-align flex">
            <label>First name:</label>
            <input
              type="text"
              name="first_name"
              value={register.first_name}
              onChange={handleChange}
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={handleChange}
            />
            </div>
            <div className="form-align flex">
            <label>Last name:</label>
            <input
              type="text"
              name="last_name"
              value={register.last_name}
              onChange={handleChange}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={register.password}
              onChange={handleChange}
            />
            </div>
            </div>
          <button
            className="login-btn uppercase text-accent letter-spacing-2"
            type="submit"
          >
            Register
          </button>
        </form>
        <Link to="/login" className="sign-up-btn">
          Already have an account? login
        </Link>
      </div>
    </div>
  );
};

export default Register;
