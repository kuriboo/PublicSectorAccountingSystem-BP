// Import necessary modules
import React from 'react';

// Define TypeScript interfaces for props
interface BudgetFilterProps {
  fiscalYear: string;
  setFiscalYear: (year: string) => void;
  budgetType: string;
  setBudgetType: (type: string) => void;
  times: number;
  setTimes: (times: number) => void;
  finalValue: string;
}

// Define the BudgetFilter component
const BudgetFilter: React.FC<BudgetFilterProps> = ({
  fiscalYear,
  setFiscalYear,
  budgetType,
  setBudgetType,
  times,
  setTimes,
  finalValue,
}) => {
  return (
    <div className="rounded-md shadow-md p-4 bg-white w-full max-w-md mx-auto">
      <h2 className="text-blue-900 font-semibold mb-4">範囲指定</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="fiscalYear" className="block text-blue-900">
            会計年度
          </label>
          <input
            id="fiscalYear"
            type="text"
            value={fiscalYear}
            onChange={(e) => setFiscalYear(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="budgetType" className="block text-blue-900">
            予算種成区分
          </label>
          <input
            id="budgetType"
            type="text"
            value={budgetType}
            onChange={(e) => setBudgetType(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="times" className="block text-blue-900">
            回数
          </label>
          <input
            id="times"
            type="number"
            value={times}
            onChange={(e) => setTimes(Number(e.target.value))}
            className="mt-1 block w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-900">最終査定値</label>
          <input
            type="text"
            value={finalValue}
            disabled
            className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button type="button" className="bg-gray-300 px-4 py-2 rounded-md">
            CSV出力
          </button>
          <button type="button" className="bg-gray-300 px-4 py-2 rounded-md">
            クリア
          </button>
          <button type="button" className="bg-gray-300 px-4 py-2 rounded-md">
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default BudgetFilter;