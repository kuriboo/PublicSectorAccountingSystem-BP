// Import necessary modules and components
import React from 'react';

// Define Props for the component
interface StatementSearchProps {
  fiscalYear: string;
  processingDate: string;
  accountNumberRange: [string, string];
  liabilityAmountRange: [number, number];
  detailAmountRange: [number, number];
  onSearch: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Define the main component
const StatementSearch: React.FC<StatementSearchProps> = ({
  fiscalYear,
  processingDate,
  accountNumberRange,
  liabilityAmountRange,
  detailAmountRange,
  onSearch,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* Header Section */}
      <div className="flex items-center justify-between bg-blue-900 p-2 text-white">
        <span>負担番号検索</span>
        <button className="px-4 py-2 bg-blue-600 rounded">表示</button>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block mb-1">年度</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" value={fiscalYear} readOnly />
        </div>
        <div>
          <label className="block mb-1">処理日</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" value={processingDate} readOnly />
        </div>
        <div>
          <label className="block mb-1">起案所属</label>
          <div className="flex space-x-2">
            <input className="flex-1 p-2 border border-gray-300 rounded" type="text" value={accountNumberRange[0]} readOnly />
            <input className="flex-1 p-2 border border-gray-300 rounded" type="text" value={accountNumberRange[1]} readOnly />
          </div>
        </div>
        <div>
          <label className="block mb-1">負担額</label>
          <div className="flex space-x-2">
            <input className="flex-1 p-2 border border-gray-300 rounded" type="number" value={liabilityAmountRange[0]} readOnly />
            <input className="flex-1 p-2 border border-gray-300 rounded" type="number" value={liabilityAmountRange[1]} readOnly />
          </div>
        </div>
        <div>
          <label className="block mb-1">明細金額</label>
          <div className="flex space-x-2">
            <input className="flex-1 p-2 border border-gray-300 rounded" type="number" value={detailAmountRange[0]} readOnly />
            <input className="flex-1 p-2 border border-gray-300 rounded" type="number" value={detailAmountRange[1]} readOnly />
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onSearch} className="px-4 py-2 bg-blue-600 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-600 text-white rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default StatementSearch;
