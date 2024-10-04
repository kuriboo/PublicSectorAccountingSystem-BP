```tsx
import React from 'react';

type Props = {
  options: { label: string; checked: boolean }[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const Dialog: React.FC<Props> = ({ options, onConfirm, onClear, onCancel }) => {
  return (
    <div className="max-w-md mx-auto my-4 bg-white border rounded-md p-4 shadow-md">
      {/* Title */}
      <h1 className="text-lg font-semibold mb-4">印刷対象帳票名</h1>

      {/* Checkbox Options */}
      <ul className="mb-4">
        {options.map((option, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={option.checked}
              readOnly
              className="mr-2"
            />
            <span>{option.label}</span>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Dialog;
```