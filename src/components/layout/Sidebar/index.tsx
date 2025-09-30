import React from 'react';
import BuyButton from './components/BuyButton';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SidebarUser from './components/SidebarUser';

const Sidebar = () => {
  return (
    <aside className="sidebar bg-white-50 h-screen flex flex-col">
      <Header />
      <BuyButton />

      <Navigation />
      <div className="h-px w-full bg-gray-200"></div>
      <SidebarUser />
    </aside>
  );
};

export default Sidebar;
