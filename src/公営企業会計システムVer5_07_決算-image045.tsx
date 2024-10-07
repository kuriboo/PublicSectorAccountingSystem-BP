// Import necessary modules
import React from 'react';

// Define Prop types for the component
interface MasterDataProps {
  title: string;
  fiscalYear: string[];
  onFiscalYearChange: (year: string) => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

// Main Component
const MasterDataComponent: React.FC<MasterDataProps> = ({
  title,
  fiscalYear,
  onFiscalYearChange,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-8">
      <h1 className="text-lg font-bold mb-4">{title}</h1>
      
      <div className="mb-6">
        <label className="block font-medium mb-1">集計年度</label>
        <select
          className="border p-2 bg-white"
          onChange={(e) => onFiscalYearChange(e.target.value)}
        >
          {fiscalYear.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      
      <div className="border p-4 mb-6">
        <h2 className="font-medium mb-2">処理概要</h2>
        <p>要素マスタデータを作成します。</p>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button onClick={onOk} className="border py-2 px-4 bg-blue-200">
          OK
        </button>
        <button onClick={onClear} className="border py-2 px-4 bg-gray-200">
          クリア
        </button>
        <button onClick={onExit} className="border py-2 px-4 bg-red-200">
          終了
        </button>
      </div>
    </div>
  );
};

export default MasterDataComponent;
```