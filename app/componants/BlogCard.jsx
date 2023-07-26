"use client";
import React from "react";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import Link from "next/link";
import axios from "axios";

const BlogCard = ({ title, date, image, blogObjId }) => {
  const handleBlogDelete = async (e) => {
    e.preventDefault();
    const deleteData = {
      blogObjId: blogObjId,
    };
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/blog`,

        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGI4ZjhhNDkwZjE3OWFlNjM1Mzg0NzgiLCJpYXQiOjE2ODk4NjM4MTAsImV4cCI6MTY5NDI0MzgxMH0.7FZx6BVJ31rWkDEsfeQIDaBsQOa44Dm17SXuL_LOZiI",
          },
          data: deleteData,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='w-full h-max flex justify-between p-5 shadow rounded-lg'>
      <div className='flex space-x-3'>
        <div className='h-20 w-20 bg-slate-400'>
          <img className='h-full w-full object-cover' src={image} />
        </div>

        <div className='flex flex-col space-y-2 justify-center'>
          <p className='text-lg font-semibold'>{title}</p>
          <p className='text-sm opacity-50'>Date Added: {date?.slice(0, 10)}</p>
        </div>
      </div>
      <div className='flex flex-col space-y-2 justify-center items-center'>
        <Link href={`/blogs/edit/${blogObjId}`}>
          <IconPencil className='opacity-70 hover:opacity-100 cursor-pointer' />
        </Link>
        <IconTrash
          className='opacity-70 hover:opacity-100 text-rose-500 cursor-pointer'
          onClick={handleBlogDelete}
        />
      </div>
    </div>
  );
};

export default BlogCard;
