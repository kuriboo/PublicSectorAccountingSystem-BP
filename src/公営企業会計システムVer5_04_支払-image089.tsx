// components/BudgetComponent.tsx
import React from 'react';

type BudgetComponentProps = {
  budgetSection: string;
  budgetDetail: string;
  expenseAmount: number;
  taxAmount: number;
  taxRate: number;
  onSearch: () => void;
  onSummary: () => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BudgetComponent: React.FC<BudgetComponentProps> = ({
  budgetSection,
  budgetDetail,
  expenseAmount,
  taxAmount,
  taxRate,
  onSearch,
  onSummary,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-bold mb-2">予算科目</h4>
          <div className="mb-2">
            <label className="block">予算節</label>
            <input type="text" value={budgetSection} readOnly className="border p-1 mb-2 w-full" />
            <label className="block">予算細節</label>
            <input type="text" value={budgetDetail} readOnly className="border p-1 w-full" />
          </div>
          <button onClick={onSearch} className="bg-blue-500 text-white px-4 py-1 rounded">科目検索</button>
        </div>
        
        <div>
          <h4 className="font-bold mb-2">予算残情報</h4>
          <ul className="text-sm list-disc pl-5">
            <li>予算現額: 34,200</li>
            <li>負担累計: 32,000</li>
            <li>負担残額: 2,200</li>
            <li>予定累計: 0</li>
            <li>予定残額: 2,200</li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-bold mb-2">税区分</h4>
        <label className="block">負担額</label>
        <input type="number" value={expenseAmount} readOnly className="border p-1 mb-2 w-full" />
        <label className="block">税抜額</label>
        <input type="number" value={taxAmount} readOnly className="border p-1 mb-2 w-full" />
        <div className="flex items-center">
          <label className="block mr-2">消費税率</label>
          <input type="number" value={taxRate} readOnly className="border p-1 mr-2 w-16" />
          <label className="mr-2">%</label>
          <label className="block mr-2">消費税額</label>
          <input type="number" readOnly className="border p-1 w-16" />
        </div>
      </div>

      <div className="flex space-x-2">
        <button onClick={onSummary} className="bg-gray-300 px-4 py-1 rounded">摘要</button>
        <button onClick={onOk} className="bg-green-500 text-white px-4 py-1 rounded">OK</button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-1 rounded">クリア</button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-1 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetComponent;
```