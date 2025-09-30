import React from 'react';
import RadioButton from '../../../ui/RadioButton';

const SubscriptionCycle = () => {
  return (
    <div className="flex flex-col gap-2 font-bold mb-8">
      <p>Select subscription cycle</p>
      <div className="flex custom-input subtitle1 text-[16px] font-medium">
        <RadioButton />
        <span>1 month</span>
      </div>
      <div className="flex custom-input subtitle1 text-[16px] font-medium">
        <RadioButton />
        <span>3 month</span>
      </div>
      <div className="flex custom-input subtitle1 text-[16px] font-medium">
        <RadioButton />
        <span>12 month</span>
        <span className="flex items-center border border-green-300 text-[12px] rounded-[4px] text-green-800 bg-green-50 p-2">
          Save 20%
        </span>
      </div>
    </div>
  );
};

export default SubscriptionCycle;
