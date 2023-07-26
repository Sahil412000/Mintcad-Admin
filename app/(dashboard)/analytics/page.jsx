"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();

  const [jwtToken, setJwtToken] = useState("");

  useEffect(() => {
    if (window) {
      const jwtToken = window.sessionStorage.getItem("jwtToken");
      if (jwtToken === null) {
        router.push("/login");
      }
      setJwtToken(jwtToken);
    }
  }, []);

  return (
    <div className='w-full px-10 py-5'>
      <div className='max-w-full sm:mx-auto '>
        <div className='sm:flex sm:space-x-4'>
          <div className='inline-block w-full mb-4 overflow-hidden text-left align-bottom transition-all transform bg-[#D1EEB3] rounded-lg shadow sm:w-1/3 sm:my-4'>
            <div className='p-5 bg-[#D1EEB3]'>
              <div className='sm:flex sm:items-start'>
                <div className='text-center sm:mt-0 sm:ml-2 sm:text-left space-y-1'>
                  <h3 className='text-sm font-medium leading-6 text-[#535353]'>
                    Total Users
                  </h3>
                  <p className='text-3xl font-bold text-black'>71,897</p>
                  <p className='text-sm font-bold text-green-500'>+10%</p>
                </div>
              </div>
            </div>
          </div>
          <div className='inline-block w-full mb-4 overflow-hidden text-left align-bottom transition-all transform bg-[#D1EEB3] rounded-lg shadow sm:w-1/3 sm:my-4'>
            <div className='p-5 bg-[#D1EEB3]'>
              <div className='sm:flex sm:items-start'>
                <div className='text-center sm:mt-0 sm:ml-2 sm:text-left space-y-1'>
                  <h3 className='text-sm font-medium leading-6 text-[#535353]'>
                    Sales Transactions
                  </h3>
                  <p className='text-3xl font-bold text-black'>58.16%</p>
                  <p className='text-sm font-bold text-green-500'>+10%</p>
                </div>
              </div>
            </div>
          </div>
          <div className='inline-block w-full mb-4 overflow-hidden text-left align-bottom transition-all transform bg-[#D1EEB3] rounded-lg shadow sm:w-1/3 sm:my-4'>
            <div className='p-5 bg-[#D1EEB3]'>
              <div className='sm:flex sm:items-start'>
                <div className='text-center sm:mt-0 sm:ml-2 sm:text-left space-y-1'>
                  <h3 className='text-sm font-medium leading-6 text-[#535353]'>
                    Printed Count
                  </h3>
                  <p className='text-3xl font-bold text-black'>24.57%</p>
                  <p className='text-sm font-bold text-green-500'>+10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
