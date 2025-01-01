import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const Navigate = useNavigate();
  return (
    <div className='flex mt-32 bg-primary w-4/5 m-auto px-12 py-2 relative justify-start items-start '>
        <div className='text-white'>
            <h1 className='text-4xl font-semibold pb-6'>Book Appointment 
                <br/>
                With 100+ Trusted Doctors
            </h1>
            <button onClick={()=> Navigate("/Login")} className='bg-white text-sm text-black px-4 py-2 rounded-full'>Create account</button>
        </div>
        <img className="absolute w-60 bottom-0 right-20" src={assets.appointment_img}/>
    </div>
  )
}

export default Banner
