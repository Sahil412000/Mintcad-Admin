"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function WalletsModal() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <button
        onClick={() => props.setOpenModal("default")}
        type='button'
        className='px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg w-fit focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
      >
        Change
      </button>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Confirm Change</Modal.Header>
        <Modal.Body>
          <div className='space-y-5'>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='address' className='font-bold'>
                Enter New Address
              </label>
              <input
                id='address'
                name='address'
                type='text'
                className='h-10 p-2 rounded-lg text-sm'
                placeholder='Enter New Address'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='password' className='font-bold'>
                Enter Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                className=' h-10 p-2 rounded-lg text-sm'
                placeholder='Enter Password'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='code' className='font-bold'>
                Enter 2FA Code
              </label>
              <input
                id='code'
                name='code'
                type='text'
                className=' h-10 p-2 rounded-lg text-sm'
                placeholder='Enter Code'
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => props.setOpenModal(undefined)}
            type='button'
            className=' w-2/3 block mx-auto px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-full focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
          >
            Confirm Change
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
