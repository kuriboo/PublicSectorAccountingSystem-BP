import React from 'react';

// TypeScriptの型定義
type BudgetAllocationProps = {
  fiscalYear: string;
  budgetType: string;
  startPeriod: string;
  endPeriod: string;
  onEdit: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

// Next.js + TypeScriptのコンポーネント
const BudgetAllocation: React.FC<BudgetAllocationProps> = ({
  fiscalYear,
  budgetType,
  startPeriod,
  endPeriod,
  onEdit,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">予算配当確定</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <label className="col-span-1">年度</label>
        <input
          type="text"
          value={fiscalYear}
          className="col-span-2 border p-2 rounded"
          readOnly
        />
        <label className="col-span-1">予算編成区分</label>
        <input
          type="text"
          value={budgetType}
          className="col-span-2 border p-2 rounded"
          readOnly
        />
        <label className="col-span-1">配当期間</label>
        <div className="col-span-2 flex">
          <input
            type="text"
            value={startPeriod}
            className="flex-1 border p-2 rounded mr-2"
            readOnly
          />
          <span className="p-2">～</span>
          <input
            type="text"
            value={endPeriod}
            className="flex-1 border p-2 rounded"
            readOnly
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={onEdit}
          className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded"
        >
          編集
        </button>
        <button
          onClick={onOk}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetAllocation;
```