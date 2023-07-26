"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();

  const [formInput, setFormInput] = useState({
    userEmail: "",
    password: "",
    code: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formInput.code === "") return;
    const loginData = {
      userEmail: formInput.userEmail,
      password: formInput.password,
      token: formInput.code,
    };
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        const jwtToken = response.data.data.jwtToken;
        window.sessionStorage.setItem("jwtToken", jwtToken);
        router.push("/analytics");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className='flex items-center justify-center w-screen h-screen bg-slate-100'>
      <div className='w-full max-w-lg p-2 m-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div className='w-full px-6 py-6 lg:px-8'>
          <h3 className='mb-4 text-4xl font-bold text-center text-gray-900 dark:text-white'>
            Login
          </h3>
          <form className='space-y-3' action='#'>
            <div>
              <label
                htmlFor='userEmail'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Login ID
              </label>
              <input
                type='email'
                name='userEmail'
                id='userEmail'
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
                Password
              </label>
              <input
                type='password'
                name='password'
                value={formInput.password}
                id='password'
                placeholder='••••••••'
                onChange={handleInputChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              />
            </div>
            <div>
              <label
                htmlFor='code'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                2FA Code
              </label>
              <input
                type='text'
                name='code'
                value={formInput.code}
                onChange={handleInputChange}
                id='2fa'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='Enter 2fa code'
                required
              />
            </div>
            <div className='flex justify-end'>
              <a
                href='#'
                className='text-sm text-blue-700 hover:underline dark:text-blue-500'
              >
                Forgot Password?
              </a>
            </div>
            <button
              type='submit'
              onClick={handleLogin}
              className='w-full px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
