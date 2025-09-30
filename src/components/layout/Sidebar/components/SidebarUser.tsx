import DotsIcon from '@/assets/icons/DotsIcon';
import React from 'react';

const SidebarUser = () => {
  return (
    <div className="flex items-center gap-4 m-4 justify-between rounded group ">
      <div>
        <p className="font-space font-medium text-sm tracking-normal text-grey-800">Henry Smith</p>
        <p className="font-space font-medium text-sm tracking-normal text-grey-600">
          henry.smith@gmail.com
        </p>
      </div>
      <div>
        <button
          type="button"
          className="p-2 rounded hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <DotsIcon />
        </button>
      </div>
    </div>
  );
};

export default SidebarUser;
