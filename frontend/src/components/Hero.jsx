import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row border border-gray-400 rounded-3xl shadow-2xl shadow-gray-500 overflow-hidden'>

        {/* Left side image */}
        <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <img 
                src={assets.hero_pic} 
                alt="Hero_Pic" 
                className='w-full h-full object-cover rounded-3xl sm:rounded-b-none lg:rounded-r-none' 
            />
        </div>

        {/* Hero center text */}
        <div className='w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-10 text-center text-[#414141]'>
            <div className='flex justify-center'>
                <p className='font-medium text-base sm:text-lg md:text-xl'>Sri Lanka's No #1</p>
            </div>
            <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold py-4 leading-tight'>
                Clothing Company
            </h1>
            <div className='flex items-center justify-center gap-2 mt-2'>
                <p className='w-6 sm:w-10 md:w-16 h-[1px] bg-[#414141]'></p>
                <Link to='/collection'>
                  <p className='font-semibold text-sm sm:text-base border border-[#414141] rounded-2xl px-4 py-1 hover:bg-[#414141] hover:text-white transition'>Shop Now</p>
                </Link>
                
                <p className='w-6 sm:w-10 md:w-16 h-[1px] bg-[#414141]'></p>
            </div>
        </div>

        {/* Right side image */}
        <div className='w-full lg:w-1/2 flex justify-center items-center'>
            <img 
                src={assets.hero_img} 
                alt="Hero_Img" 
                className=' w-full h-full object-cover rounded-3xl sm:rounded-t-none lg:rounded-l-none' 
            />
        </div>
        
    </div>
  )
}

export default Hero