```tsx
import React from 'react';

// Type definitions for the props
interface BudgetFormProps {
  year: string;
  budgetDivision: string;
  divisionOptions: { value: string; label: string }[];
  count: number;
  onYearChange: (value: string) => void;
  onDivisionChange: (value: string) => void;
  onCountChange: (value: number) => void;
}

// BudgetForm Component
const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  budgetDivision,
  divisionOptions,
  count,
  onYearChange,
  onDivisionChange,
  onCountChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* Automatic Translation Information */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">自動仕訳情報</h2>
        
        {/* Year Input */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">年度</label>
          <input
            type="text"
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Budget Division Selection */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">予算編成区分</label>
          <select
            value={budgetDivision}
            onChange={(e) => onDivisionChange(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            {divisionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Count Input */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">回数</label>
          <input
            type="number"
            value={count}
            onChange={(e) => onCountChange(parseInt(e.target.value))}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 justify-end">
        <button className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600">OK</button>
        <button className="bg-gray-500 text-white rounded-md py-2 px-4 hover:bg-gray-600">クリア</button>
        <button className="bg-gray-500 text-white rounded-md py-2 px-4 hover:bg-gray-600">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;
```