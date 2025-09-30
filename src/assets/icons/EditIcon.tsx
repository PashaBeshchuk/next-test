import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const EditIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.66675 4.66674H4.00008C3.64646 4.66674 3.30732 4.80721 3.05727 5.05726C2.80722 5.30731 2.66675 5.64645 2.66675 6.00007V12.0001C2.66675 12.3537 2.80722 12.6928 3.05727 12.9429C3.30732 13.1929 3.64646 13.3334 4.00008 13.3334H10.0001C10.3537 13.3334 10.6928 13.1929 10.9429 12.9429C11.1929 12.6928 11.3334 12.3537 11.3334 12.0001V11.3334M10.6667 3.3334L12.6667 5.3334M13.5901 4.39007C13.8526 4.12751 14.0002 3.77139 14.0002 3.40007C14.0002 3.02875 13.8526 2.67264 13.5901 2.41007C13.3275 2.14751 12.9714 2 12.6001 2C12.2288 2 11.8726 2.14751 11.6101 2.41007L6.00008 8.00007V10.0001H8.00008L13.5901 4.39007Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EditIcon;
