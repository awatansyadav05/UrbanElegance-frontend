import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <>
      <div>
        <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex justify-between p-5 items-center">
          <div>
          <Link to='/home'> <h3 className='font-bold text-2xl'> 
            Urban<span className='text-red-500'>Elegance</span></h3></Link>
           
          </div>

          <div className='hidden md:block' >
          <ul className='flex items-center text-lg justify-center font-semibold'>
          <Link to={'/home'}> <li className='mr-5 hover:text-gray-900 cursor-pointer'>Home</li></Link>
          <Link to={'/allproducts'}>  <li className='mr-5 hover:text-gray-900 cursor-pointer'>All Products</li> </Link>
         
          <li className='mr-5 hover:text-gray-900 cursor-pointer'>About </li>
          <li className='mr-5 hover:text-gray-900 cursor-pointer'>Contact</li>
          </ul>
          </div>
          <div className='flex justify-center items-center gap-3'>
          <Link to={'/login'}> <button className=' bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  font-semibold'>Login </button></Link>
            
           <Link to={'/cart'}><button className='cursor-pointer'><FaShoppingCart size={30}/></button></Link>
           <button className='md:hidden'> <GiHamburgerMenu size={30} /></button>

          </div>
        </div>

        </header>
      </div>
    </>
  )
}

export default Navbar