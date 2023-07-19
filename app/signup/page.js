"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [step, setStep] = useState(0);
  const [formInput, setFormInput] = useState({
    email: null,
    password: null,
    repassword: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    // await axios
    //   .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, formInput, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <main className='flex items-center justify-center w-screen h-screen bg-slate-100'>
      <div className='w-full max-w-lg p-2 m-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div className='w-full px-6 py-6 lg:px-8'>
          <h3 className='mb-4 text-4xl font-bold text-center text-gray-900 dark:text-white'>
            {step === 0 ? "Signup" : "2FA Setup"}
          </h3>
          {step === 0 ? (
            <form className='space-y-3' action='#'>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Login ID
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  onChange={handleInputChange}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='name@company.com'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Set Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  onChange={handleInputChange}
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='repassword'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Re-enter Password
                </label>
                <input
                  type='password'
                  name='repassword'
                  id='repassword'
                  onChange={handleInputChange}
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>

              <button
                // onClick={() => setStep(1)}
                onClick={handleSignUp}
                type='button'
                className='w-full px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                Next
              </button>
            </form>
          ) : (
            <form className='space-y-3' action='#'>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  2FA Code
                </label>
                <input
                  name='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='Enter 2FA Code'
                  required
                />
              </div>

              <button
                onClick={() => setStep(0)}
                type='button'
                className='w-full px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                Sign up
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
