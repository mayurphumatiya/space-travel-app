import React, { useState } from 'react'
import "../styles/Login.css"

const Login = () => {
const [email, setEmail] = useState<string>("");
const [otp, setOtp] = useState("");
const [getOtp, setGetOtp] = useState<boolean>(false);


  return (
    <div className='main-container'>
    <div className="login--container container">
      <h1 className="uppercase fs-700 ff-serif letter-spacing-1 text-accent">
        Login / Register
      </h1>
      <form className="form flex fs-500 ff-sans-cond letter-spacing-2">
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
       {!getOtp && <button className='login-btn uppercase text-accent letter-spacing-2' onClick={()=>setGetOtp(true)}>Get OTP</button>}
       {getOtp &&
       <>
        <label>OTP:</label>
       <input type="number" name="otp" value={otp} onChange={(e)=>setOtp(e.target.value)} />
        <button className="login-btn uppercase text-accent letter-spacing-2" type="submit" onClick={()=>{console.log(email,otp)}}>
          Login
        </button>
        </>}
      </form>
    </div>
    </div>
  )
}

export default Login