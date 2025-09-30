import React from 'react';

const PromoCode = () => {
  return (
    <div className="flex justify-between gap-2 mb-4">
      <input className="custom-input h-[28]" placeholder="Add discount code" />
      <button className="border border-grey-300 font-bold rounded text-grey-900 text-[13px] pl-2 pr-2">
        Apply
      </button>
    </div>
  );
};

export default PromoCode;
