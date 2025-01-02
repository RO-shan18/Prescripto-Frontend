import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='w-4/5 mx-auto'>
        <p className='text-center font-semibold text-xl md:text-2xl text-gray-600 mb-16' >CONTACT US</p>

        <div className='flex md:flex-row flex-col md:justify-start md:items-start justify-center items-center gap-6 md:gap-12'>
          <img className='w-[350px] md:w-[340px]' src={assets.contact_image} />

          <div className='flex flex-col gap-3 md:gap-6 mt-2 md:items-start items-center'>
            <p className='text-gray-600 font-semibold'>OUR OFFICE</p>
            <p className='text-gray-600 text-sm'>54709 Willms Station <br className='md:block hidden'/>
            Suite 350, Washington, USA</p>
            <p className='text-gray-600 text-sm'>Tel: (415) 555‑0132 <b className='md:block hidden'r/>
            Email: greatstackdev@gmail.com</p>
            <p className='text-gray-600 font-semibold'>CARRERS AT PRESCRIPTO</p>
            <p className='text-gray-600 text-sm'>Learn more about our teams and job openings.</p>
            <button  className='text-gray-600 border border-gray-500 px-5 py-3 text-sm hover:text-white hover:bg-primary transition-all duration-500 ease-in'>Explore Jobs</button>
          </div>
        </div>
    </div>
  )
}

export default Contact
