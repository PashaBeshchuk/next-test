import React from 'react';
import IncludeItem from '../../../ui/IncludeItem';

const PlansInclude = () => {
  return (
    <div className="body2 bg-white mb-4 p-4 flex flex-col gap-2 mb-2 mt-2 rounded shadow-sm font-medium">
      <h3 className="h-6 text-grey-800">All plans include</h3>
      <div className="flex justify-between text-grey-600">
        <div className="flex flex-col gap-2">
          <IncludeItem text={'Unlimited Concurrent Sessions'} />
          <IncludeItem text={'Automatic Proxy Potation'} />
        </div>
        <div className="flex flex-col gap-2">
          <IncludeItem text={'Country, Region, City, or ISP Targeting'} />
          <IncludeItem text={'HTTP, SOCKS5, and UDP support'} />
        </div>
      </div>
    </div>
  );
};

export default PlansInclude;
