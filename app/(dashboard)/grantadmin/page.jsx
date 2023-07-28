"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");

  const [jwtToken, setJwtToken] = useState("");

  const [admins, setAdmins] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setUserEmail(value);
  };

  useEffect(() => {
    if (window) {
      const jwtToken = window.sessionStorage.getItem("jwtToken");
      if (jwtToken === null) {
        router.push("/login");
      }
      setJwtToken(jwtToken);
    }
  }, []);

  const handleGrantAdminAccess = async (e) => {
    e.preventDefault();
    if (!userEmail === "") {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/invite-admin`,
          { userEmail: userEmail },
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": jwtToken,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSearchAdmin = async (e) => {
    const searchText = e.target.value;
    if (searchText === "") {
      setAdmins([]);
      return;
    }
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/list-admin?searchText=${searchText}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": jwtToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setAdmins(response.data.data.adminList);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <form>
        <label
          for='default-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            onChange={handleSearchAdmin}
            className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
            placeholder='Search Admins'
            required
          />
        </div>
      </form>
      <ul className='w-full flex flex-col space-y-1'>
        {admins && admins.length && admins.length > 0 ? (
          admins.map((value, index) => {
            return (
              <li className='text-black bg-[#F0F0F0] p-3' key={index}>
                {value.userEmail}
              </li>
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default page;
