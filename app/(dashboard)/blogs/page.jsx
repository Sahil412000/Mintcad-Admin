import React from "react";

function page() {
  return (
    <div className="w-full ">
      <div className="flex items-center justify-between mt-4">
        <h1 class="flex-grow  text-3xl font-extrabold leading-none tracking-tight text-gray-900   dark:text-white">
          Live Content
        </h1>

        <button
          type="button"
          className="px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg w-fit focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          New Article
        </button>
      </div>
    </div>
  );
}

export default page;
