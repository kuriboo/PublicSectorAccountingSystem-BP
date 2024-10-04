```tsx
import React from 'react';

// TypeScriptの型定義
type BudgetFormProps = {
  year: string;
  budgetSection: string;
  count: string;
  onYearChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBudgetSectionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onCountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onListOutputClick: () => void;
  onClearClick: () => void;
  onEndClick: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  budgetSection,
  count,
  onYearChange,
  onBudgetSectionChange,
  onCountChange,
  onListOutputClick,
  onClearClick,
  onEndClick,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      {/* タイトル部分 */}
      <div className="bg-blue-200 p-2 rounded-t-lg mb-4">
        <h2 className="text-xl text-blue-800">予算特定収入科目設定一覧表</h2>
      </div>

      {/* フォーム部分 */}
      <div className="max-w-md bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="mb-4">
          <label className="block text-blue-800 font-medium mb-2">
            会計年度
          </label>
          <input
            type="text"
            value={year}
            onChange={onYearChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-800 font-medium mb-2">
            予算編成区分
          </label>
          <select
            value={budgetSection}
            onChange={onBudgetSectionChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="1">当初予算</option>
            <option value="2">補正予算</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-blue-800 font-medium mb-2">回数</label>
          <input
            type="text"
            value={count}
            onChange={onCountChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* ボタン部分 */}
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onListOutputClick}
            className="bg-gray-200 px-4 py-2 rounded shadow"
          >
            一覧出力
          </button>
          <button
            onClick={onClearClick}
            className="bg-gray-200 px-4 py-2 rounded shadow"
          >
            クリア
          </button>
          <button
            onClick={onEndClick}
            className="bg-gray-200 px-4 py-2 rounded shadow"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
```