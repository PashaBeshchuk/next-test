import React from 'react';
import Header from '../Sidebar/components/Header';

const MobileHeader = () => {
  return (
    <div className="md:hidden bg-white">
      <Header mobile />
    </div>
  );
};

export default MobileHeader;
