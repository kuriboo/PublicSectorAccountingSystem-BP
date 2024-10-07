import React from 'react';

// TypeScriptの型定義
type InputFormProps = {
  fiscalYearOptions: string[];
  selectedFiscalYear: string;
  onFiscalYearChange: (fiscalYear: string) => void;
  depositDate: string;
  onDepositDateChange: (date: string) => void;
  summary: string;
  onSummaryChange: (summary: string) => void;
  deadline: string;
  onDeadlineChange: (deadline: string) => void;
};

// Tailwind CSSを使用したスタイリング
const InputForm: React.FC<InputFormProps> = ({
  fiscalYearOptions,
  selectedFiscalYear,
  onFiscalYearChange,
  depositDate,
  onDepositDateChange,
  summary,
  onSummaryChange,
  deadline,
  onDeadlineChange,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <select
          value={selectedFiscalYear}
          onChange={(e) => onFiscalYearChange(e.target.value)}
          className="mt-1 block w-full p-2 border-gray-300 rounded-md"
        >
          {fiscalYearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">収納日</label>
        <input
          type="text"
          value={depositDate}
          onChange={(e) => onDepositDateChange(e.target.value)}
          className="mt-1 block w-full p-2 border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">摘要</label>
        <input
          type="text"
          value={summary}
          onChange={(e) => onSummaryChange(e.target.value)}
          className="mt-1 block w-full p-2 border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">納入期限</label>
        <input
          type="text"
          value={deadline}
          onChange={(e) => onDeadlineChange(e.target.value)}
          className="mt-1 block w-full p-2 border-gray-300 rounded-md"
        />
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
        登録
      </button>
    </div>
  );
};

export default InputForm;
```