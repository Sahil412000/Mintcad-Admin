import React from "react";

function page() {
  return (
    <div className="w-full ">
      <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
        <h1 class="flex-grow  text-3xl font-extrabold leading-none tracking-tight text-gray-900   dark:text-white">
          Live Guide Items
        </h1>
        <div className="flex items-center gap-4">
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Filter option</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <button
            type="button"
            className="px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg w-fit focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add new
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
