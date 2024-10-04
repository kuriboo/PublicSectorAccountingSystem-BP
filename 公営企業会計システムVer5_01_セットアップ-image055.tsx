```tsx
// Import necessary libraries
import React from 'react';

// Define type for the component props
interface DialogProps {
  title: string;
  inputLabel: string;
  inputValue: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Create a functional component using props
const CustomDialog: React.FC<DialogProps> = ({
  title,
  inputLabel,
  inputValue,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="max-w-md p-4 bg-white rounded shadow-lg">
      {/* Dialog Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button className="text-blue-500">&times;</button>
      </div>

      {/* Input Field */}
      <div className="flex items-center my-4">
        <label className="mr-2 font-bold">{inputLabel}</label>
        <input
          type="text"
          value={inputValue}
          readOnly
          className="border rounded p-1 bg-blue-100"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around">
        <button
          onClick={onOk}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CustomDialog;
```