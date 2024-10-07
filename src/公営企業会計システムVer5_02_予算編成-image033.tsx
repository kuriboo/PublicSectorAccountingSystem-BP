import React from 'react';

// プロパティの型定義
interface BudgetRequestFormProps {
  year: string;
  budgetDivisionOptions: string[];
  finalAmountValue: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// コンポーネント定義
const BudgetRequestForm: React.FC<BudgetRequestFormProps> = ({
  year,
  budgetDivisionOptions,
  finalAmountValue,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md max-w-xl mx-auto">
      {/* 年度入力 */}
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="text"
          value={year}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          readOnly
        />
      </div>

      {/* 予算種区分 */}
      <div className="mb-4">
        <label className="block text-gray-700">予算種区分</label>
        <select className="mt-1 p-2 border border-gray-300 rounded-md w-full">
          {budgetDivisionOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* 最終金額値 */}
      <div className="mb-4">
        <label className="block text-gray-700">最終金額値</label>
        <input
          type="text"
          value={finalAmountValue}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          readOnly
        />
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-yellow-500 text-white py-2 px-4 rounded-md"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded-md"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetRequestForm;
