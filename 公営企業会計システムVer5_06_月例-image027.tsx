```tsx
import React from 'react';

// 型定義
interface ReportFormProps {
  startDate: string;
  endDate: string;
  reportType: string;
  reportTypeOptions: { value: string; label: string }[];
  onSubmit: () => void;
  onReset: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  startDate,
  endDate,
  reportType,
  reportTypeOptions,
  onSubmit,
  onReset,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-purple-700 mb-4">作表制御表集計</h1>
      <div className="bg-white p-4 rounded-lg border border-gray-300">
        <div className="mb-6">
          <label className="block text-blue-600 mb-2">集計年月</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={startDate}
              className="flex-grow p-2 border border-gray-300 rounded"
              readOnly
            />
            <span>~</span>
            <input
              type="text"
              value={endDate}
              className="flex-grow p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-blue-600 mb-2">作表制御区分</label>
          <select
            value={reportType}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly
          >
            {reportTypeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onReset}
          >
            クリア
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onSubmit}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
```