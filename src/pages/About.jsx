import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <p className='text-center font-semibold text-2xl text-gray-600 mb-16'>ABOUT US</p>

        <div className='flex gap-12 w-4/5 mx-auto'>
          <img className='w-[340px]' src={assets.about_image} />

          <div className='flex flex-col gap-6 mt-2 items-start'>
            <p className='text-gray-600'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p className='text-gray-600 '>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
            <b>Our Vision</b>
            <p className='text-gray-600 '>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>

        <p className='text-gray-600 text-2xl mt-16 mb-10 font-semibold w-4/5 mx-auto'> WHY CHOOSE US</p>

        <div className='flex w-11/12 mx-auto'>
          <div className='flex flex-col border border-gray-400 px-24 py-12 gap-4 hover:bg-primary hover:text-white transition-all duration-500 ease-in-out cursor-pointer'><b>EFFICIENCY:</b>
          <p className='text-gray-500 '>Streamlined appointment scheduling that fits into your busy lifestyle.</p></div>
          <div className='flex flex-col border border-gray-400 px-24 py-12 gap-4 hover:bg-primary hover:text-white transition-all duration-500 ease-in-out cursor-pointer'><b>CONVENIENCE:</b>
          <p className='text-gray-500 '>Access to a network of trusted healthcare professionals in your area.</p></div>
          <div className='flex flex-col border border-gray-400 px-24 py-12 gap-4 hover:bg-primary hover:text-white transition-all duration-500 ease-in-out cursor-pointer'><b>PERSONALIZATION:</b>
          <p className='text-gray-500 '>Tailored recommendations and reminders to help you stay on top of your health.</p></div>
        </div>
    </div>
  )
}

export default About
