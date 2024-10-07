import React from 'react';

// Interface for component props
interface ReportPeriodProps {
  startDate: string;
  endDate: string;
  onExport: () => void;
  onClear: () => void;
  onExit: () => void;
}

// Component
const ReportPeriod: React.FC<ReportPeriodProps> = ({ startDate, endDate, onExport, onClear, onExit }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      {/* Header */}
      <div className="bg-blue-300 py-2 px-4 rounded-t-lg text-white font-bold">
        月次損益計算書
      </div>

      {/* Content */}
      <div className="mt-4 p-4 border rounded-lg">
        <div className="font-bold text-blue-700">
          範囲指定
        </div>
        <div className="flex mt-2 items-center">
          <span className="font-semibold">作表日</span>
          <input
            type="text"
            value={startDate}
            readOnly
            className="ml-2 p-1 border rounded text-center bg-blue-100"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={endDate}
            readOnly
            className="p-1 border rounded text-center bg-blue-100"
          />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={onExport}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportPeriod;
```