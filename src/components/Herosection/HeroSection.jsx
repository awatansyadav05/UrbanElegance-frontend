import React from 'react'
import banner from "../../assets/banner.jpg"

function HeroSection() {
  return (
    <>
      <div className=''>
        <img src={banner} alt='' className='object-center object-cover' />
      </div>
      <div className='absolute top-[30%] left-[50%] '>
        <h1 className='text-5xl font-bold text-red-500'>
          Discover Your New Adventure!

        </h1>
        <p className='text-center text-2xl mt-5 mb-8 font-semibold left-6'>Shop Our Latest Arrival & Unleash Your Style</p>
      </div>


    </>

  )
}

export default HeroSection