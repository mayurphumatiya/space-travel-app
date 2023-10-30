import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { showNav } from '../../Store/Slices/NavbarSlice';

const TicketsBooked = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToCrew = () =>{
    dispatch(showNav(true));
    navigate("/crew");
  }

  return (
    <>
        <h1 className='main-heading uppercase fs-700 ff-sans-cond letter-spacing-1 text-white'>Congratulations🎉</h1>
        <p className='main-heading uppercase fs-600 ff-sans-cond letter-spacing-3 text-accent'>Your tickets are booked! We're excited for your upcoming journey. </p>
        <p className='main-heading uppercase fs-400 ff-sans-cond letter-spacing-3 text-accent'>Please check your registered email for the tickets</p>
        <p onClick={redirectToCrew} style={{cursor:"pointer", textDecoration:"underline"}} className='main-heading uppercase fs-200 ff-sans-cond letter-spacing-3 text-white'>Explore our technology and crew</p>
    </>
  )
}

export default TicketsBooked