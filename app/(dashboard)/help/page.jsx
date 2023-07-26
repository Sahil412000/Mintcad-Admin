"use client";
import HelpCard from "@/app/componants/HelpCard";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

function page() {
  const [help, setHelp] = useState([]);

  const [jwtToken, setJwtToken] = useState("");

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
        setHelp(responseData);
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

  return (
    <div className='w-full space-y-10 px-10 py-5'>
      <div className='flex flex-wrap items-center justify-between gap-4 mt-4'>
        <h1 class='flex-grow  text-3xl font-extrabold leading-none tracking-tight text-gray-900   dark:text-white'>
          Live Guide Items
        </h1>
        <div className='flex items-center gap-4'>
          <select
            id='countries'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option selected>Filter option</option>
            <option value='US'>United States</option>
            <option value='CA'>Canada</option>
            <option value='FR'>France</option>
            <option value='DE'>Germany</option>
          </select>
          <Link href='/help/add'>
            <button
              type='button'
              className='px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg w-fit focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            >
              Add new
            </button>
          </Link>
        </div>
      </div>
      {help &&
        help.length > 0 &&
        help.map((value, index) => {
          return (
            <div className='' key={index}>
              <HelpCard
                question={value.headingTitle}
                topic={value.topicName}
                date={value.updatedAt}
                helpObjId={value._id}
              />
            </div>
          );
        })}
    </div>
  );
}

export default page;
