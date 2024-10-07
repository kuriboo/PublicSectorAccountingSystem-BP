// Import necessary libraries
import React from 'react';

// Define the prop types
type FormProps = {
  fiscalYear: string;
  dueDate: string;
  description: string;
  previousAmount: number;
  updatedAmount: number;
  onSave: () => void;
  onClear: () => void;
  onClose: () => void;
};

// Create a functional component
const FinancialForm: React.FC<FormProps> = ({
  fiscalYear,
  dueDate,
  description,
  previousAmount,
  updatedAmount,
  onSave,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">年度:</label>
        <input
          type="text"
          value={fiscalYear}
          className="w-full p-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">納期:</label>
        <input
          type="text"
          value={dueDate}
          className="w-full p-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">変更摘要:</label>
        <input
          type="text"
          value={description}
          className="w-full p-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">合計変更前額:</label>
        <input
          type="number"
          value={previousAmount}
          className="w-full p-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">合計変更後額:</label>
        <input
          type="number"
          value={updatedAmount}
          className="w-full p-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>
      <div className="flex justify-around">
        <button onClick={onSave} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white rounded-md">
          クリア
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-md">
          終了
        </button>
      </div>
    </div>
  );
};

export default FinancialForm;
