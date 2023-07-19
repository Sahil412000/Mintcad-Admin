"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function DesignModal() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <button
        onClick={() => props.setOpenModal("default")}
        type='button'
        className='text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
      >
        Add New
      </button>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Select Category and Sub-category</Modal.Header>
        <Modal.Body>
          <div className='space-y-5'>
            <p className='font-semibold text-center'>Add Categories</p>
            <div className='border border-gray-300 rounded-lg shadow  p-3'>
              <div className='flex flex-col space-y-2'>
                <label htmlFor='category' className='font-bold'>
                  Enter a Category
                </label>
                <input
                  id='category'
                  name='category'
                  type='text'
                  className='h-10 p-2 rounded-lg text-sm'
                  placeholder='Enter a category'
                />
              </div>
              <button
                // onClick={() => props.setOpenModal(undefined)}
                type='button'
                className='mt-5 w-2/3 block mx-auto px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-full focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                Confirm Change
              </button>
            </div>
          </div>
          <div className='mt-5 space-y-5'>
            <p className='font-semibold text-center'>Add Sub-categories</p>
            <div className='border border-gray-300 rounded-lg p-3 space-y-3'>
              <div className='flex flex-col space-y-2'>
                <label htmlFor='countries' className='font-bold'>
                  Choose a Category
                </label>
                <select
                  id='countries'
                  className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option selected>Filter option</option>
                  <option value='US'>United States</option>
                  <option value='CA'>Canada</option>
                  <option value='FR'>France</option>
                  <option value='DE'>Germany</option>
                </select>
              </div>
              <div className='flex flex-col space-y-2'>
                <label htmlFor='subcategory' className='font-bold'>
                  Enter a Sub-category
                </label>
                <input
                  id='subcategory'
                  name='subcategory'
                  type='text'
                  className='h-10 p-2 rounded-lg text-sm'
                  placeholder='Enter a sub-category'
                />
              </div>
              <button
                // onClick={() => props.setOpenModal(undefined)}
                type='button'
                className='mt-5 w-2/3 block mx-auto px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-full focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                Confirm Change
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
