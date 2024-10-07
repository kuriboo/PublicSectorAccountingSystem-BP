import React from 'react';

// Prop types for the customizable component
type AccountingSystemProps = {
  title: string;
  yearOptions: string[];
  selectedYear: string;
  description: string;
  onYearChange: (year: string) => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountingSystem: React.FC<AccountingSystemProps> = ({
  title,
  yearOptions,
  selectedYear,
  description,
  onYearChange,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="w-full max-w-lg mx-auto mt-8 border rounded-lg shadow-lg">
      <header className="bg-blue-600 text-white text-lg font-semibold p-4 rounded-t-lg">
        <span>{title}</span>
        <span className="float-right">平成30年04月06日</span>
      </header>
      <div className="p-4">
        <div className="mb-4">
          <label className="font-medium mr-2">集計年度</label>
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="border rounded px-2 py-1"
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <span className="ml-2">年度</span>
        </div>
        <div className="border-t border-l border-r border-b border-gray-300 p-4 mb-4">
          <span className="font-medium text-gray-700">処理概要</span>
          <p className="mt-2 text-blue-700">{description}</p>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onOk}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded"
          >
            OK
          </button>
          <button
            onClick={onClear}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded"
          >
            クリア
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountingSystem;
```