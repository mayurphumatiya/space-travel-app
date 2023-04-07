import React, { useState } from 'react'
import "../styles/Login.css"

const Login = () => {
const [login, setLogin] = useState({
  email:"",
  password:""
})

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  setLogin({...login,[e.target.name]: e.target.value});
}

  return (
    <div className='main-container'>
    <div className="login--container container">
      <h1 className="uppercase fs-700 ff-serif letter-spacing-1 text-accent">
        Login
      </h1>
      <form className="form flex fs-500 ff-sans-cond letter-spacing-2">
        <label>Email:</label>
        <input type="email" name="email" value={login.email} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={login.password} onChange={handleChange} />
      </form>
        <button className="login-btn uppercase text-accent letter-spacing-2" type="submit" onClick={()=>{console.log(login)}}>
          Login
        </button>
        <p className='signup text-accent'>Don't have an account? sign up</p>
    </div>
    </div>
  )
}

export default Login