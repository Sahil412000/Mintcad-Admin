import React from "react";

function page() {
  return (
    <div className="w-full ">
      <div className="max-w-full sm:mx-auto ">
        <div className="sm:flex sm:space-x-4">
          <div className="inline-block w-full mb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow sm:w-1/3 sm:my-4">
            <div className="p-5 bg-white">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <h3 className="text-sm font-medium leading-6 text-gray-400">
                    Total Users
                  </h3>
                  <p className="text-3xl font-bold text-black">71,897</p>
                  <p className="text-sm font-bold text-green-500">+10%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block w-full mb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow sm:w-1/3 sm:my-4">
            <div className="p-5 bg-white">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <h3 className="text-sm font-medium leading-6 text-gray-400">
                    Sales Transactions
                  </h3>
                  <p className="text-3xl font-bold text-black">58.16%</p>
                  <p className="text-sm font-bold text-green-500">+10%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block w-full mb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow sm:w-1/3 sm:my-4">
            <div className="p-5 bg-white">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <h3 className="text-sm font-medium leading-6 text-gray-400">
                    Printed Count
                  </h3>
                  <p className="text-3xl font-bold text-black">24.57%</p>
                  <p className="text-sm font-bold text-green-500">+10%</p>
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
