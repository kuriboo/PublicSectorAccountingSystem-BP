// Import necessary libraries
import React, { FC } from 'react';

// Define types for props
interface DateRangeSelectorProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

// Reusable component with Tailwind CSS for styling
const DateRangeSelector: FC<DateRangeSelectorProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onOk,
  onClear,
  onExit,
}) => (
  <div className="p-6 bg-gray-100 rounded-md">
    <h2 className="text-xl font-bold mb-4">前受金振替一覧表</h2>
    <div className="mb-6">
      <h3 className="font-semibold mb-2">範囲指定</h3>
      <div className="flex items-center bg-white p-4 rounded-md border">
        <label className="mr-2">精算日:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          className="border px-2 py-1 mr-2"
        />
        〜
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          className="border px-2 py-1 ml-2"
        />
      </div>
    </div>
    <div className="flex space-x-4">
      <button
        className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        onClick={onOk}
      >
        OK
      </button>
      <button
        className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        onClick={onClear}
      >
        クリア
      </button>
      <button
        className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        onClick={onExit}
      >
        終了
      </button>
    </div>
  </div>
);

export default DateRangeSelector;
