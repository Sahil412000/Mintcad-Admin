"use client";
import { IconPlus } from "@tabler/icons-react";
import React from "react";
import { useState } from "react";

const page = () => {
  const [formInput, setFormInput] = useState({
    blogImage: "",
    headingTitle: "",
    body: "",
    isAddedToBanner: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    // await axios
    //   .post(`${process.env.NEXT_PUBLIC_API_URL}/blog/create-blog`, formInput, {
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
    <div className='w-full h-max flex flex-col p-10 space-y-6'>
      <p className='text-3xl font-bold'>Add New Article</p>

      <div class='flex items-center justify-center w-1/3'>
        <label
          for='blogImage'
          class='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
        >
          <div class='flex flex-col items-center justify-center pt-5 pb-6'>
            <svg
              class='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 16'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
              />
            </svg>
            <p class='mb-2 text-sm text-gray-500 dark:text-gray-400'>
              <span class='font-semibold'>Click to upload</span> or drag and
              drop
            </p>
            <p class='text-xs text-gray-500 dark:text-gray-400'>
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            onChange={handleInputChange}
            id='blogImage'
            type='file'
            class='hidden'
          />
        </label>
      </div>

      <div className='flex flex-col space-y-1'>
        <label htmlFor='headingTitle' className='font-bold'>
          Heading Title *
        </label>
        <input
          id='headingTitle'
          name='headingTitle'
          type='text'
          onChange={handleInputChange}
          className='w-2/3 h-10 p-2 rounded-lg text-sm'
          placeholder='Enter blog title'
        />
      </div>
      <div className='flex flex-col space-y-1'>
        <label htmlFor='body' className='font-bold'>
          Body *
        </label>
        <textarea
          id='body'
          name='body'
          onChange={handleInputChange}
          className='w-2/3 h-60 p-2 rounded-lg text-sm'
          placeholder='Start writing your blog'
        />
      </div>
      <div className='h-max flex justify-between w-2/3'>
        <div className='flex space-x-3'>
          <div className='rounded-full h-12 w-12 bg-[#FEF873] flex justify-center items-center'>
            <IconPlus />
          </div>
          <div className='flex flex-col justify-center'>
            <p className='2xl:text-sm text-xs font-semibold'>
              Add article to banner carousel
            </p>
            <p className='2xl:text-sm text-xs opacity-50'>
              Blog article will show up on the banner of the blogs page and home
              page blogs section{" "}
            </p>
          </div>
        </div>
        <label class='relative inline-flex items-center cursor-pointer'>
          <input type='checkbox' value='' class='sr-only peer' />
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <button
        type='button'
        onClick={handleCreateBlog}
        className='px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg w-fit focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
      >
        Save
      </button>
    </div>
  );
};

export default page;
