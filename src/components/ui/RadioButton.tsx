import React from 'react';

const RadioButton = () => {
  return (
    <label className="inline-flex items-center cursor-pointer relative">
      <input
        type="radio"
        className="
      w-4 h-4              
      rounded-full         
      border-1 border-gray-300
      bg-white
      checked:bg-[#5547EB] checked:border-[#5547EB]
      appearance-none
      relative
    "
      />
      <span className="absolute w-[6px] h-[6px] rounded-full bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></span>
    </label>
  );
};

export default RadioButton;
