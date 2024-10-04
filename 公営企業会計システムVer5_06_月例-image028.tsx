```tsx
// types.ts
export interface FormComponentProps {
  date: string;
  category: string;
  summary: string;
  onDateChange: (date: string) => void;
  onCategoryChange: (category: string) => void;
  onSummaryChange: (summary: string) => void;
  onCsvExport: () => void;
  onClear: () => void;
  onClose: () => void;
}

// FormComponent.tsx
import React from 'react';
import { FormComponentProps } from './types';

const FormComponent: React.FC<FormComponentProps> = ({
  date,
  category,
  summary,
  onDateChange,
  onCategoryChange,
  onSummaryChange,
  onCsvExport,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      {/* Title Section */}
      <h2 className="text-xl font-bold mb-4">作表制御集計表作成</h2>

      {/* Form Inputs */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">作表年月日</label>
          <input
            type="text"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">作表制御区分</label>
          <input
            type="text"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">処理概要</label>
          <textarea
            value={summary}
            onChange={(e) => onSummaryChange(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          />
        </div>
      </div>

      {/* Checkbox */}
      <div className="my-4">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox"/>
          <span className="ml-2 text-sm">
            「行名称の2行目が空白の場合、その行を印字しない。
          </span>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button onClick={onCsvExport} className="bg-gray-500 text-white px-4 py-2 rounded">
          CSV出力
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```