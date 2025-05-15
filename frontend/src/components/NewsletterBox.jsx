import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center border border-white rounded-4xl pt-15 pb-15 px-5 shadow-2xl shadow-gray-500'>
        <p className='text-2xl font-medium text-[#654321]'>Subscribe now & get 15% off</p>
        <p className='text-gray-600 mt-3'>Subscribe now and get 15% off your first order — stay ahead with exclusive deals and style updates from MaxBuy!</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-2xl overflow-hidden'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required/>
            <button type='submit' className='bg-[#654321] text-white text-sm px-10 py-4 hover:bg-gray-700 border border-t-0 border-b-0 border-r-0 '>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox