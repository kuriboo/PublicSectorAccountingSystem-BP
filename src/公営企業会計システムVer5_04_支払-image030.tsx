// components/BudgetEntryForm.tsx
import React from 'react';

type BudgetEntryFormProps = {
  budgetSection: string;
  budgetSectionCode: string;
  budgetDetail: string;
  budgetDetailCode: string;
  budgetSubdetail: string;
  budgetSubdetailCode: string;
  budgetAmount: number;
  taxAmount: number;
  consumptionTaxRate: number;
  consumptionTaxAmount: number;
  totalBudgetAmount: number;
  totalCostAmount: number;
  remainingBudget: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BudgetEntryForm: React.FC<BudgetEntryFormProps> = ({
  budgetSection,
  budgetSectionCode,
  budgetDetail,
  budgetDetailCode,
  budgetSubdetail,
  budgetSubdetailCode,
  budgetAmount,
  taxAmount,
  consumptionTaxRate,
  consumptionTaxAmount,
  totalBudgetAmount,
  totalCostAmount,
  remainingBudget,
  onSubmit,
  onClear,
  onCancel,
}) => (
  <div className="p-4 border rounded shadow-md">
    <div className="flex">
      <div className="w-1/2 p-2">
        <h2 className="font-bold mb-2">予算科目</h2>
        <div className="mb-2">
          <span>予算節: </span>
          <span>{`${budgetSectionCode} ${budgetSection}`}</span>
        </div>
        <div className="mb-2">
          <span>予算細節: </span>
          <span>{`${budgetDetailCode} ${budgetDetail}`}</span>
        </div>
        <div className="mb-2">
          <span>予算明細: </span>
          <span>{`${budgetSubdetailCode} ${budgetSubdetail}`}</span>
        </div>
        <button
          className="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onSubmit}
        >
          科目検索
        </button>
      </div>

      <div className="w-1/2 p-2">
        <h2 className="font-bold mb-2">予算残情報</h2>
        <div className="mb-2">
          <span>予算残額: </span>
          <span>{totalBudgetAmount}</span>
        </div>
        <div className="mb-2">
          <span>負担累計: </span>
          <span>{totalCostAmount}</span>
        </div>
        <div className="mb-2">
          <span>負担残額: </span>
          <span>{remainingBudget}</span>
        </div>
      </div>
    </div>

    <div className="mt-4">
      <h2 className="font-bold mb-2">予定額情報</h2>
      <div className="flex items-center mb-2">
        <span className="w-1/3">予定額: </span>
        <input
          type="number"
          value={budgetAmount}
          className="w-2/3 border rounded px-2 py-1"
          readOnly
        />
      </div>
      <div className="flex items-center mb-2">
        <span className="w-1/3">税抜額: </span>
        <input
          type="number"
          value={taxAmount}
          className="w-2/3 border rounded px-2 py-1"
          readOnly
        />
      </div>
      <div className="flex items-center mb-2">
        <span className="w-1/3">消費税率: </span>
        <select className="w-2/3 border rounded px-2 py-1">
          <option>{consumptionTaxRate}%</option>
        </select>
      </div>
      <div className="flex items-center mb-2">
        <span className="w-1/3">消費税額: </span>
        <input
          type="number"
          value={consumptionTaxAmount}
          className="w-2/3 border rounded px-2 py-1"
          readOnly
        />
      </div>
    </div>

    <div className="flex justify-end mt-4">
      <button
        className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onSubmit}
      >
        OK
      </button>
      <button
        className="mr-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        onClick={onClear}
      >
        クリア
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={onCancel}
      >
        キャンセル
      </button>
    </div>
  </div>
);

export default BudgetEntryForm;
```