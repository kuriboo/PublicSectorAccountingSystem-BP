import React from 'react';

// Props type definition for the component
type CsvImportProps = {
  headerTitle: string;
  fiscalYear: string;
  description: string;
  checkboxLabel: string;
  onImport: () => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

// CSV Import Component
const CsvImport: React.FC<CsvImportProps> = ({
  headerTitle,
  fiscalYear,
  description,
  checkboxLabel,
  onImport,
  onOk,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg max-w-lg mx-auto">
      {/* Header */}
      <h1 className="text-xl bg-purple-100 text-purple-600 p-2 rounded-t">{headerTitle}</h1>
      
      {/* Fiscal Year Display */}
      <div className="mt-4">
        <span className="font-bold">新年度: </span>
        <span>{fiscalYear}</span>
      </div>

      {/* Import Button */}
      <div className="mt-4">
        <button 
          onClick={onImport} 
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
        >
          取込
        </button>
      </div>

      {/* Description Box */}
      <div className="mt-4 p-4 bg-white border rounded">
        <h2 className="font-bold">処理概要</h2>
        <p>{description}</p>
      </div>

      {/* Checkbox */}
      <div className="mt-4">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">{checkboxLabel}</span>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-6 space-x-2">
        <button 
          onClick={onOk} 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
        >
          クリア
        </button>
        <button 
          onClick={onExit} 
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CsvImport;
```