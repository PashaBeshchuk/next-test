import PlusIcon from '@/assets/icons/PlusIcon';
import React from 'react';

const BuyButton = () => {
  return (
    <div className="flex justify-center ml-4 sidebar-action mb-4 text-grey-800">
      <button
        type="button"
        className="flex items-center justify-center group w-full max-w-xs py-2 px-4 rounded border border-gray-300 hover:bg-brand-50 flex items-center gap-2 
      font-bold text-[13px] leading-[20px] tracking-[0px] text-gray-800"
      >
        <span className="plus text-lg font-bold group-hover:text-brand-500">
          <PlusIcon size={16} />
        </span>
        <span className="label text-grey-800 group-hover:text-brand-500">Buy new proxies</span>
      </button>
    </div>
  );
};

export default BuyButton;
