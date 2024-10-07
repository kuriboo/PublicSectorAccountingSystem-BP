import React from 'react';
import 'tailwindcss/tailwind.css';

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'danger';
};

type RadioButtonProps = {
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'default' }) => {
  const baseStyle = 'px-4 py-2 rounded-full mx-1';
  const variantStyle = variant === 'danger' ? 'bg-red-300 hover:bg-red-400' : 'bg-gray-300 hover:bg-gray-400';

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle}`}>
      {label}
    </button>
  );
};

export const RadioButtonGroup: React.FC<RadioButtonProps> = ({ name, options, selectedValue, onChange }) => (
  <div className="flex items-center space-x-2">
    {options.map(option => (
      <label key={option.value} className="flex items-center space-x-1">
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={() => onChange(option.value)}
          className="form-radio text-blue-500"
        />
        <span>{option.label}</span>
      </label>
    ))}
  </div>
);

// Usage example (use inside a page or another component)
// <Button label="明細編集" onClick={() => console.log('Edit clicked')} />
// <Button label="行削除" variant="danger" onClick={() => console.log('Delete clicked')} />
// <RadioButtonGroup
//   name="processingOption"
//   options={[
//     { value: 'taxIncluded', label: '税込率' },
//     { value: 'detailed', label: '明細毎' },
//   ]}
//   selectedValue="taxIncluded"
//   onChange={(value) => console.log(value)}
// />
