import AffiliateIcon from '@/assets/icons/AffiliateIcon';
import AllProductsIcons from '@/assets/icons/AllProductsIcons';
import APIKeysIcons from '@/assets/icons/APIKeysIcons';
import APIRequests from '@/assets/icons/APIRequests';
import BillingIcons from '@/assets/icons/BillingIcons';
import DashboardIcon from '@/assets/icons/DashboardIcon';
import HelpIcon from '@/assets/icons/HelpIcon';
import MonitorIcon from '@/assets/icons/MonitorIcon';
import ObservabilityIcon from '@/assets/icons/ObservabilityIcon';
import ProxyListIcon from '@/assets/icons/ProxyListIcon';
import Resellers from '@/assets/icons/Resellers';
import SummaryIcon from '@/assets/icons/SummaryIcon';
import UserSettingsIcon from '@/assets/icons/UserSettingsIcon';
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="sidebar-nav flex-1 overflow-y-auto p-2">
      <ul className="space-y-2">
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-2 text-grey-800 rounded hover:bg-brand-50 group"
          >
            <span className="icon group-hover:text-brand-500  pl-1">
              <DashboardIcon />
            </span>
            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              Dashboard
            </span>
          </Link>
        </li>
        <li className="font-space font-medium text-[12px] leading-5 tracking-[0.7px] uppercase px-2 py-1 mt-4 text-gray-700">
          System Overview
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-2 text-grey-800 rounded hover:bg-brand-50 group"
          >
            <span className="icon group-hover:text-brand-500  pl-1">
              <ObservabilityIcon />
            </span>
            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              Observability Overview
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-2 rounded hover:bg-brand-50 group text-grey-800"
          >
            <span className="icon group-hover:text-brand-500 pl-1">
              <MonitorIcon />
            </span>

            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              Live Log Monitor
            </span>
          </Link>
        </li>

        <li className="font-space font-medium text-[12px] leading-5 tracking-[0.7px] uppercase px-2 py-1 mt-4 text-gray-700">
          My Services
        </li>

        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-2 rounded hover:bg-brand-50 group text-grey-800"
          >
            <span className="icon group-hover:text-brand-500 pl-1">
              <SummaryIcon />
            </span>

            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              Summary
            </span>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex items-center gap-4 p-2 rounded hover:bg-brand-50 group">
            <span className="icon group-hover:text-brand-500 pl-1">
              <ProxyListIcon />
            </span>

            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              Proxy List
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-2 rounded hover:bg-brand-50 group text-grey-800"
          >
            <span className="icon group-hover:text-brand-500 pl-1">
              <UserSettingsIcon />
            </span>

            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              User Settings
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-2 rounded hover:bg-brand-50 group text-grey-800"
          >
            <span className="icon group-hover:text-brand-500 pl-1">
              <AllProductsIcons />
            </span>

            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              All Products
            </span>
          </Link>
        </li>
        <li className="font-space font-medium text-[12px] leading-5 tracking-[0.7px] uppercase px-2 py-1 mt-4 text-gray-700">
          Developer Section
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-2 rounded hover:bg-brand-50 group text-grey-800"
          >
            <span className="icon group-hover:text-brand-500 pl-1">
              <APIKeysIcons />
            </span>
            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              API Keys
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-2 rounded hover:bg-brand-50 group text-grey-800"
          >
            <span className="icon group-hover:text-brand-500 pl-1">
              <APIRequests />
            </span>
            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              API Requests
            </span>
          </Link>
        </li>
        <li className="font-space font-medium text-[12px] leading-5 tracking-[0.7px] uppercase px-2 py-1 mt-4 text-gray-700">
          Affiliate Programs
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-2 rounded hover:bg-brand-50 group text-grey-800"
          >
            <span className="icon group-hover:text-brand-500 pl-1">
              <Resellers />
            </span>
            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              Resellers Statistics
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-2 rounded hover:bg-brand-50 group text-grey-800"
          >
            <span className="icon group-hover:text-brand-500 pl-1">
              <AffiliateIcon />
            </span>

            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              Affiliate Program
            </span>
          </Link>
        </li>
        <div className="h-px w-full bg-gray-200"></div>
        <li>
          <Link
            href="/"
            className="flex items-center text-grey-800 gap-4 p-2 rounded hover:bg-brand-50 group text-grey-800"
          >
            <span className="icon group-hover:text-brand-500 pl-1">
              <BillingIcons />
            </span>

            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              Billing
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 p-2 rounded hover:bg-brand-50 group text-grey-800"
          >
            <span className="icon group-hover:text-brand-500 pl-1">
              <HelpIcon />
            </span>
            <span className="font-space font-medium text-sm tracking-normal group-hover:text-brand-500">
              Help
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
