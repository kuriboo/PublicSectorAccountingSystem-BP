```tsx
import React from 'react';

// TypeScriptの型定義
interface BudgetSettingProps {
  fiscalYear: string;
  budgetCategory: string;
  repetitions: number;
  finalApprovalValue: string;
  onFiscalYearChange: (year: string) => void;
  onBudgetCategoryChange: (category: string) => void;
  onRepetitionsChange: (reps: number) => void;
  onFinalApprovalValueChange: (value: string) => void;
}

// コンポーネント定義
const BudgetSetting: React.FC<BudgetSettingProps> = ({
  fiscalYear,
  budgetCategory,
  repetitions,
  finalApprovalValue,
  onFiscalYearChange,
  onBudgetCategoryChange,
  onRepetitionsChange,
  onFinalApprovalValueChange,
}) => {
  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">会計年度</label>
        <input
          type="text"
          value={fiscalYear}
          onChange={(e) => onFiscalYearChange(e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-1 font-semibold">予算編成区分</label>
        <select
          value={budgetCategory}
          onChange={(e) => onBudgetCategoryChange(e.target.value)}
          className="border px-2 py-1 w-full"
        >
          <option value="1">当初予算</option>
          <option value="2">補正予算</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">回数</label>
        <input
          type="number"
          value={repetitions}
          onChange={(e) => onRepetitionsChange(Number(e.target.value))}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">最終査定値</label>
        <input
          type="text"
          value={finalApprovalValue}
          onChange={(e) => onFinalApprovalValueChange(e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">OK</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">終了</button>
      </div>
    </div>
  );
};

export default BudgetSetting;
```