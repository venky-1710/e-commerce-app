import React from 'react'
import Logo from './Logo'
import { HiOutlineSearch } from "react-icons/hi";
import { BiSolidUserCircle } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Header = () => {
  return (
    <header className='h-16 shadow-md'>
        <div className='h-full container mx-auto flex items-center px-3 justify-between'>
            <div className=''>
                <Logo w={80} h={80}/>
            </div>
            {/* search button and icon*/}
            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-3'>
              <input type='text' placeholder='search product here...' className='w-full outline-none' />
              <div style={{ backgroundColor: '#FF0000' }} className='text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full text-white'>
                <HiOutlineSearch />
              </div>
            </div>
            
            {/* user and  cart and login */}
            <div className='flex items-center gap-5'>
              {/* user icon */}
              <div className='text-3xl cursor-pointer'>
                  <BiSolidUserCircle />
              </div>
              {/* cart icon */}
              <div className='text-2xl relative cursor-pointer'>
                <HiOutlineShoppingBag /><span />
                <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2'>
                  <p className='text-sm'>0</p>
                </div>
                {/* <p className='text-sm'>Bag</p> */}
              </div>
              {/* login buttton */}
              <div className=''>
                <button className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</button>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header