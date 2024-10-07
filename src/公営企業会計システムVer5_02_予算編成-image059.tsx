import React from 'react';

// TypeScript型定義
type BudgetAllocationProps = {
  year: string;
  budgetCategory: string;
  divisionOptions: string[];
  divisionValue: string;
  updateDivisionValue: (value: string) => void;
  onSearch: () => void;
  onDisplay: () => void;
  onClear: () => void;
  onConfirm: () => void;
};

const BudgetAllocation: React.FC<BudgetAllocationProps> = ({
  year,
  budgetCategory,
  divisionOptions,
  divisionValue,
  updateDivisionValue,
  onSearch,
  onDisplay,
  onClear,
  onConfirm,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="font-bold">年度: </span>
          <span>{year}</span>
        </div>
        <div>
          <span className="font-bold">予算種成区分: </span>
          <select
            value={budgetCategory}
            className="ml-2 p-1 border border-gray-300 rounded"
          >
            {divisionOptions.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="text"
          value={divisionValue}
          onChange={(e) => updateDivisionValue(e.target.value)}
          className="p-1 border border-gray-300 rounded w-24"
        />
        <button
          onClick={onSearch}
          className="ml-2 bg-blue-500 p-2 text-white rounded"
        >
          科目検索
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onDisplay}
          className="bg-blue-500 p-2 text-white rounded"
        >
          表示
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 p-2 text-black rounded"
        >
          クリア
        </button>
        <button
          onClick={onConfirm}
          className="bg-green-500 p-2 text-white rounded"
        >
          確定
        </button>
      </div>
    </div>
  );
};

export default BudgetAllocation;
```