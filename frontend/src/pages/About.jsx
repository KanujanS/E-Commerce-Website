import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-3xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 border border-none shadow-2xl shadow-gray-600 p-6 rounded-2xl'>
        <img className='w-full md:max-w-[450px] rounded-2xl' src={assets.about_img} alt="About Image" />
        <div className='flex flex-col justify-center gap-6 md:w-3/4 text-[#654321] rounded-2xl pl-4'>
        <b className='text-gray-600'>Our Vision</b>
          <p>To become a leading fashion destination that inspires confidence and self-expression through affordable, high-quality, and inclusive clothing — making style accessible to everyone, everywhere.</p>
          <p>We’re committed to delivering high-quality clothing with a perfect blend of comfort, style, and value — empowering you to express your individuality with confidence.</p>
          <b className='text-gray-600'>Our Mission</b>
          <p className='text-[#654321]'>Our mission at MaxBuy is to make fashion accessible and enjoyable for everyone by offering stylish, high-quality clothing at affordable prices, while fostering confidence and self-expression in every customer</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 gap-5'>
        <div className='border lg:w-[20%] px-10 md:px-12 py-8 sm:py-15 flex flex-col gap-5 rounded-2xl'>
          <b>🛍️ Trendy Collections</b>
          <p>We bring you the latest styles and seasonal must-haves, keeping your wardrobe always on point.</p>
        </div>
        <div className='border lg:w-[20%] px-10 md:px-12 py-8 sm:py-15 flex flex-col gap-5 rounded-2xl'>
          <b>💸 Affordable Prices</b>
          <p>Enjoy premium fashion without breaking the bank — stylish clothing that fits your budget.</p>
        </div>
        <div className='border lg:w-[20%] px-10 md:px-12 py-8 sm:py-15 flex flex-col gap-5 rounded-2xl'>
          <b>✅ Quality You Can Trust</b>
          <p>Each piece is crafted with attention to detail and quality materials to ensure long-lasting wear.</p>
        </div>
        <div className='border lg:w-[20%] px-10 md:px-12 py-8 sm:py-15 flex flex-col gap-5 rounded-2xl'>
          <b>🚚 Fast & Reliable Delivery</b>
          <p>Your orders are packed with care and delivered quickly, right to your doorstep.</p>
        </div>
        <div className='border lg:w-[20%] px-10 md:px-12 py-8 sm:py-15 flex flex-col gap-5 rounded-2xl'>
          <b>🔄 Easy Returns & Exchanges</b>
          <p>Not satisfied? Our hassle-free return and exchange policy has you covered.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About