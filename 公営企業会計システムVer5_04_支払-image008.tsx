```tsx
import React from 'react';

interface CheckboxOption {
  label: string;
  checked: boolean;
}

interface DialogProps {
  title: string;
  options: CheckboxOption[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
  onChange: (index: number) => void;
}

const Dialog: React.FC<DialogProps> = ({
  title,
  options,
  onConfirm,
  onClear,
  onCancel,
  onChange,
}) => {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded shadow-md">
      <h1 className="text-lg font-bold mb-4">{title}</h1>
      <div className="border p-2 mb-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={option.checked}
              onChange={() => onChange(index)}
              className="mr-2"
            />
            <span>{option.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Dialog;
```