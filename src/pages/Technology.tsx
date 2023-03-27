import React from 'react'
import "../styles/Technology.css"
import vehicle from "../assets/technology/image-launch-vehicle-portrait.jpg"

const Technology = () => {
  return (
    <div className='grid-container grid-container--technology flow'>
       <h1 className="numbered-title numbered-title-technology">
        <span>03</span> space launch 101
      </h1>
      <div className="number-indicators ff-serif">
        <button className='active'>
          <span>1</span>
        </button>
        <button>
          <span>2</span>
        </button>
        <button>
          <span>3</span>
        </button>
      </div>
      <article className="technology-details flow">
              <header className="flow flow--space-small">
                <h2 className="fs-500 text-accent ff-sans-cond uppercase letter-spacing-3">the terminology...</h2>
                <p className="fs-700 uppercase ff-serif">Launch Vehicle</p>
              </header>
              <p className='text-accent'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch</p>
            </article>
            <img src={vehicle} alt="launch vehicle" />
    </div>
  )
}

export default Technology