import React, { useState } from 'react'

const Login = () => {
  const [currentState,setCurrentState] = useState('Sign Up');
  const onSubmitHandler = async (event)=> {
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-100 m-auto mt-10 gap-4 text-[#654321] border border-none p-8 shadow-2xl shadow-gray-600 rounded-2xl'>
      <div className='inline-flex items-center gap-2 mb-2 mt-8'>
        <hr className='border-none h-[3px] w-10 bg-[#654321]'/>
        <p className='text-3xl'>{currentState}</p>
        <hr className='border-none h-[3px] w-10 bg-[#654321]'/>
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border focus:border-2 focus:border-[#654321] outline-none rounded-lg' placeholder='Name' required/>}
      <input type="email" className='w-full px-3 py-2 border focus:border-2 focus:border-[#654321] outline-none rounded-lg' placeholder='Email' required/>
      <input type="password" className='w-full px-3 py-2 border focus:border-2 focus:border-[#654321] outline-none rounded-lg' placeholder='Password' required/>
      <div className='flex w-full justify-between text-sm mt-[-5px]'>
        <p className='cursor-pointer'>Fotgot your password?</p>
        {
          currentState === 'Login' ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create an account</p> : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login here</p>
        }
      </div>
      <button className='bg-[#654321] text-white font-light px-8 py-2 mt-4 rounded-lg'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login