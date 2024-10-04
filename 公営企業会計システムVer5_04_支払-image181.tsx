```tsx
// types.ts
export interface ReportFilterProps {
  target: string;
  targetOptions: string[];
  dateFrom: string;
  dateTo: string;
  onTargetChange: (value: string) => void;
  onDateFromChange: (value: string) => void;
  onDateToChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

// ReportFilter.tsx
import React from 'react';
import { ReportFilterProps } from './types';

const ReportFilter: React.FC<ReportFilterProps> = ({
  target,
  targetOptions,
  dateFrom,
  dateTo,
  onTargetChange,
  onDateFromChange,
  onDateToChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          作表対象
        </label>
        <select
          value={target}
          onChange={(e) => onTargetChange(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          {targetOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          伝票日付
        </label>
        <div className="flex space-x-2">
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => onDateFromChange(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <span>〜</span>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => onDateToChange(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
        >
          クリア
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          CSV出力
        </button>
      </div>
    </div>
  );
};

export default ReportFilter;
```