```tsx
import React from 'react';

type RadioButtonProps = {
  options: { label: string; value: string }[];
  name: string;
  onChange: (value: string) => void;
  selectedValue: string;
};

const RadioButtonGroup: React.FC<RadioButtonProps> = ({ options, name, onChange, selectedValue }) => {
  return (
    <div className="flex space-x-4">
      {/* Map through the options to create radio buttons */}
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <span className="text-black">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;

// 使用例:
// <RadioButtonGroup
//   options={[{ label: '登録', value: 'register' }, { label: '訂正', value: 'modify' }, { label: '削除', value: 'delete' }]}
//   name="action"
//   onChange={(value) => console.log(value)}
//   selectedValue="register"
// />
```