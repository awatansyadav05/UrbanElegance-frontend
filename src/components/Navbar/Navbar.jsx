import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from "react-icons/rx";
import Cart from '../../pages/Cart/Cart';

function Navbar({ cart, userName }) {

  const [isopen, setIsopen]= useState(false);
  const ToggleChange=()=> {
    isopen===false? setIsopen(true): setIsopen(false);
  }
  


  return (
    <>
      <div>
        <header className="bg-white border-b border-gray-200 relative" >
          <div className="container mx-auto flex justify-between p-5 items-center">
            <div>
              <Link to='/home'>
                <h3 className='font-bold text-2xl font-mono'>Urban<span className='text-red-500'>Elegance</span></h3>
              </Link>
            </div>

            <div className='hidden md:block'>
              <ul className='flex items-center text-lg justify-center font-semibold'>
                <Link to={'/home'}>
                  <li className='mr-5 hover:text-gray-900 cursor-pointer'>Home</li>
                </Link>
                <Link to={'/allproducts'}>
                  <li className='mr-5 hover:text-gray-900 cursor-pointer'>All Products</li>
                </Link>
                <Link to={'/about'}>
                  <li className='mr-5 hover:text-gray-900 cursor-pointer'>About </li>

                </Link>
                <Link to={'/contact'} >
                  <li className='mr-5 hover:text-gray-900 cursor-pointer'>Contact</li>
                </Link>

              </ul>
            </div>

            {
              isopen? <div className='' >
              <ul className='flex flex-col gap-2 text-2xl absolute top-[73px] left-0 h-screen w-full z-10 bg-red-500 text-white items-center justify-center font-semibold'>
                <Link to={'/home'}>
                  <li className='mt-5 hover:text-gray-900 cursor-pointer'>Home</li>
                </Link>
                <Link to={'/allproducts'}>
                  <li className='mt-5 hover:text-gray-900 cursor-pointer'>All Products</li>
                </Link>
                <Link to={'/about'}>
                  <li className='mt-5 hover:text-gray-900 cursor-pointer'>About </li>
                </Link>
                <Link to={'/contact'} >
                  <li className='mt-5 hover:text-gray-900 cursor-pointer'>Contact</li>
                </Link>

              </ul>
              <button className='absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer ' >
              <RxCross2 size={30} onClick={ToggleChange} />
              </button>

             
              </div>: (
              ""
              )

            }
            
            <div className='flex items-center gap-3'>
              <Link to={'/login'}>
                <button className=' bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold'>Login</button>
              </Link>
              <div>
                <span> {userName} </span>
              </div>
          
              <Link to={'/cart'}>
                <button className='cursor-pointer relative right-0 px-1  '>
                  <span className='absolute  top-[-5px] bg-red right-0 text-white px-2 rounded-full ' >{Cart.length}</span> <FaShoppingCart size={25} />
                </button>
              </Link>
              {
                isopen?"" : <button className='md:hidden' onClick={ToggleChange} >
                <GiHamburgerMenu size={30} />
              </button>
              }
             
            
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
