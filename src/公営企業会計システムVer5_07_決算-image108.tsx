import React from 'react';

// TypeScriptの型定義
interface TaxPeriodProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

// コンポーネント実装
const TaxPeriod: React.FC<TaxPeriodProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-6">調整後控除対象仕入税額算出</h1>
      <div className="border rounded-lg p-4 shadow-lg">
        <h2 className="text-lg font-semibold mb-2">範囲指定</h2>
        <div className="flex justify-center items-center space-x-4">
          <span>課税期間</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="border p-2 rounded"
          />
          <span>～</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="border p-2 rounded"
          />
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            onClick={onCancel}
          >
            終了
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onSubmit}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxPeriod;
