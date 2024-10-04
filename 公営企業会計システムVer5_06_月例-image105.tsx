```tsx
import React from 'react';

type ReportFormProps = {
  reportDate: string;
  minDepartment: string;
  maxDepartment: string;
  minSubject: string;
  maxSubject: string;
  division: '目' | '節' | '細節' | '明細';
  onCsvExport: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({
  reportDate,
  minDepartment,
  maxDepartment,
  minSubject,
  maxSubject,
  division,
  onCsvExport,
  onClear,
  onClose,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h1 className="text-lg font-bold mb-4">範囲指定</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">作表日</label>
        <input
          type="text"
          value={reportDate}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          readOnly
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">所属</label>
          <div className="flex items-center">
            <input
              type="text"
              value={minDepartment}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              value={maxDepartment}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">予算科目</label>
          <div className="flex items-center">
            <input
              type="text"
              value={minSubject}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              value={maxSubject}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">作表区分</label>
        <div className="flex items-center space-x-4">
          {['目', '節', '細節', '明細'].map((item) => (
            <label key={item} className="flex items-center">
              <input
                type="radio"
                name="division"
                value={item}
                checked={division === item}
                readOnly
                className="form-radio"
              />
              <span className="ml-2">{item}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onCsvExport}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
```