import React from 'react'
import "../styles/Login.css"

const Login = () => {
  return (
    <div className='main-container'>
    <div className="login--container container">
      <h1 className="uppercase fs-700 ff-serif letter-spacing-1 text-accent">
        Login
      </h1>
      <form className="form flex fs-500 ff-sans-cond letter-spacing-2">
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
      </form>
        <button className="login-btn uppercase text-accent letter-spacing-2" type="submit" onClick={()=>{}}>
          Login
        </button>
        <p className='signup text-accent'>Don't have an account? sign up</p>
    </div>
    </div>
  )
}

export default Login