// Import necessary modules
import React from 'react';

// Define prop types for the component
interface DataImportProps {
  year: number;
  onFileSelect: (step: number, file: File) => void;
  onExecute: (step: number) => void;
}

// DataImport component
const DataImport: React.FC<DataImportProps> = ({ year, onFileSelect, onExecute }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">決算統計 ①データ取込み {year} 年度</h1>
        
      {/* Step 1 */}
      <div className="bg-blue-100 p-4 mb-4 rounded">
        <h2 className="font-semibold">Step1. 振替・性質分類情報を取込みます。</h2>
        <p>取込みファイル：</p>
        <input
          type="file"
          className="my-2"
          onChange={(e) => e.target.files && onFileSelect(1, e.target.files[0])}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onExecute(1)}
        >
          取込実行
        </button>
      </div>

      {/* Step 2 */}
      <div className="bg-blue-100 p-4 rounded">
        <h2 className="font-semibold">Step2. 科目情報を取込みます。</h2>
        <p>取込みファイル：</p>
        <input
          type="file"
          className="my-2"
          onChange={(e) => e.target.files && onFileSelect(2, e.target.files[0])}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onExecute(2)}
        >
          取込実行
        </button>
      </div>
    </div>
  );
};

export default DataImport;
