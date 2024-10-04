```tsx
import React from 'react';

type FormProps = {
  year: string;
  budgetCategory: number;
  budgetDetails: string;
  correctionOnly: boolean;
  amountType: string;
  subjectLevel: string;
  taxRounding: boolean;
  rangeStart: string;
  rangeEnd: string;
  taxRate: number;
  reducedTax: boolean;
  collectionTarget: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetForm: React.FC<FormProps> = ({
  year,
  budgetCategory,
  budgetDetails,
  correctionOnly,
  amountType,
  subjectLevel,
  taxRounding,
  rangeStart,
  rangeEnd,
  taxRate,
  reducedTax,
  collectionTarget,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">消費税額計算書作成</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          年度
        </label>
        <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" value={year}>
          <option>平成30</option>
          <option>平成31</option>
          <option>令和1</option>
        </select>
      </div>
      
      {/* Budget Details */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          予算編成区分
        </label>
        <input
          type="number"
          value={budgetCategory}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={budgetDetails}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Correction Checkbox */}
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={correctionOnly}
        />
        <label className="ml-2 text-sm font-medium text-gray-700">
          今回補正額のみ
        </label>
      </div>

      {/* Amount Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          金額種別
        </label>
        <div>
          <input type="radio" name="amount" value="見積要求額" checked={amountType === '見積要求額'} />
          <label className="ml-2 text-sm font-medium text-gray-700">
            見積要求額
          </label>
        </div>
        <div>
          <input type="radio" name="amount" value="査定額" checked={amountType === '査定額'} />
          <label className="ml-2 text-sm font-medium text-gray-700">
            査定額
          </label>
        </div>
      </div>

      {/* Tax Rounding */}
      <div className="mb-4 flex items-center">
        <input type="checkbox" checked={taxRounding} />
        <label className="ml-2 text-sm font-medium text-gray-700">
          決算見込消費税額の千円丸め
        </label>
      </div>

      {/* Range Specification */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          範囲指定
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={rangeStart}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <span>〜</span>
          <input
            type="text"
            value={rangeEnd}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Tax Rate and Reduction */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          税率
        </label>
        <input
          type="number"
          value={taxRate}
          className="mt-1 block w-20 px-3 py-2 border border-gray-300 rounded-md"
        />
        <span>%</span>
        <div className="flex items-center mt-2">
          <input type="checkbox" checked={reducedTax} />
          <label className="ml-2 text-sm font-medium text-gray-700">
            軽減税率
          </label>
        </div>
      </div>

      {/* Collection Target */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          集計対象
        </label>
        <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" value={collectionTarget}>
          <option>ブロック</option>
          <option>セグメント</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-500"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
```