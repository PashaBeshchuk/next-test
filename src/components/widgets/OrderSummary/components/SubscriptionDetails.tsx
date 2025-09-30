import React from 'react';

const SubscriptionDetails = () => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex justify-between">
        <p className="text-grey-600">Quantity of IP</p>
        <p>100 IPs</p>
      </div>
      <div className="flex justify-between">
        <p className="text-grey-600">Location</p>
        <p>United Kingdom</p>
      </div>
      <div className="flex justify-between">
        <p className="text-grey-600">Price per IP</p>
        <p>$2.50</p>
      </div>
      <div className="flex justify-between">
        <p className="text-grey-600">Subscription period</p>
        <p>12 months</p>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
