```tsx
// AccountingForm.tsx
import React from 'react';

type Props = {
  fiscalYear: string;
  startDate: string;
  endDate: string;
  onFiscalYearChange: (year: string) => void;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
};

const AccountingForm: React.FC<Props> = ({
  fiscalYear,
  startDate,
  endDate,
  onFiscalYearChange,
  onStartDateChange,
  onEndDateChange,
  onOkClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="p-4">
      <div className="bg-blue-200 rounded p-2 mb-4">
        <h1 className="text-xl">資産譲渡等対価額計算表(計算表1)</h1>
      </div>
      <div className="bg-gray-100 border rounded p-4">
        <h2 className="font-bold mb-2">範囲指定</h2>
        <div className="mb-4">
          <label className="mr-2">会計年度</label>
          <input
            type="text"
            value={fiscalYear}
            onChange={(e) => onFiscalYearChange(e.target.value)}
            className="border px-2 py-1"
          />
          <span> 年度</span>
        </div>
        <div className="mb-4">
          <label className="mr-2">課税期間</label>
          <input
            type="text"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="border px-2 py-1 mr-2"
          />
          <span> ～ </span>
          <input
            type="text"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="border px-2 py-1 ml-2"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={onOkClick}
          className="bg-gray-300 px-4 py-2 mr-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClearClick}
          className="bg-gray-300 px-4 py-2 mr-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onExitClick}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;
```