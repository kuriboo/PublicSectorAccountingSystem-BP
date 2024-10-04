```tsx
import React from 'react';

// 型定義
interface TaxCalculationFormProps {
  accountingYearMonthStart: string;
  accountingYearMonthEnd: string;
  budgetItemStart: string;
  budgetItemEnd: string;
  rateSpecified: boolean;
  rate: number;
  onCSVExport: () => void;
  onClear: () => void;
  onClose: () => void;
}

// コンポーネント定義
const TaxCalculationForm: React.FC<TaxCalculationFormProps> = ({
  accountingYearMonthStart,
  accountingYearMonthEnd,
  budgetItemStart,
  budgetItemEnd,
  rateSpecified,
  rate,
  onCSVExport,
  onClear,
  onClose
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h1 className="text-xl font-bold text-blue-900 mb-4">月次・年次消費税計算書</h1>
      <div className="mb-4">
        <h2 className="font-bold mb-2">範囲指定</h2>
        <div className="mb-2">
          <label className="font-medium">作成年月</label>
          <input type="text" value={accountingYearMonthStart} className="border p-1 mx-2" readOnly />
          <input type="text" value={accountingYearMonthEnd} className="border p-1 mx-2" readOnly />
        </div>
        <div className="mb-2">
          <label className="font-medium">予算科目</label>
          <input type="text" value={budgetItemStart} className="border p-1 mx-2" readOnly />
          <input type="text" value={budgetItemEnd} className="border p-1 mx-2" readOnly />
        </div>
        <div className="mb-2">
          <label className="font-medium">税率</label>
          <label className="mx-2">
            <input type="radio" checked={!rateSpecified} readOnly />
            指定しない
          </label>
          <label className="mx-2">
            <input type="radio" checked={rateSpecified} readOnly />
            指定する
          </label>
          <input type="number" value={rate} className="border p-1 mx-2 w-16" readOnly />%
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onCSVExport} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded">
          CSV出力
        </button>
        <button onClick={onClear} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default TaxCalculationForm;
```