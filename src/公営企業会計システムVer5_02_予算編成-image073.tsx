// Import necessary modules
import React from 'react';

// Define the prop types for the component
interface IncomeSettingProps {
  fiscalYear: string;
  budgetCategory: string;
  includeSpecialIncome: boolean;
  includeSubsidy: boolean;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
}

// Define the IncomeSetting component
const IncomeSetting: React.FC<IncomeSettingProps> = ({
  fiscalYear,
  budgetCategory,
  includeSpecialIncome,
  includeSubsidy,
  onConfirm,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-lg max-w-lg mx-auto space-y-4">
      {/* Title Section */}
      <h1 className="text-xl font-bold text-blue-700">特定収入科目設定</h1>

      {/* Instructions Section */}
      <p className="text-sm text-blue-800">
        前回設定した、特定収入が含まれる科目を引き継いで設定します。
        変更が必要な場合は、特定収入科目設定科目別修正から変更してください。
      </p>

      {/* Scope Section */}
      <div className="border-t border-b py-2">
        <h2 className="font-semibold">範囲指定</h2>
        <p>会計年度: {fiscalYear}</p>
        <p>予算種成区分: {budgetCategory}</p>
      </div>

      {/* Initial Year Settings Section */}
      <div className="border-t border-b py-2">
        <h2 className="font-semibold">初年度設定</h2>
        <label className="block">
          <input
            type="checkbox"
            checked={includeSpecialIncome}
            readOnly
            className="mr-2"
          />
          特例的未収（税区分：不課税）に特定収入が含まれる
        </label>
        <label className="block">
          <input
            type="checkbox"
            checked={includeSubsidy}
            readOnly
            className="mr-2"
          />
          特例的未収金に借入金の償還に充てられた補助金が含まれる
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default IncomeSetting;
```