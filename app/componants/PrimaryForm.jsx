import React from "react";
import WalletsModal from "./Modals/WalletsModal";

const PrimaryForm = ({ label, name, placeholder }) => {
  return (
    <div className='w-full flex items-end space-x-20'>
      <div className='flex w-2/3 flex-col space-y-1'>
        <label htmlFor={name} className='font-bold'>
          {label}
        </label>
        <input
          id={name}
          name={name}
          type='text'
          className='w-full h-10 p-2 rounded-lg text-sm'
          placeholder={placeholder}
        />
      </div>
      <WalletsModal />
    </div>
  );
};

export default PrimaryForm;
