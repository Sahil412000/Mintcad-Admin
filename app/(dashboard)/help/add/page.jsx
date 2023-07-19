"use client";
import React from "react";
import { useState } from "react";

const page = () => {
  const [formInput, setFormInput] = useState({
    topicName: "",
    headingTitle: "",
    topicDescription: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleCreateHelp = async (e) => {
    e.preventDefault();
    // await axios
    //   .post(`${process.env.NEXT_PUBLIC_API_URL}/help/create-help`, formInput, {
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
      <p className='text-3xl font-bold'>Create New Guide</p>
      <div className='flex flex-col space-y-1'>
        <label htmlFor='topicName' className='font-bold'>
          Existing Topic *
        </label>
        <select
          id='topicName'
          name='topicName'
          onChange={handleInputChange}
          className='w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          <option selected>Filter option</option>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
          <option value='FR'>France</option>
          <option value='DE'>Germany</option>
        </select>
      </div>
      <div className='flex flex-col space-y-1'>
        <label htmlFor='topicName' className='font-bold'>
          Create New Topic
        </label>
        <input
          id='topicName'
          name='topicName'
          type='text'
          onChange={handleInputChange}
          className='w-2/3 h-10 p-2 rounded-lg text-sm'
          placeholder='Enter topic name'
        />
      </div>
      <div className='flex flex-col space-y-1'>
        <label htmlFor='topicDescription' className='font-bold'>
          Topic Description *
        </label>
        <textarea
          id='topicDescription'
          name='topicDescription'
          onChange={handleInputChange}
          className='w-2/3 h-24 p-2 rounded-lg text-sm'
          placeholder='Start writing your topic'
        />
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
          placeholder='Enter topic title'
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
          placeholder='Start writing your topic'
        />
      </div>
      <button
        type='button'
        onClick={handleCreateHelp}
        className='px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg w-fit focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
      >
        Save
      </button>
    </div>
  );
};

export default page;
