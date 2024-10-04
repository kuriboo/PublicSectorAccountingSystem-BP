```tsx
import React from 'react';

// TypeScript interface for component props
interface PrintSelectionProps {
  options: Option[];
  selectedOptions: string[];
  onChange: (selectedOptions: string[]) => void;
}

interface Option {
  label: string;
  value: string;
}

const PrintSelection: React.FC<PrintSelectionProps> = ({ options, selectedOptions, onChange }) => {
  const handleCheckboxChange = (value: string) => {
    if (selectedOptions.includes(value)) {
      onChange(selectedOptions.filter(option => option !== value));
    } else {
      onChange([...selectedOptions, value]);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="font-bold mb-2">印刷対象帳票名</h3>
      <div className="mb-4 space-y-2">
        {options.map(option => (
          <div key={option.value}>
            <label className="flex items-center">
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                className="mr-2"
              />
              <span>{option.label}</span>
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md">OK</button>
        <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md">クリア</button>
        <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md">キャンセル</button>
      </div>
    </div>
  );
};

export default PrintSelection;
```