```tsx
import React from 'react';

// Props interface for the component
interface PrintOptionProps {
  options: { label: string; checked: boolean }[];
  onOptionChange: (index: number, checked: boolean) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const PrintOptionComponent: React.FC<PrintOptionProps> = ({
  options,
  onOptionChange,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="border p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">印刷対象帳票名</h2>
      <ul className="mb-4">
        {options.map((option, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={option.checked}
              onChange={(e) => onOptionChange(index, e.target.checked)}
              className="mr-2"
            />
            <label className="text-base">{option.label}</label>
          </li>
        ))}
      </ul>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onOk}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintOptionComponent;
```