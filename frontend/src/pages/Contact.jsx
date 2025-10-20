import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20 border border-none shadow-2xl shadow-gray-600 rounded-2xl p-6'>
        <img className='w-full md:max-w-[600px] rounded-2xl' src={assets.contact_img} alt="Contact Image" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <div className='text-gray-600'>
            <b className='text-[#654321]'>We’re Here to Help!</b>
            <p className='px-5 pt-3'>Have a question about your order, need help choosing the perfect fit, or just want to share feedback? Our team is always ready to assist you.</p>
          </div>
          <div className='text-gray-600'>
            <b className='text-[#654321]'>Our Stores</b>
            <p className='px-5 pt-3'>No-15, New cross Street,<br />Wellawatte, Sri Lanka.</p>
            <p className='pt-4 px-5'>No-02, Galle Road,<br />Bambalapitiya, Sri Lanka.</p>
          </div>
          <div className='text-gray-600'>
            <b className='text-[#654321]'>Contact Details</b>
            <p className='pt-4 px-5'>Tel: +94 11 555-1212</p>
            <p className='px-5'>Email: support@maxbuy.com</p>
          </div>
          <div className='text-gray-600'>
            <b className='text-[#654321]'>Customer Support Hours</b>
            <p className='px-5 pt-3'>We provide 24/7 customer support</p>
            <p className='px-5 pt-1.5'>If you will Email us, We usually respond within 24 hours</p>
          </div>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact