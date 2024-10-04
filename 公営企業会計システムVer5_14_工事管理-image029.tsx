```tsx
import React from 'react';

// TypeScript型定義
type FinancialFormProps = {
  sourceCodeOptions: Array<{ value: string; label: string }>;
  selectedSourceCode: string;
  untaxedConstructionCost: number;
  yearOptions: Array<string>;
  selectedYear: string;
  adjustmentNumber: string;
  counterpart: string;
  summary: string;
  expenseDetails: {
    taxExemptExpense: number;
    pastYearTargetAmount: number;
    pastYearOperatingExpense: number;
    currentYearTargetAmount: number;
    currentYearOperatingExpense: number;
  };
  onChange: (field: string, value: any) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const FinancialForm: React.FC<FinancialFormProps> = ({
  sourceCodeOptions,
  selectedSourceCode,
  untaxedConstructionCost,
  yearOptions,
  selectedYear,
  adjustmentNumber,
  counterpart,
  summary,
  expenseDetails,
  onChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-4">工事財源明細編集</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">財源コード</label>
        <select
          className="border rounded-md w-full p-2"
          value={selectedSourceCode}
          onChange={(e) => onChange('selectedSourceCode', e.target.value)}
        >
          {sourceCodeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">税抜財源工事費</label>
        <input
          type="number"
          className="border rounded-md w-full p-2"
          value={untaxedConstructionCost}
          onChange={(e) => onChange('untaxedConstructionCost', Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">調定年度</label>
        <select
          className="border rounded-md w-full p-2"
          value={selectedYear}
          onChange={(e) => onChange('selectedYear', e.target.value)}
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">調定番号</label>
        <input
          type="text"
          className="border rounded-md w-full p-2"
          value={adjustmentNumber}
          onChange={(e) => onChange('adjustmentNumber', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">相手先</label>
        <input
          type="text"
          className="border rounded-md w-full p-2"
          value={counterpart}
          onChange={(e) => onChange('counterpart', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">摘要</label>
        <textarea
          className="border rounded-md w-full p-2"
          value={summary}
          onChange={(e) => onChange('summary', e.target.value)}
        />
      </div>
      <div className="border p-4 mb-4">
        <h3 className="font-medium mb-2">財源別按分額保守</h3>
        {Object.entries(expenseDetails).map(([key, value]) => (
          <div key={key} className="mb-2">
            <label className="block text-sm font-medium">{key}</label>
            <input
              type="number"
              className="border rounded-md w-full p-2"
              value={value}
              onChange={(e) => onChange(`expenseDetails.${key}`, Number(e.target.value))}
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-gray-200 text-black p-2 rounded-md"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded-md"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FinancialForm;
```