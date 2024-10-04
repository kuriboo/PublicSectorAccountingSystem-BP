```tsx
// Import necessary modules
import React from 'react';

// Define the props interface
interface PrintDialogProps {
  title: string;
  itemLabel: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
  isChecked: boolean;
  onToggleCheck: () => void;
}

// Functional component
const PrintDialog: React.FC<PrintDialogProps> = ({
  title,
  itemLabel,
  onConfirm,
  onClear,
  onCancel,
  isChecked,
  onToggleCheck,
}) => {
  return (
    <div className="flex flex-col max-w-md mx-auto border rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="border rounded-md p-3 my-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={onToggleCheck}
            className="mr-2"
          />
          <span>{itemLabel}</span>
        </label>
      </div>
      <div className="flex justify-around mt-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintDialog;
```