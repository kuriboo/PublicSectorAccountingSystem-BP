import React from 'react';

// Prop types definition
type FormProps = {
  year: string;
  minBudget: string;
  maxBudget: string;
  minDepartment: string;
  maxDepartment: string;
  handleSubmit: (e: React.FormEvent) => void;
  handleClear: () => void;
};

// Reusable form component
const DataForm: React.FC<FormProps> = ({
  year,
  minBudget,
  maxBudget,
  minDepartment,
  maxDepartment,
  handleSubmit,
  handleClear,
}) => {
  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      {/* Year Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          年度
        </label>
        <input
          type="text"
          value={year}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          readOnly
        />
      </div>

      {/* Budget Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          予算科目
        </label>
        <div className="flex space-x-4">
          <input
            type="text"
            value={minBudget}
            className="mt-1 flex-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            readOnly
          />
          <input
            type="text"
            value={maxBudget}
            className="mt-1 flex-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            readOnly
          />
        </div>
      </div>

      {/* Department Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          所属
        </label>
        <div className="flex space-x-4">
          <input
            type="text"
            value={minDepartment}
            className="mt-1 flex-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            readOnly
          />
          <input
            type="text"
            value={maxDepartment}
            className="mt-1 flex-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            readOnly
          />
        </div>
      </div>

      {/* Radio Buttons */}
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-700">
          予定済負担末処理
        </span>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input type="radio" name="processing" className="form-radio" />
            <span className="ml-2">予定済負担末処理</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="processing" className="form-radio" />
            <span className="ml-2">負担済決定未処理</span>
          </label>
        </div>
      </div>

      {/* Collection Target */}
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-700">
          集計対象
        </span>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input type="radio" name="target" className="form-radio" />
            <span className="ml-2">全体</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="target" className="form-radio" />
            <span className="ml-2">ブロック</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="target" className="form-radio" />
            <span className="ml-2">セグメント</span>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-gray-300 text-white rounded shadow"
        >
          クリア
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded shadow"
        >
          OK
        </button>
      </div>
    </form>
  );
};

export default DataForm;
```