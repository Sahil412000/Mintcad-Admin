"use client";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setUserEmail(value);
  };

  const handleGrantAdminAccess = async (e) => {
    e.preventDefault();
    // if (!userEmail === "") {
    //   await axios
    //     .post(
    //       `${process.env.NEXT_PUBLIC_API_URL}/auth/invite-admin`,
    //       { userEmail: userEmail },
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     )
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  };

  return (
    <div className='w-full h-max space-y-10 p-10'>
      <div className='flex flex-col justify-between gap-4 '>
        <h1 class='flex-grow  text-3xl font-extrabold leading-none tracking-tight text-gray-900   dark:text-white'>
          Manage Admins
        </h1>
      </div>
      <div className='w-full flex items-end space-x-20'>
        <div className='flex w-2/3 flex-col space-y-1'>
          <label htmlFor='email' className='font-bold'>
            Enter New Mintcad Email ID
          </label>
          <input
            id='email'
            name='email'
            type='email'
            onChange={handleInputChange}
            className='w-full h-10 p-2 rounded-lg text-sm'
            placeholder='Enter New Email ID'
          />
        </div>
        <button
          type='button'
          onClick={handleGrantAdminAccess}
          className='px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg w-fit focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
        >
          Grant access
        </button>
      </div>
    </div>
  );
};

export default page;
