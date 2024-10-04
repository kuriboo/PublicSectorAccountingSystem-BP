import React from 'react';

interface DateRangeSelectorProps {
  title: string;
  calcDate: string;
  startDate: string;
  endDate: string;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  title,
  calcDate,
  startDate,
  endDate,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4">
      {/* Title */}
      <h1 className="text-xl font-semibold text-center bg-purple-100 mb-4 p-2 rounded">
        {title}
      </h1>

      {/* Date Range Box */}
      <div className="border p-4 rounded-lg shadow">
        <div className="mb-4">
          <span className="font-bold">範囲指定</span>
        </div>

        <div className="mb-2 flex justify-between items-center">
          <span>精算日</span>
          <span>{calcDate} まで</span>
        </div>

        <div className="flex justify-between items-center">
          <span>収納日</span>
          <span>
            {startDate} 〜 {endDate}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DateRangeSelector;