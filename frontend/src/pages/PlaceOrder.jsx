import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import Paypal from '../assets/paypal.png'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method,setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left side  */}
      <div className='flex flex-col gap-3 w-full sm:max-w-[500px]'>
        <div className='text-xl sm:text-2xl mt-3'>
          <Title text1={'Delivery'} text2={'Information'}/>
        </div>
        <div className='border border-none shadow-2xl shadow-gray-600 p-5 rounded-2xl space-y-4'>
        <div className='flex gap-3'>
          <input className='border border-[#654321] rounded py-1.5 px-3.5 w-full focus:border-[#654321] focus:border-2 outline-none' type="text" placeholder='First name'/>
          <input className='border border-[#654321] rounded py-1.5 px-3.5 w-full focus:border-[#654321] focus:border-2 outline-none' type="text" placeholder='Last name'/>
        </div>
        <input className='border border-[#654321] rounded py-1.5 px-3.5 w-full focus:border-[#654321] focus:border-2 outline-none' type="email" placeholder='Email Address'/>
        <input className='border border-[#654321] rounded py-1.5 px-3.5 w-full focus:border-[#654321] focus:border-2 outline-none' type="text" placeholder='Street'/>
        <div className='flex gap-3'>
          <input className='border border-[#654321] rounded py-1.5 px-3.5 w-full focus:border-[#654321] focus:border-2 outline-none' type="text" placeholder='City'/>
          <input className='border border-[#654321] rounded py-1.5 px-3.5 w-full focus:border-[#654321] focus:border-2 outline-none' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-[#654321] rounded py-1.5 px-3.5 w-full focus:border-[#654321] focus:border-2 outline-none' type="number" placeholder='Zipcode'/>
          <input className='border border-[#654321] rounded py-1.5 px-3.5 w-full focus:border-[#654321] focus:border-2 outline-none' type="text" placeholder='Country'/>
        </div>
        <input className='border border-[#654321] rounded py-1.5 px-3.5 w-full focus:border-[#654321] focus:border-2 outline-none' type="number" placeholder='Phone number'/>
      </div>
      </div>
      {/* Right side */}
      <div className='mt-[-15px]'>
        <div className='mt-8 min-w-100 pr-11 sm:pr-5'>
          <CartTotal/>
        </div>
        <div className='mt-12 text-xl'>
          <Title text1={'Payment'} text2={'Method'}/>
          {/* Payment method selection */}
          <div className='flex gap-3 flex-col lg:flex-row sm:pr-5'>
            <div onClick={()=>setMethod('paypal')} className='flex items-center gap-3 border p-2 px-3 rounded-2xl cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal' ? 'bg-green-400' : ''}`}></p>
              <img src={Paypal} alt="Paypal" className='w-30 h-auto mx-4'/>
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 rounded-2xl cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-[#654321] text-lg font-medium mx-4'>Cash on delivery</p>
            </div>
          </div>
          <div className='w-full text-end mt-5'>
            <button onClick={()=>navigate('/orders')} className='bg-[#654321] text-white px-14 py-3 sm:mr-5 text-[17px] rounded-2xl cursor-pointer'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder