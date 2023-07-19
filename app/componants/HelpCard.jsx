import React from "react";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

const HelpCard = ({ question, topic, date }) => {
  return (
    <div className='w-full h-max flex justify-between p-5 shadow rounded-lg'>
      <div className='flex flex-col space-y-1.5'>
        <p className='text-lg font-semibold'>{question}</p>
        <p className='text-md'>Topic: {topic}</p>
        <p className='text-sm opacity-50'>Date Added: {date}</p>
      </div>
      <div className='flex flex-col space-y-2 justify-center items-center'>
        <Link href='/help/edit'>
          <IconPencil className='opacity-70 hover:opacity-100 cursor-pointer' />
        </Link>
        <IconTrash className='opacity-70 hover:opacity-100 text-rose-500 cursor-pointer' />
      </div>
    </div>
  );
};

export default HelpCard;
