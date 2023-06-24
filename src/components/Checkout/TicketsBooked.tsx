import React from 'react'
import "../../styles/TicketsBooked.css"

const TicketsBooked = () => {
  return (
    <>
    <div className='main-container'>
    <div className='dialog-book'>
        <h1 className='main-heading uppercase fs-700 ff-serif letter-spacing-1 text-white'>Congratulations🎉</h1>
        <p className='main-heading uppercase fs-600 ff-sans-cond letter-spacing-3 text-accent'>Your tickets are booked! We're excited for your upcoming journey. </p>
        <p className='main-heading uppercase fs-500 ff-sans-cond letter-spacing-3 text-accent'>Please check your registered email for the tickets</p>
        <span className='main-heading uppercase fs-400 ff-sans-cond letter-spacing-3 text-accent'>Explore our crew and technology</span>
    </div>
    </div>
    </>
  )
}

export default TicketsBooked