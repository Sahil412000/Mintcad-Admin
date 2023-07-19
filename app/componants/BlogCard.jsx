import React from "react";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import sample from "../../public/assets/imgs/blogsample.svg";
import Link from "next/link";

const BlogCard = ({ title, date }) => {
  return (
    <div className='w-full h-max flex justify-between p-5 shadow rounded-lg'>
      <div className='flex space-x-3'>
        <div className='h-20 w-20 bg-slate-400'></div>
        <div className='flex flex-col space-y-2 justify-center'>
          <p className='text-lg font-semibold'>{title}</p>
          <p className='text-sm opacity-50'>Date Added: {date}</p>
        </div>
      </div>
      <div className='flex flex-col space-y-2 justify-center items-center'>
        <Link href='/blogs/edit'>
          <IconPencil className='opacity-70 hover:opacity-100 cursor-pointer' />
        </Link>
        <IconTrash className='opacity-70 hover:opacity-100 text-rose-500 cursor-pointer' />
      </div>
    </div>
  );
};

export default BlogCard;
