```tsx
// BudgetForm.tsx
import React from 'react';

type BudgetFormProps = {
  year: string;
  period: number;
  amendNumber: string;
  onYearChange: (year: string) => void;
  onPeriodChange: (period: number) => void;
  onAmendNumberChange: (amendNumber: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExportExcel: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  period,
  amendNumber,
  onYearChange,
  onPeriodChange,
  onAmendNumberChange,
  onSubmit,
  onClear,
  onExportExcel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">補正予算事項別明細書作成</h2>
      <div className="mb-4">
        <label className="block mb-1">年度</label>
        <input
          type="text"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">期</label>
        <input
          type="number"
          value={period}
          onChange={(e) => onPeriodChange(Number(e.target.value))}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">補正番号</label>
        <input
          type="text"
          value={amendNumber}
          onChange={(e) => onAmendNumberChange(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="flex space-x-2">
        <button onClick={onExportExcel} className="bg-green-500 text-white px-4 py-2 rounded">
          Excel出力
        </button>
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;
```