import React from 'react'
import login from "../../assets/login.png"

const Login = () => {
  return (
    <>
    <div className='relative flex justify-center items-center h-[200px]'> 
      <div>
      <img src={login} alt='' className='flex justify-center items-center h-[200px] max-w-full max-h-full' ></img>
      </div>
      <div className='abosulte top-[40%] text-black font-semibold text-2xl md:text-5xl  '>
        Login
      </div>
      </div>
    </>
  )
}

export default Login
