import React from 'react';

// Define the prop types for the component using TypeScript
interface SelectBoxProps {
  options: { value: string; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  className?: string;
}

// Create a reusable SelectBox component
const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  onChange,
  value,
  className = '',
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={onChange}
        value={value}
      >
        {/* Render each option dynamically */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        {/* SVG for the dropdown arrow */}
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-5-5h10l-5 5z" />
        </svg>
      </div>
    </div>
  );
};

export default SelectBox;
```