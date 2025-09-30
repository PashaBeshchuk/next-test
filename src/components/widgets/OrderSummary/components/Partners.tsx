import AmericanExpressIcon from '@/assets/icons/AmericanExpressIcon';
import DinersIcon from '@/assets/icons/DinersIcon';
import MasterCard from '@/assets/icons/MasterCard';
import UnionIcon from '@/assets/icons/UnionIcon';
import VisaIcon from '@/assets/icons/VisaIcon';
import React from 'react';

const Partners = () => {
  return (
    <div className="flex justify-between w-auto items-center gap-4 w-[150px]">
      <span>
        <VisaIcon />
      </span>
      <span>
        <MasterCard />
      </span>
      <span>
        <AmericanExpressIcon />
      </span>
      <span>
        <DinersIcon />
      </span>
      <span>
        <UnionIcon />
      </span>
    </div>
  );
};

export default Partners;
