```tsx
import React from 'react';

// TypeScript Props interface
interface FormProps {
  yearOptions: string[];
  receptionOptions: string[];
  minIndustryCode: string;
  maxIndustryCode: string;
  onFormSubmit: () => void;
  onFormClear: () => void;
  onFormExit: () => void;
}

const IndustryReportForm: React.FC<FormProps> = ({
  yearOptions,
  receptionOptions,
  minIndustryCode,
  maxIndustryCode,
  onFormSubmit,
  onFormClear,
  onFormExit,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <select className="mt-1 block w-full bg-white border border-gray-300 text-sm rounded-md">
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">受付区分</label>
        <select className="mt-1 block w-full bg-white border border-gray-300 text-sm rounded-md">
          {receptionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">集計区分</label>
        <div className="flex items-center mt-1">
          <input type="radio" id="byDate" name="aggregate" checked />
          <label htmlFor="byDate" className="ml-2 text-sm text-gray-700">格付</label>
          <input type="radio" id="byCategory" name="aggregate" className="ml-4" />
          <label htmlFor="byCategory" className="ml-2 text-sm text-gray-700">分類</label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">出力区分</label>
        <div className="flex items-center mt-1">
          <input type="radio" id="bidAmount" name="output" checked />
          <label htmlFor="bidAmount" className="ml-2 text-sm text-gray-700">落札金額</label>
          <input type="radio" id="latestAmount" name="output" className="ml-4" />
          <label htmlFor="latestAmount" className="ml-2 text-sm text-gray-700">最新契約金額</label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">業種コード</label>
        <div className="flex items-center mt-1">
          <input
            type="text"
            value={minIndustryCode}
            className="w-16 p-1 border border-gray-300 rounded text-sm"
            readOnly
          />
          <span className="mx-2">〜</span>
          <input
            type="text"
            value={maxIndustryCode}
            className="w-16 p-1 border border-gray-300 rounded text-sm"
            readOnly
          />
        </div>
      </div>

      <div className="flex space-x-2">
        <button onClick={onFormSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onFormClear} className="px-4 py-2 bg-gray-500 text-white rounded">
          クリア
        </button>
        <button onClick={onFormExit} className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default IndustryReportForm;
```