// components/FilterForm.tsx
import React from 'react';

interface FilterFormProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onSubmit: () => void;
}

const FilterForm: React.FC<FilterFormProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onSubmit
}) => {
  return (
    <div className="p-4 border rounded-md shadow-md max-w-md mx-auto my-8">
      <h2 className="text-lg font-bold mb-4">範囲指定</h2>
      <div className="flex items-center mb-4">
        <label className="w-24 font-medium">伝票種別</label>
        <label className="inline-flex items-center mr-4">
          <input type="checkbox" className="form-checkbox" checked />
          <span className="ml-2">振替分</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input type="checkbox" className="form-checkbox" checked />
          <span className="ml-2">調定分</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" checked />
          <span className="ml-2">支払分</span>
        </label>
      </div>
      <div className="flex items-center mb-4">
        <label className="w-24 font-medium">日付</label>
        <input
          type="text"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          className="border rounded px-2 py-1 mr-2"
        />
        <span className="mx-2">〜</span>
        <input
          type="text"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          CSV出力
        </button>
        <button
          className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FilterForm;
```