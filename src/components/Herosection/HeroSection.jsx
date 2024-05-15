import React from 'react'
import banner from "../../assets/banner.jpg"

function HeroSection() {
  return (
    <>
      <div className='relative'>
        <img src="https://img101.urbanic.com/v1/a5659e2692ba46f19bff5394491d5f85.webp" alt='' className='object-center object-cover w-full h-auto' />
      
      
      </div>
      <div className='absolute   left-[50%]  top-[30%] '>
  <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 font-mono'>
    Discover Your New Adventure!
  </h1>
</div>

      <p className='absolute bottom-90 left-0 w-full text-center text-2xl mb-20 font-cursive italic text-gray-500 bg-opacity-50 p-0 '>"Shop Our Latest Arrival & Unleash Your Style"</p>
      


    </>

  )
}

export default HeroSection