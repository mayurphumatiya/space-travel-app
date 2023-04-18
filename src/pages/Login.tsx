import React, { useState } from 'react'
import "../styles/Login.css"

const Login = () => {
const [login, setLogin] = useState({
  email:"",
  password:""
});

const {email, password} = login

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  setLogin({...login, [e.target.name]: e.target.value})
}

const handleSubmit = (e:React.SyntheticEvent<EventTarget>) =>{
  e.preventDefault();
  console.log(login)
}

  return (
    <div className='main-container'>
    <div className="login--container container">
      <h1 className="uppercase fs-700 ff-serif letter-spacing-1 text-accent">
        Login
      </h1>
      <form onSubmit={handleSubmit} className="form flex fs-500 ff-sans-cond letter-spacing-2">
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleChange} />
        <label>Password:</label>
       <input type="password" name="password" value={password} onChange={handleChange} />
        <button className="login-btn uppercase text-accent letter-spacing-2" type="submit">
          Login
        </button>
      </form>
      <p className='sign-up-btn'>Don't have an account? Sign up</p>
    </div>
    </div>
  )
}

export default Login