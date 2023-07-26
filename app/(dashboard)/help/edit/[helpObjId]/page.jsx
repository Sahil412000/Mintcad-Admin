"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const params = useParams();
  const router = useRouter();

  const [helpToEdit, setHelpToEdit] = useState({});

  const [jwtToken, setJwtToken] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHelpToEdit({ ...helpToEdit, [name]: value });
  };

  const getHelp = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/help/help`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": jwtToken,
        },
      })
      .then((response) => {
        console.log(response);
        const responseData = response.data.data;
        responseData.forEach((value, index) => {
          if (value._id === params.helpObjId) {
            setHelpToEdit(value);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (window) {
      const jwtToken = window.sessionStorage.getItem("jwtToken");
      if (jwtToken === null) {
        router.push("/login");
      }
      setJwtToken(jwtToken);
    }
  }, []);

  useEffect(() => {
    if (jwtToken !== "") {
      getHelp();
    }
  }, [jwtToken]);

  const handleUpdateHelp = async (e) => {
    e.preventDefault();
    const updatedData = {
      helpObjId: helpToEdit?._id,
      topicName: helpToEdit?.topicName,
      topicDescription: helpToEdit?.topicDescription,
      headingTitle: helpToEdit?.headingTitle,
      body: helpToEdit?.body,
    };

    await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/help/update-help`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": jwtToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        router.push("/help");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='w-full h-max flex flex-col p-10 space-y-6'>
      <p className='text-3xl font-bold'>Edit Help Item</p>
      <div className='flex flex-col space-y-1'>
        <label htmlFor='topicName' className='font-bold'>
          Existing Topic *
        </label>
        <input
          id='topicName'
          name='topicName'
          type='text'
          value={helpToEdit?.topicName}
          onChange={handleInputChange}
          className='w-2/3 h-10 p-2 rounded-lg text-sm'
          placeholder='Enter topic name'
        />
      </div>
      {/* <div className='flex flex-col space-y-1'>
        <label htmlFor='new' className='font-bold'>
          Create New Topic
        </label>
        <input
          id='new'
          name='new'
          type='text'
          className='w-2/3 h-10 p-2 rounded-lg text-sm'
          placeholder='Enter topic name'
        />
      </div>
      <div className='flex flex-col space-y-1'>
        <label htmlFor='description' className='font-bold'>
          Topic Description *
        </label>
        <textarea
          id='description'
          name='description'
          className='w-2/3 h-24 p-2 rounded-lg text-sm'
          placeholder='Start writing your topic'
        />
      </div> */}
      <div className='flex flex-col space-y-1'>
        <label htmlFor='topicDescription' className='font-bold'>
          Topic Description *
        </label>
        <input
          id='topicDescription'
          name='topicDescription'
          type='text'
          value={helpToEdit?.topicDescription}
          onChange={handleInputChange}
          className='w-2/3 h-10 p-2 rounded-lg text-sm'
          placeholder='Enter topic title'
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
          value={helpToEdit?.headingTitle}
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
          value={helpToEdit?.body}
          onChange={handleInputChange}
          className='w-2/3 h-60 p-2 rounded-lg text-sm'
          placeholder='Start writing your topic'
        />
      </div>
      <button
        type='button'
        onClick={handleUpdateHelp}
        className='px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg w-fit focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
      >
        Save
      </button>
    </div>
  );
};

export default page;
