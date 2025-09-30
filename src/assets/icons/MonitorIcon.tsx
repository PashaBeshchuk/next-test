import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const MonitorIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 4.16659C2.5 3.94557 2.5878 3.73361 2.74408 3.57733C2.90036 3.42105 3.11232 3.33325 3.33333 3.33325H16.6667C16.8877 3.33325 17.0996 3.42105 17.2559 3.57733C17.4122 3.73361 17.5 3.94557 17.5 4.16659V12.4999C17.5 12.7209 17.4122 12.9329 17.2559 13.0892C17.0996 13.2455 16.8877 13.3333 16.6667 13.3333H3.33333C3.11232 13.3333 2.90036 13.2455 2.74408 13.0892C2.5878 12.9329 2.5 12.7209 2.5 12.4999V4.16659Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83325 16.6667H14.1666"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 13.3333V16.6666"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 13.3333V16.6666"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 10.0001V6.66675"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 10.0001V9.16675"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 9.99992V8.33325"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 10.0001V9.16675"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MonitorIcon;
