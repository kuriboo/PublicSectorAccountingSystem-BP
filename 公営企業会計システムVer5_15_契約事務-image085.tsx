```tsx
import React from 'react';

// TypeScriptの型定義
interface UpdateFormProps {
  years: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
  onDateChange: (date: string) => void;
  useCSV: boolean;
  onUseCSVChange: (useCSV: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const UpdateForm: React.FC<UpdateFormProps> = ({
  years,
  selectedYear,
  onYearChange,
  onDateChange,
  useCSV,
  onUseCSVChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label className="block text-blue-900 mb-2">取込み年度</label>
        <select
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="border p-2 rounded"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <span className="ml-2 text-blue-900">年度</span>
      </div>
      <div className="mb-4">
        <label className="block text-blue-900 mb-2">更新年月日</label>
        <div>
          <input
            type="radio"
            checked={useCSV}
            onChange={() => onUseCSVChange(true)}
            className="mr-2"
          />
          CSVデータを使用する
        </div>
        <div>
          <input
            type="radio"
            checked={!useCSV}
            onChange={() => onUseCSVChange(false)}
            className="mr-2"
          />
          <input
            type="text"
            disabled={useCSV}
            onChange={(e) => onDateChange(e.target.value)}
            placeholder="年 / 月 / 日"
            className="border p-2 rounded"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="bg-gray-200 hover:bg-gray-300 rounded py-2 px-4"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 hover:bg-gray-300 rounded py-2 px-4"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-gray-200 hover:bg-gray-300 rounded py-2 px-4"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
```