import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className=' w-4/5 m-auto mt-32 grid grid-cols-3col mb-12 place-items-start'>
         <div className='flex flex-col gap-6 w-4/5'>
            <img className="w-40" src={assets.logo} />
            <p className='text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         </div>
         <div className='flex flex-col gap-6' >
            <h1 className='font-semibold'>COMPANY</h1>
            <ul>
                <li className='py-1 text-sm'>Home</li>
                <li className='py-1 text-sm'>About</li>
                <li className='py-1 text-sm'>Contact us</li>
                <li className='py-1 text-sm'>Privacy policy</li>
            </ul>
         </div>
         <div className='flex flex-col gap-6'> 
         <h1 className='font-semibold'>GET IN TOUCH</h1>
            <ul>
                <li className='py-1 text-sm'>+1-212-456-7890</li>
                <li className='py-1 text-sm'>greatstackdev@gmail.com</li>
            </ul>
         </div>
      </div>
      <p className='text-center text-sm mb-6'>Copyright © 2024 GreatStack - All Right Reserved.</p>
    </div>
  )
}

export default Footer
