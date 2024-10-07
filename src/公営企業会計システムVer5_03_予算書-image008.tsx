import React from 'react';

// Props type definition
type BudgetComponentProps = {
  year: number;
  budgetPlan: string;
  accountingCode: string;
  accountDetails: string;
  structureRatio: number;
  bodyAmount: number;
  taxAmount: number;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetComponent: React.FC<BudgetComponentProps> = ({
  year,
  budgetPlan,
  accountingCode,
  accountDetails,
  structureRatio,
  bodyAmount,
  taxAmount,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded">
      <h1 className="text-xl font-bold mb-4">千円単位自動丸め調整入力</h1>
      <div className="mb-4">
        <label className="block font-semibold">年度:</label>
        <input
          type="text"
          value={`平成${year}`}
          readOnly
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">予算編成区分:</label>
        <select className="border border-gray-300 p-2 rounded w-full">
          <option>{budgetPlan}</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">仕訳:</label>
        <input
          type="text"
          value={accountingCode}
          readOnly
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">科目名称:</label>
        <input
          type="text"
          value={accountDetails}
          readOnly
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">構成比率:</label>
        <input
          type="number"
          value={structureRatio}
          readOnly
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">千円丸め本体仕訳金額:</label>
        <input
          type="number"
          value={bodyAmount}
          readOnly
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">千円丸め消費税仕訳金額:</label>
        <input
          type="number"
          value={taxAmount}
          readOnly
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="flex justify-end space-x-3">
        <button onClick={onOk} className="bg-blue-500 text-white py-2 px-4 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white py-2 px-4 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white py-2 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetComponent;
