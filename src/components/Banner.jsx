import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const Navigate = useNavigate();
  return (
    <div className='flex lg:flex-nowrap flex-wrap mt-10 md:mt-32 bg-primary w-4/5 m-auto px-12 pt-3 static lg:relative lg:justify-start lg:items-start justify-center items-center gap-7'>
        <div className='text-white flex flex-col lg:block'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold lg:pb-6 pb-2'>Book Appointment  
                <br className='lg:block hidden text-center '/>
                 With 100+ Trusted Doctors
            </h1>
            <button onClick={()=> Navigate("/Login")} className='bg-white text-[12px] sm:text-sm w-48 mx-auto text-black px-4 py-2 rounded-full'>Create account</button>
        </div>
        <img className=" static w-[80%] sm:w-[50%] md:w-[80%] lg:absolute lg:w-60 bottom-0 right-20" src={assets.appointment_img}/>
    </div>
  )
}

export default Banner
