```tsx
import React from 'react';

type BudgetInfo = {
  label: string;
  value: number | string;
};

type CostInputFormProps = {
  budgetItems: BudgetInfo[];
  onSearch: () => void;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
  taxDivisionOptions: string[];
  incomeDivisionOptions: string[];
  amountDetermined: number;
  taxAmount: number;
  taxRate: number;
  consumptionTax: number;
};

const CostInputForm: React.FC<CostInputFormProps> = ({
  budgetItems,
  onSearch,
  onConfirm,
  onClear,
  onCancel,
  taxDivisionOptions,
  incomeDivisionOptions,
  amountDetermined,
  taxAmount,
  taxRate,
  consumptionTax,
}) => {
  return (
    <div className="p-4 border border-gray-400 rounded-lg">
      <div className="grid grid-cols-2 gap-2 mb-4">
        {/* Budget Section */}
        <div className="border p-2">
          <h2 className="font-bold">予算科目</h2>
          {budgetItems.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={onSearch}>科目検索</button>
        </div>

        {/* Budget Remainder Info */}
        <div className="border p-2">
          <h2 className="font-bold">予算残情報</h2>
          {/* Placeholder values, replace with actual logic */}
          <div className="flex justify-between"><span>予算現額</span><span>34,200</span></div>
          <div className="flex justify-between"><span>負担累計</span><span>20,000</span></div>
          <div className="flex justify-between"><span>負担残額</span><span>14,200</span></div>
          <div className="flex justify-between"><span>予定累計</span><span>0</span></div>
          <div className="flex justify-between"><span>予定残額</span><span>14,200</span></div>
        </div>
      </div>

      {/* Tax and Income Division */}
      <div className="mb-4">
        <label className="block">税区分</label>
        <select className="border p-1 mb-2">
          {taxDivisionOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <label className="block">収入区分</label>
        <select className="border p-1">
          {incomeDivisionOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Decision Amount Section */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="col-span-1">
          <label className="block">決定額</label>
          <input type="number" className="border p-1 w-full" value={amountDetermined} readOnly />
        </div>

        <div className="col-span-1">
          <label className="block">税抜額</label>
          <input type="number" className="border p-1 w-full" value={taxAmount} readOnly />
        </div>

        <div className="col-span-1">
          <label className="block">消費税率</label>
          <div className="flex items-center">
            <input type="number" className="border p-1 w-full" value={taxRate} readOnly />
            <span className="ml-1">%</span>
          </div>
        </div>
        
        <div className="col-span-1">
          <label className="block">消費税額</label>
          <input type="number" className="border p-1 w-full" value={consumptionTax} readOnly />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onConfirm}>OK</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={onClear}>クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default CostInputForm;
```