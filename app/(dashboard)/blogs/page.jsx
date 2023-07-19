"use client";
import BlogCard from "@/app/componants/BlogCard";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";

function page() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    //await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/blog`).then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className='w-full space-y-10 px-10 py-5'>
      <div className='flex items-center justify-between mt-4'>
        <h1 class='flex-grow  text-3xl font-extrabold leading-none tracking-tight text-gray-900   dark:text-white'>
          Live Content
        </h1>

        <Link href='/blogs/add'>
          <button
            type='button'
            className='px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg w-fit focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
          >
            New Article
          </button>
        </Link>
      </div>
      <div className=''>
        <BlogCard title='What is the Alien - Xenomorph-' date='21/2/23' />
      </div>
      <div className=''>
        <BlogCard title='What is the Alien - Xenomorph-' date='21/2/23' />
      </div>
      <div className=''>
        <BlogCard title='What is the Alien - Xenomorph-' date='21/2/23' />
      </div>
    </div>
  );
}

export default page;
