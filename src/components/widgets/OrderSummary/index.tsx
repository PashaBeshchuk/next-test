import React from 'react';
import IncludeItem from '../../ui/IncludeItem';
import Partners from './components/Partners';
import PromoCode from './components/PromoCode';
import SubscriptionDetails from './components/SubscriptionDetails';

const OrderSummary = () => {
  return (
    <div className="body2 text-grey-800 font-medium">
      <div className="bg-white rounded shadow-sm p-4 mb-4">
        <h2 className="h5 mb-4">Order summary</h2>
        <div className="flex flex-col gap-2 font-medium mb-4">
          <h3 className="subtitle1">Datacenter Proxies</h3>
          <IncludeItem text={'3-day Trial'} />
          <IncludeItem text={'Customer Success Manager'} />
        </div>
        <SubscriptionDetails />
        <PromoCode />
        <div className="h-px w-full bg-gray-200 mb-4"></div>
        <div className="flex justify-between items-center">
          <p>Total</p>
          <p className="h4 font-medium">$140.00</p>
        </div>
      </div>
      <div className="mb-4 ">
        <button className="w-full custom-button h-[40px] bg-brand-500 text-white">
          Continue to checkout
        </button>
      </div>
      <div className="flex justify-center items-center  gap-0 mb-4 text-black">
        <Partners />
      </div>
    </div>
  );
};

export default OrderSummary;
