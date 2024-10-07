// Import necessary libraries
import React from 'react';

// Define types for the component props
interface FormProps {
  entryDate?: string;
  receiptNumber?: string;
  divisionNumber?: string;
  amount?: number;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Define the functional component
const InventoryInputForm: React.FC<FormProps> = ({
  entryDate,
  receiptNumber,
  divisionNumber,
  amount = 0,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      {/* Entry Section */}
      <div className="mb-4">
        <label className="block text-gray-700">入庫日</label>
        <input
          type="date"
          value={entryDate}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Receipt Number Section */}
      <div className="mb-4">
        <label className="block text-gray-700">伝票番号</label>
        <input
          type="text"
          value={receiptNumber}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Division Number Section */}
      <div className="mb-4">
        <label className="block text-gray-700">入出庫番号</label>
        <input
          type="text"
          value={divisionNumber}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Amount Section */}
      <div className="mb-4">
        <label className="block text-gray-700">金額合計</label>
        <input
          type="text"
          value={amount.toLocaleString()}
          disabled
          className="w-full p-2 border rounded bg-gray-200"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          type="button"
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

// Export the component as default
export default InventoryInputForm;
```