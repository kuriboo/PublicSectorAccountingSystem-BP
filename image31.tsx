import React from 'react';

// 型定義
interface RadioButtonGroupProps {
  options: { label: string; value: string }[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  name,
  selectedValue,
  onChange
}) => {
  return (
    <div className="flex space-x-4 border border-gray-400 p-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="form-radio text-blue-600"
          />
          <span className="text-blue-800">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;