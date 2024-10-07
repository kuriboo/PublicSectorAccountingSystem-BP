// components/FileCopyForm.tsx
import React from 'react';

type FileCopyFormProps = {
  fiscalYear: string;
  sourceCodeOptions: { value: string; label: string }[];
  destinationCodeOptions: { value: string; label: string }[];
  onFiscalYearChange: (year: string) => void;
  onSourceCodeChange: (code: string) => void;
  onDestinationCodeChange: (code: string) => void;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
};

const FileCopyForm: React.FC<FileCopyFormProps> = ({
  fiscalYear,
  sourceCodeOptions,
  destinationCodeOptions,
  onFiscalYearChange,
  onSourceCodeChange,
  onDestinationCodeChange,
  onConfirm,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">損益計算書貸借対照表ファイルコピー</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">会計年度</label>
        <select
          value={fiscalYear}
          onChange={(e) => onFiscalYearChange(e.target.value)}
          className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="令和02">令和02</option>
          {/* Add other options as needed */}
        </select>
      </div>
      
      <div className="flex items-center mb-4">
        <label className="text-sm font-medium text-gray-700">集計表区分コード（コピー元）</label>
        <select
          onChange={(e) => onSourceCodeChange(e.target.value)}
          className="ml-2 block w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {sourceCodeOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">集計表区分コード（コピー先）</label>
        <select
          onChange={(e) => onDestinationCodeChange(e.target.value)}
          className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {destinationCodeOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      
      <div className="flex space-x-4">
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FileCopyForm;
```