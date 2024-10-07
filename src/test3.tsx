import React from 'react';
import 'tailwindcss/tailwind.css';

// TypeScript interfaces for props
interface TextInputProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
}

interface SelectInputProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Reusable TextInput component
const TextInput: React.FC<TextInputProps> = ({ label, value, onChange }) => (
  <div className="flex items-center space-x-2">
    <label className="text-sm">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      className="w-16 p-1 border border-gray-300 rounded"
    />
  </div>
);

// Reusable SelectInput component
const SelectInput: React.FC<SelectInputProps> = ({ label, options, value, onChange }) => (
  <div className="flex items-center space-x-2">
    <label className="text-sm">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      className="p-1 border border-gray-300 rounded"
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

// Reusable Button component
const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    {label}
  </button>
);

// Main component
const BudgetForm: React.FC = () => {
  // Placeholder functions
  const handleTextInputChange = (value: string) => {
    console.log('Text Input:', value);
  };

  const handleSelectChange = (value: string) => {
    console.log('Select Input:', value);
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <TextInput label="年度" onChange={handleTextInputChange} />
        <TextInput label="款" onChange={handleTextInputChange} />
        <TextInput label="項" onChange={handleTextInputChange} />

        <TextInput label="目" onChange={handleTextInputChange} />
        <TextInput label="細目" onChange={handleTextInputChange} />
        <TextInput label="明細" onChange={handleTextInputChange} />

        <Button label="表示" onClick={handleButtonClick} />

        <SelectInput
          label="金額印字区分"
          options={['名称・金額印字せず']}
          onChange={handleSelectChange}
        />
      </div>

      <div>
        <Button label="OK" onClick={handleButtonClick} />
        <Button label="クリア" onClick={handleButtonClick} />
        <Button label="終了" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default BudgetForm;