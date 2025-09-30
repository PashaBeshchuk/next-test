import Bell from '@/assets/icons/Bell';
import MobileMenu from '@/assets/icons/MobileMenu';
import React, { FC } from 'react';
interface HeaderProps {
  mobile?: boolean;
}
const Header: FC<HeaderProps> = ({ mobile }) => {
  return (
    <header className="sidebar-header flex items-center justify-between pt-2 pb-4 pl-4">
      <h1 className="font-space-grotesk font-medium text-[24px] leading-[32px] tracking-[0px]">
        Logo
      </h1>
      <div className="flex gap-4">
        <button type="button" className="relative p-2 w-[38px]">
          <Bell className="w-6 h-6 stroke-current text-gray-700" />
          <span className="absolute top-1 -right-0 w-[8px] h-[16px] inline-flex items-center justify-center bg-indigo-500 text-white text-xs font-medium rounded-full h-5 min-w-[1.25rem] px-[6px]">
            2
          </span>
        </button>
        {mobile && (
          <button type="button" className="relative p-2 w-[38px] mr-4">
            <MobileMenu />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
