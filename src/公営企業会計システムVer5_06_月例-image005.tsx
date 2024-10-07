import React from 'react';
import 'tailwindcss/tailwind.css';

type VibrationNumberSearchProps = {
  year: string;
  onYearChange: (year: string) => void;
  startDate: string;
  endDate: string;
  onDateChange: (type: 'start' | 'end', date: string) => void;
  amountRange: [number, number];
  onAmountChange: (amountRange: [number, number]) => void;
  onSearch: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const VibrationNumberSearch: React.FC<VibrationNumberSearchProps> = ({
  year,
  onYearChange,
  startDate,
  endDate,
  onDateChange,
  amountRange,
  onAmountChange,
  onSearch,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="text"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4 flex space-x-4">
        <div>
          <label className="block text-gray-700">振替日 (開始)</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => onDateChange('start', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">振替日 (終了)</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => onDateChange('end', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">振替金額</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={amountRange[0]}
            onChange={(e) => onAmountChange([Number(e.target.value), amountRange[1]])}
            className="w-1/2 p-2 border rounded"
            placeholder="最小金額"
          />
          <input
            type="number"
            value={amountRange[1]}
            onChange={(e) => onAmountChange([amountRange[0], Number(e.target.value)])}
            className="w-1/2 p-2 border rounded"
            placeholder="最大金額"
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <button onClick={onSearch} className="bg-blue-500 text-white p-2 rounded">
          表示
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white p-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default VibrationNumberSearch;
