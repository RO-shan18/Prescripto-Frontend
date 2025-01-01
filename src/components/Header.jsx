import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='bg-primary w-4/5 m-auto text-white flex px-20 mt-20'>
        {/* ------------Left Side------------ */}
        <div className='flex flex-col w-4/5 m-auto gap-4'>
        <h1 className='text-6xl'>Book Appointment <br/>
        With Trusted Doctors </h1> 
        <div className='flex w-6/7 gap-3'>
            <img src={assets.group_profiles} className='w-28'/>
            <p>Simply browse through our extensive list of trusted doctors,schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality" className='bg-white rounded-full pl-5 py-2 text-black w-2/5 gap-2 items-center flex'>
            <p>Book appointment</p>
            <img src={assets.arrow_icon}/>
        </a>
        </div>
        {/* ------------Right Side ---------- */}
        <div>
            <img src={assets.header_img} />
        </div>
    </div>
  )
}

export default Header
