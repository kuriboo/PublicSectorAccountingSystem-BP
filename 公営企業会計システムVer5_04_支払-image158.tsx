```tsx
import React from 'react';

interface FormProps {
  budgetSection?: string;
  budgetDetail?: string;
  taxDivision?: string;
  revenueDivision?: string;
  transferAmount?: number;
  mainAmount?: number;
  consumptionTaxRate?: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const BudgetForm: React.FC<FormProps> = ({
  budgetSection = "配改・工事請負費",
  budgetDetail = "配改・配水布設費",
  taxDivision = "課税",
  revenueDivision = "課税",
  transferAmount = 440000,
  mainAmount = 400000,
  consumptionTaxRate = 10,
  onSubmit,
  onClear,
  onCancel
}) => {
  return (
    <form className="p-4 bg-white shadow rounded">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">予算節</label>
        <input
          type="text"
          value={budgetSection}
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">税区分</label>
        <input
          type="text"
          value={taxDivision}
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">収入区分</label>
        <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
          <option>{revenueDivision}</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">振替額</label>
        <input
          type="number"
          value={transferAmount}
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">本体金額</label>
        <input
          type="number"
          value={mainAmount}
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">消費税率</label>
        <div className="flex items-center">
          <input
            type="number"
            value={consumptionTaxRate}
            readOnly
            className="mt-1 block w-1/2 p-2 border border-gray-300 rounded"
          />
          <span className="ml-2">%</span>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onSubmit}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
        >
          OK
        </button>
        <button
          type="button"
          onClick={onClear}
          className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          クリア
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          キャンセル
        </button>
      </div>
    </form>
  );
};

export default BudgetForm;
```