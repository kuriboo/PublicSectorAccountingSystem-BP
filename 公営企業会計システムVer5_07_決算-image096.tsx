```tsx
// import necessary libraries
import React from 'react';

// Define the types for the props
type FiscalReportComponentProps = {
  year: string;
  description: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Create a functional component with TypeScript types
const FiscalReportComponent: React.FC<FiscalReportComponentProps> = ({
  year,
  description,
  onOk,
  onClear,
  onExit
}) => {
  return (
    <div className="flex flex-col p-4 bg-gray-100 shadow-md">
      <div className="bg-blue-300 text-white p-2 rounded">
        <h1 className="text-2xl">決算報告書集計処理</h1>
      </div>
      <div className="mt-4 p-4 border border-gray-300 bg-white rounded">
        <div className="flex items-center space-x-2">
          <span className="font-bold">集計年度:</span>
          <select value={year} className="border p-1 rounded">
            {/* Options can be dynamically generated */}
            <option value={year}>{year}</option>
          </select>
        </div>
        <div className="mt-4">
          <h2 className="font-bold text-purple-800">処理概要</h2>
          <div className="border border-gray-300 p-4 mt-2">
            <p>{description}</p>
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button onClick={onOk} className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            OK
          </button>
          <button onClick={onClear} className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            クリア
          </button>
          <button onClick={onExit} className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiscalReportComponent;
```