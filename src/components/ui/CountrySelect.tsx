'use client';
import { useState, useRef, useEffect } from 'react';

interface Country {
  code: string;
  name: string;
  flag: string;
}

const countries: Country[] = [
  { code: 'UK', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
];

export default function CountrySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Country | null>(countries[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <div
        className="w-full h-[40px] p-[8px_12px] gap-[8px] flex items-center justify-between rounded-[4px] border border-gray-300 
                   hover:bg-brand-50 hover:border-brand-500
                   focus:bg-brand-50 focus:border-brand-500 outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <span className="flex items-center gap-2">
          {selected ? (
            <>
              <span>{selected.flag}</span>
              <span>{selected.name}</span>
            </>
          ) : (
            'Select country'
          )}
        </span>
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#384250"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-[4px] shadow-md max-h-60 overflow-auto">
          {countries.map((c) => (
            <li
              key={c.code}
              className="flex items-center gap-2 p-2 hover:bg-brand-50 cursor-pointer"
              onClick={() => {
                setSelected(c);
                setIsOpen(false);
              }}
            >
              <span>{c.flag}</span>
              <span>{c.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
