import React from 'react';

type BudgetFormProps = {
  year: string;
  budgetType: string;
  section: string;
  subSection: string;
  detail: string;
  onSearch: () => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  budgetType,
  section,
  subSection,
  detail,
  onSearch,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <input
          type="text"
          value={year}
          readOnly
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">予算編成区分</label>
        <input
          type="text"
          value={budgetType}
          readOnly
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">節</label>
        <input
          type="text"
          value={section}
          readOnly
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">細節</label>
        <input
          type="text"
          value={subSection}
          readOnly
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">明細</label>
        <input
          type="text"
          value={detail}
          readOnly
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div className="flex justify-between space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm"
          onClick={onSearch}
        >
          表示
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded-md shadow-sm"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
```