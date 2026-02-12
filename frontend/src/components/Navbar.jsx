import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible]=useState(false);
    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);
    const Logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    }
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'>
           <img src={assets.logo} alt="Logo" className='w-40 lg:w-60 cursor-pointer'/>
        </Link>
        <ul className='hidden sm:flex text-sm text-[#654321] gap-2 '>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p className='hover:bg-gray-200 p-2 px-3 rounded-2xl'>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p className='hover:bg-gray-200 p-2 px-3 rounded-2xl'>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p className='hover:bg-gray-200 p-2 px-3 rounded-2xl'>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p className='hover:bg-gray-200 p-2 px-3 rounded-2xl'>CONTACT US</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-4 lg:gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="Search_Icon" className='w-5 cursor-pointer' />
            <div className='group relative'>
                <img onClick={()=> token ? null : navigate('/login')} src={assets.profile_icon} alt="Profile_Icon" className='w-5 cursor-pointer' />
                {/* DropDown Menu */}
                { token &&
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={Logout} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
                }
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart_Icon" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="Menu_Icon" className='w-5 cursor-pointer sm:hidden'/>
        </div>
        {/* Sidebar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img  src={assets.dropdown_icon} alt="Dropdown_Icon" className='h-4 rotate-180'/>
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border ' to='/'>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-t-0' to='/collection'>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-t-0' to='/about'>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-t-0' to='/contact'>Contact Us</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar