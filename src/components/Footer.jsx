import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className=' w-4/5 m-auto mt-10 md:mt-32 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-3col  mb-12 place-items-start md:gap-0 gap-6'>
         <div className='flex flex-col gap-2 md:gap-6 w-4/5'>
            <img className="w-28 md:w-40" src={assets.logo} />
            <p className='text-[12px] sm:text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         </div>
         <div className='flex flex-col gap-2 md:gap-6' >
            <h1 className='text-lg md:text-xl font-semibold'>COMPANY</h1>
            <ul>
                <li className='py-1 text-[12px] md:text-sm'>Home</li>
                <li className='py-1 text-[12px] md:text-sm'>About</li>
                <li className='py-1 text-[12px] md:text-sm'>Contact us</li>
                <li className='py-1 text-[12px] md:text-sm'>Privacy policy</li>
            </ul>
         </div>
         <div className='flex flex-col gap-2 md:gap-6'> 
         <h1 className='text-lg md:text-xl font-semibold'>GET IN TOUCH</h1>
            <ul>
                <li className='py-1 text-[12px] md:text-sm'>+1-212-456-7890</li>
                <li className='py-1 text-[12px] md:text-sm'>greatstackdev@gmail.com</li>
            </ul>
         </div>
      </div>
      <p className='text-center text-[12px] md:text-sm mb-6'>Copyright © 2024 GreatStack - All Right Reserved.</p>
    </div>
  )
}

export default Footer
