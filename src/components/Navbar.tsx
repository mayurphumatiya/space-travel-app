import React from 'react'
import logo from "../assets/shared/logo.svg"

const Navbar = () => {
  return (
    <header className='primary-header'>
        <div>
            <img src={logo} alt="logo" />
        </div>
         <nav>
                        <ul className="primary-navigation underline-indicators flex">
                            <li className="active"><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>00</span>Home</a></li>
                            <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>01</span>Destination</a></li>
                            <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>02</span>Crew</a></li>
                            <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>02</span>Technology</a></li>
                        </ul>
                    </nav>
    </header>
  )
}

export default Navbar