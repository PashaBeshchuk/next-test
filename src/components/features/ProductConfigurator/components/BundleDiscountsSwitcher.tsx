'use client';

import EditIcon from '@/assets/icons/EditIcon';
import ShevronDown from '@/assets/icons/ShevronDown';
import { useState } from 'react';
import ExampleSlider from './ExampleSlider';

const BundleDiscountsSwitcher = () => {
  const [customMode, setCustomMode] = useState(false);
  const handleSetCustomMode = () => setCustomMode(!customMode);
  return (
    <div>
      <div>
        <div className="flex  font-medium mb-2">
          Bundle discounts
          <button
            type="button"
            className="rounded hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            onClick={handleSetCustomMode}
          >
            <ShevronDown />
          </button>
        </div>
        {customMode && (
          <div>
            <div className="border rounded-[4px] border-gray-200 overflow-hidden">
              <div className="grid grid-cols-5 bg-[#E5E7EB]">
                <div className="p-2 last:border-r-0">IPs</div>
                <div className="p-2 text-right last:border-r-0">10-24</div>
                <div className="p-2 text-right last:border-r-0">25-49</div>
                <div className="p-2 text-right last:border-r-0">50-99</div>
                <div className="p-2 text-right">100+</div>
              </div>
              <div className="grid grid-cols-5">
                <div className="p-2 last:border-r-0">Price per IP</div>
                <div className="p-2 text-right last:border-r-0">$3.00</div>
                <div className="p-2 text-right last:border-r-0">$2.75</div>
                <div className="p-2 text-right last:border-r-0">$2.50</div>
                <div className="p-2 text-right">$2.25</div>
              </div>
            </div>
            <ExampleSlider />
            <button className="flex items-center custom-button font-bold">
              <span>
                <EditIcon size={16} />
              </span>
              <span>Enter a custom quantity</span>
            </button>
          </div>
        )}
      </div>
      {!customMode && (
        <div>
          <div className="font-bold mb-4">
            <p className="mb-2">Custom quantity</p>
            <input className="custom-input" placeholder="Custom quantity" />
          </div>
          <button className="custom-button w-[180px] font-bold">Select from the range</button>
        </div>
      )}
    </div>
  );
};

export default BundleDiscountsSwitcher;
