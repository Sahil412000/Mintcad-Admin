import DesignModal from "@/app/componants/Modals/DesignModal";
import React from "react";

function page() {
  return (
    <div className='w-full space-y-10 px-10 py-5'>
      <div className='flex flex-col justify-between gap-4 mt-4'>
        <h1 className='flex-grow  text-3xl font-extrabold leading-none tracking-tight text-gray-900   dark:text-white'>
          Categories and Sub-categories
        </h1>
        <h2 className='text-base text-slate-500  font-semibold dark:text-white'>
          Create, edit and manage the categories and sub-categories on Mintcad.{" "}
        </h2>
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
            className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
            placeholder='Search Mockups, Logos...'
            required
          />
          <DesignModal />
        </div>
      </form>
    </div>
  );
}

export default page;
