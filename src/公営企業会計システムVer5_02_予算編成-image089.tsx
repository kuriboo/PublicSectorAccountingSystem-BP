import React from 'react';

// 型定義
type TaxFormProps = {
  fiscalYear: string;
  budgetType: string;
  count: number;
  finalValue: string;
  onFiscalYearChange: (value: string) => void;
  onBudgetTypeChange: (value: string) => void;
  onCountChange: (value: number) => void;
  onFinalValueChange: (value: string) => void;
};

const TaxForm: React.FC<TaxFormProps> = ({
  fiscalYear,
  budgetType,
  count,
  finalValue,
  onFiscalYearChange,
  onBudgetTypeChange,
  onCountChange,
  onFinalValueChange
}) => {
  return (
    <div className="flex flex-col items-start p-4 bg-white shadow-md space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          会計年度
        </label>
        <input
          type="text"
          value={fiscalYear}
          onChange={(e) => onFiscalYearChange(e.target.value)}
          className="block w-full p-2 border rounded"
        />
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          予算種成区分
        </label>
        <select
          value={budgetType}
          onChange={(e) => onBudgetTypeChange(e.target.value)}
          className="block w-full p-2 border rounded"
        >
          <option value="1">当初予算</option>
          <option value="2">補正予算</option>
          {/* その他のオプションも追加可能 */}
        </select>
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          回数
        </label>
        <input
          type="number"
          value={count}
          onChange={(e) => onCountChange(Number(e.target.value))}
          className="block w-full p-2 border rounded"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">
          最終査定値
        </label>
        <input
          type="text"
          value={finalValue}
          onChange={(e) => onFinalValueChange(e.target.value)}
          className="block w-full p-2 border rounded"
        />
      </div>

      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded">
          クリア
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default TaxForm;
```