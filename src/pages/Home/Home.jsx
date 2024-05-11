import React from 'react'
//import Layout from '../../components/Layout/Layout'
import HeroSection from '../../components/Herosection/HeroSection'
import Service from '../../components/Service/Service'
import Gallery from '../../components/Gallery/Gallery'
import AllProducts from '../../components/AllProducts/AllProducts'
import Login from '../Login/Login'
import Signup from '../SignUp/Signup'

function Home() {
  return (
    <div className=''>
      <HeroSection />
      <Service/>
      <Gallery/>
     {/* <AllProducts/> */}
      {/* <Login/>
      <Signup/> */}
    </div>
  )
}

export default Home