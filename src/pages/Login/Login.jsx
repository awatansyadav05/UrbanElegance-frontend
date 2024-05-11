import React from 'react'
import login from "../../assets/login.png"

const Login = () => {
  return (
    <>
      <div className='relative flex justify-center items-center h-[100px] bg-pink-100'>
        <div >
          <img src={login} alt='' className='flex justify-center items-center h-[100px] max-w-full max-h-full' ></img>
        </div>
      </div>
      <div className='bg-pink-100 min-h-screen' >
        <div  className='bg-pink-100'>
          <h2 className="mt-0 mb-3 py-0 px-10 text-center text-3xl font-bold text-gray-900">
            Sign in
          </h2>
        </div>


        <form className="max-w-lg mx-auto mb-8 bg-white-300 container px-2 py-15">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-0 text-2xl font-semibold text-gray-900 dark:text-black">Email <span className="text-red-500">*</span></label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block mb-0 text-2xl font-semibold text-gray-900 dark:text-black"> Password <span className="text-red-500">*</span></label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Remember me</label>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LOGIN</button>

          <p className=" dark:text-balck text-sm mt-4 sm:mt-0 py-3  font-medium text-gray-900 dark:text-gray-500">Don't have an account? <a href="signup" className="text-blue-700 hover:underline">Sign up</a></p>

        </form>

      </div>

    </>
  )
}

export default Login
