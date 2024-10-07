import React from 'react';

type Props = {
  title: string;
  headerInfo: string;
  outputYearOptions: string[];
  onCsvExport: () => void;
  onExit: () => void;
};

const DataOutputComponent: React.FC<Props> = ({
  title,
  headerInfo,
  outputYearOptions,
  onCsvExport,
  onExit
}) => {
  return (
    <div className="max-w-lg mx-auto border-2 p-4 bg-white shadow-lg">
      {/* Header */}
      <div className="bg-blue-900 text-white p-2 rounded-t">
        <h1>{title}</h1>
      </div>
      <div className="text-right text-xs text-gray-700 mt-1">
        {headerInfo}
      </div>
      
      {/* Output Type */}
      <div className="mt-8">
        <div className="font-bold text-blue-900">出力種別</div>
        <div className="mt-2">
          <label className="mr-4">
            <input type="radio" name="outputType" className="mr-1" defaultChecked />予算科目
          </label>
          <label>
            <input type="radio" name="outputType" className="mr-1" />仕訳科目
          </label>
        </div>
      </div>

      {/* Output Year */}
      <div className="mt-8">
        <div className="font-bold text-blue-900">出力年度</div>
        <div className="mt-2">
          <select className="border px-2 py-1">
            {outputYearOptions.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-end space-x-2">
        <button 
          onClick={onCsvExport} 
          className="bg-gray-200 px-4 py-2 rounded shadow"
        >
          CSV出力
        </button>
        <button 
          onClick={onExit} 
          className="bg-gray-200 px-4 py-2 rounded shadow"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DataOutputComponent;
