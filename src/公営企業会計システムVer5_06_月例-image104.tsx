// Import necessary modules
import React from 'react';

// Define the Props type for the component
type BudgetFormProps = {
  date: string;
  departmentRangeStart: string;
  departmentRangeEnd: string;
  budgetItemRangeStart: string;
  budgetItemRangeEnd: string;
  onGenerateCSV: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Create the BudgetForm component
const BudgetForm: React.FC<BudgetFormProps> = ({
  date,
  departmentRangeStart,
  departmentRangeEnd,
  budgetItemRangeStart,
  budgetItemRangeEnd,
  onGenerateCSV,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-purple-700">範囲指定</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">作表日</label>
        <input
          type="text"
          value={date}
          readOnly
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">所属</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={departmentRangeStart}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
          <input
            type="text"
            value={departmentRangeEnd}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">予算科目</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={budgetItemRangeStart}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
          <input
            type="text"
            value={budgetItemRangeEnd}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end space-x-3">
        <button
          onClick={onGenerateCSV}
          className="px-4 py-2 bg-purple-600 text-white rounded-md shadow-sm hover:bg-purple-700"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-600 text-white rounded-md shadow-sm hover:bg-gray-700"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700"
        >
          終了
        </button>
      </div>
    </div>
  );
};

// Export the component as default
export default BudgetForm;
```