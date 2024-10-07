// Import necessary modules from React
import React from 'react';

// Define the types for the component props
interface PrintSelectionProps {
  options: { label: string; checked: boolean }[];
  onOptionChange: (index: number, checked: boolean) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Create a functional component with specified props
const PrintSelection: React.FC<PrintSelectionProps> = ({
  options,
  onOptionChange,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow bg-white">
      <h3 className="mb-2 text-lg font-semibold">印刷対象帳票名</h3>
      <div className="border p-2 mb-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={option.checked}
              onChange={(e) => onOptionChange(index, e.target.checked)}
              className="mr-2"
            />
            <label>{option.label}</label>
          </div>
        ))}
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onOk}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintSelection;
