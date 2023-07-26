import WalletsModal from "@/app/componants/Modals/WalletsModal";
import React from "react";

const page = () => {
  return (
    <div className='w-full h-max space-y-10 p-10'>
      <div className='flex flex-col justify-between gap-4 '>
        <h1 class='flex-grow  text-3xl font-extrabold leading-none tracking-tight text-gray-900   dark:text-white'>
          Manage Commision Address
        </h1>
      </div>
      <div className='w-full flex items-end space-x-20'>
        <div className='flex w-2/3 flex-col space-y-1'>
          <label htmlFor='commisionAddress' className='font-bold'>
            Commision Address
          </label>
          <input
            id='commisionAddress'
            name='commisionAddress'
            type='text'
            className='w-full h-10 p-2 rounded-lg text-sm'
            placeholder='0x1e9209E3f4663F6b3Fc9bdF95FC5eEfb1cD3e15C'
          />
        </div>
        <WalletsModal />
      </div>
    </div>
  );
};

export default page;
