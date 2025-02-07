import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex justify-evenly items-center'>
        {/* ------------Left Side------------ */}
        <div className='bg-primary m-auto lg:w-5/5 w-4/5 text-white flex lg:flex-nowrap  lg:p-0 pt-10 px-4 flex-wrap justify-evenly mt-10 sm:mt-20 gap-7'>
        <div className='flex flex-col items-center lg:items-start justify-center lg:justify-start m-auto gap-4'>
        <h1 className='text-center sm:text-left text-2xl sm:text-3xl lg:text-5xl font-semibold'>Book Appointment <br className='lg:block hidden'/>
        With Trusted Doctors </h1> 
        <div className='flex gap-3 sm:flex-nowrap flex-wrap text-center sm:text-left items-center justify-center'>
            <img src={assets?.group_profiles} className=':w-20 h-10'/>
            <p className='text-[12px] sm:text-sm'>Simply browse through our extensive list of trusted doctors, <br className='lg:block hidden'/>
            schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality" className='bg-white rounded-full pl-8 sm:pl-5 py-2 w-48 text-black gap-2 items-center flex'>
            <p className='text-[12px] sm:text-sm'>Book appointment</p>
            <img src={assets.arrow_icon}/>
        </a>
        </div>
        {/* ------------Right Side ---------- */}
            <img className='w-[80%] lg:w-[50%]' src={assets?.header_img} />
        </div>
    </div>
  )
}

export default Header
