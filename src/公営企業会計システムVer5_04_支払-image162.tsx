// Import React and necessary hooks
import React from 'react';

// Define TypeScript interface for the component props
interface BudgetFormProps {
  budgetDivision?: string;
  budgetCategory?: string;
  budgetSubcategory?: string;
  revenueDivision?: string;
  exchangeAmount?: number;
  originalAmount?: number;
  consumptionTaxRate?: number;
  consumptionTaxAmount?: number;
  onApprove?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
}

// Create a functional component with Tailwind CSS classes
const BudgetForm: React.FC<BudgetFormProps> = ({
  budgetDivision = "総係旅費",
  budgetCategory = "総 普通旅費",
  budgetSubcategory = "総 普通旅費",
  revenueDivision = "課税",
  exchangeAmount = 11000,
  originalAmount = 10000,
  consumptionTaxRate = 10,
  consumptionTaxAmount = 1000,
  onApprove,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-6 border rounded-md shadow-md bg-white">
      {/* Budget Information */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">予算科目</h2>
        <div>予算部: {budgetDivision}</div>
        <div>予算細部: {budgetCategory}</div>
        <div>予算明細: {budgetSubcategory}</div>
      </div>

      {/* Revenue Information */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">税区分</h2>
        <div>収入区分: {revenueDivision}</div>
      </div>

      {/* Input Section */}
      <div className="mb-4">
        <label className="block mb-1">振替額</label>
        <input
          type="number"
          value={exchangeAmount}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">本体金額</label>
        <input
          type="number"
          value={originalAmount}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">消費税率</label>
        <div className="flex items-center">
          <input
            type="number"
            value={consumptionTaxRate}
            readOnly
            className="w-16 p-2 border rounded mr-2"
          />
          <span>%</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1">消費税額</label>
        <input
          type="number"
          value={consumptionTaxAmount}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onApprove}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          摘要
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
}

export default BudgetForm;
