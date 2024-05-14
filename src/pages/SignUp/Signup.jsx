import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';


const Signup = () => {
  const navigateLogin = useNavigate();
  const [userSignup, setUserSignup] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSignup({ ...userSignup, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userSignup.username || !userSignup.email || !userSignup.password) {
      return toast.error("Please fill all details");
    } else {
      createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password)
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, { displayName: userSignup.username }); // Corrected: updateProfile function call
          navigateLogin('/login'); // Corrected: use navigateLogin instead of useNavigate
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <>
      <div className='min-h-screen bg-pink-100'>
        <div>
          <h2 className="mt-3 mb-4 text-center text-3xl font-SEMIBOLD text-gray-900 ">
            Become an <span className='font-bold'>Urban</span><span className='text-red-500 font-bold font-mono'>Elegance</span> member
          </h2>
        </div>
        <div className="max-w-lg mx-auto mb-8 bg-white-300 container px-2 py-15 ">
          <div className=" relative mb-4">
            <label htmlFor="username" className="block mb-0 text-2xl font-semibold text-gray-900 dark:text-black">Name <span className="text-red-500">*</span></label>
            <input type="text" name="username" value={userSignup.username} autoComplete='off' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your name here" onChange={handleChange} required />
          </div>
          <div className="relative mb-4">
          <label htmlFor="email" className="block mb-0 text-2xl font-semibold text-gray-900 dark:text-black">Email <span className="text-red-500">*</span></label>
            <input type="email" name="email" value={userSignup.email} autoComplete='off' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" onChange={handleChange} required />
          </div>
          <div className="relative mb-4">
          <label htmlFor="password" className="block mb-0 text-2xl font-semibold text-gray-900 dark:text-black"> Password <span className="text-red-500">*</span></label>
            <input type="password" name="password" value={userSignup.password} autoComplete='off' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"> Agree to receive communications related to order and promotional offers.</label>
          </div>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>
  Become an <span className='font-bold'>Urban</span><span className='text-red-500 font-bold'>Elegance</span> member
</button>

          <p className=" dark:text-balck text-sm mt-5 sm:mt-0 py-3  font-medium text-gray-900 dark:text-gray-500">Already account? <a href="login" className="text-blue-700 hover:underline">Login</a></p>

        </div>
      </div>
    </>
  );
};

export default Signup;
