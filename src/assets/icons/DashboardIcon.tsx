
import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const DashboardIcon: React.FC<IconProps> = ({  size = 20,  ...props }) => (
    <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current"
    {...props}
>
    <path
    d="M3.33325 3.33325H8.33325V9.99992H3.33325V3.33325Z"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    />
    <path
    d="M3.33325 13.3333H8.33325V16.6666H3.33325V13.3333Z"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    />
    <path
    d="M11.6666 9.99992H16.6666V16.6666H11.6666V9.99992Z"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    />
    <path
    d="M11.6666 3.33325H16.6666V6.66659H11.6666V3.33325Z"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    />
</svg>
);

export default DashboardIcon;
