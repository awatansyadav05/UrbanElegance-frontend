import React from 'react'
//import Layout from '../../components/Layout/Layout'
import HeroSection from '../../components/Herosection/HeroSection'
import Service from '../../components/Service/Service'
import Gallery from '../../components/Gallery/Gallery'
import PopularProducts from '../../components/PopularProducts/PopularProducts'


function Home({AddToCart}) {
  return (
    <div className=''>
      <HeroSection />
      <Service/>
      <PopularProducts AddToCart={AddToCart} />
      <Gallery/>
      
    
    </div>
  )
}

export default Home