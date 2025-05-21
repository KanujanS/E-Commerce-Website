import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div >
    <hr className='mt-20 mb-15 h-1 border-0 bg-[#654321]'/>
    <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 my-10 text-sm px-5 lg:pr-0'>
        <div>
            <img src={assets.logo} alt="Logo" className='mb-5 w-38'/>
            <p className='w-full md:w-2/3 text-gray-600 '>At MaxBuy, we’re committed to bringing you high quality, stylish clothing that blends comfort, confidence, and affordability. Because you deserve to look and feel your best every day.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-3 text-[#654321]'>Company</p>
            <ul className='flex flex-col gap-1 text-'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-3 text-[#654321]'>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li className='flex items-center gap-2'><FaFacebookSquare className='text-[#654321]'/> Facebook</li>
                <li className='flex items-center gap-2'><FaSquareInstagram className='text-[#654321]'/>Instagram</li>
                <li className='flex items-center gap-2'><FaWhatsappSquare className='text-[#654321]'/>Whatsapp</li>
                <li className='flex items-center gap-2'><AiFillTikTok className='text-[#654321]'/>Tiktok</li>
            </ul>
        </div>
        <div className='pl-0 lg:pl-10'>
            <p className='text-xl font-medium mb-3 text-[#654321]'>Contact Us</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+94 11 555-1212</li>
                <li>maxbuy@gmail.com</li>
            </ul>
        </div>
    </div>
    <div>
        <hr className='mx-0 border-0 h-0.5 bg-[#654321] lg:mx-70'/>
        <p className='py-5 text-sm text-center'>Copyright 2025 &#169; maxbuy.com - All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer