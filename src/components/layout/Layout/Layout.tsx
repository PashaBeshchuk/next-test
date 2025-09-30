import { FC, ReactNode } from 'react';
import MobileHeader from '../MobileHeader/index';
interface LayoutProps {
  sidebar: ReactNode;
  main: ReactNode;
  aside: ReactNode;
}

const Layout: FC<LayoutProps> = ({ sidebar, main, aside }) => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="hidden md:block w-64 bg-white p-4 rounded-r shadow-sm mr-2">
        {sidebar}
      </aside>
      <div className="flex-1 flex flex-col ">
        <MobileHeader />

        <div className="mb-4 p-4">
          <button className="inline-flex items-center justify-center w-[110px] h-[28px] gap-1 px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 font-bold  text-[12px]">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4L6 8L10 12"
                  stroke="#1F2A37"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Back to all</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 p-4">
          <main className="flex-1">{main}</main>
          <aside className="w-full md:flex-[0_10_20rem] min-w-0 overflow-hidden self-start">
            {aside}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Layout;
