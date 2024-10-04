```tsx
import React from 'react';

type ReportFormProps = {
  date: string;
  year: number;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onYearChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({
  date,
  year,
  onDateChange,
  onYearChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-8 bg-white shadow-md rounded-md">
      <h1 className="text-lg font-bold mb-4">部門・施設・地区別予測固定資産明細表作成</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">作表年月日</label>
        <input
          type="date"
          value={date}
          onChange={onDateChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-8">
        <label className="block text-sm font-medium mb-1">作表年数</label>
        <input
          type="number"
          value={year}
          onChange={onYearChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
```