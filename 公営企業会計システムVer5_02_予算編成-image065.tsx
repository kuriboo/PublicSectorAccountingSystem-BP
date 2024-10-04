```tsx
import React, { ChangeEvent, FC } from 'react';

// 型定義
type BudgetFormProps = {
  year: string;
  budgetDivisionOptions: { value: string; label: string }[];
  onYearChange: (year: string) => void;
  onBudgetDivisionChange: (value: string) => void;
};

const BudgetForm: FC<BudgetFormProps> = ({
  year,
  budgetDivisionOptions,
  onYearChange,
  onBudgetDivisionChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      {/* 年度入力 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <input
          type="text"
          value={year}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onYearChange(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>
      {/* 予算編成区分 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">予算編成区分</label>
        <select
          onChange={(e) => onBudgetDivisionChange(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
        >
          {budgetDivisionOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">CSV出力</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;
```