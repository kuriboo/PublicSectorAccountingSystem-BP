import React from 'react';

// 型定義
interface AccountingSystemProps {
  yearOptions: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
  onOk: () => void;
  onCancel: () => void;
}

const AccountingSystem: React.FC<AccountingSystemProps> = ({
  yearOptions,
  selectedYear,
  onYearChange,
  onOk,
  onCancel,
}) => {
  return (
    <div className="max-w-lg mx-auto mt-12 p-6 shadow-lg rounded-lg border border-gray-300">
      <div className="bg-gradient-to-r from-purple-200 to-blue-500 text-white text-lg font-medium py-2 px-4 rounded-t-lg">
        繰越集計処理
      </div>
      <div className="mt-8 flex justify-center">
        <select
          className="border rounded px-4 py-2 text-gray-700"
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <span className="ml-2 text-gray-600">年度</span>
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
          onClick={onCancel}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingSystem;