import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
