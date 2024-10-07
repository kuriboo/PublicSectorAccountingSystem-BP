import React from "react";

// Props interface for customization
interface BudgetInputProps {
  header: string;
  budgetSummary: number;
  specialIncome: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const BudgetInput: React.FC<BudgetInputProps> = ({
  header,
  budgetSummary,
  specialIncome,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">{header}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-2">
            <span>予算編成額：</span>
            <span className="ml-2">{budgetSummary.toLocaleString()} 円</span>
          </div>
          <div className="mb-2">
            <span>特定収入額：</span>
            <span className="ml-2">{specialIncome.toLocaleString()} 円</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-700"
            onClick={onSubmit}
          >
            OK
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mb-2 hover:bg-gray-700"
            onClick={onClear}
          >
            クリア
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={onCancel}
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetInput;
