// imports
import React from 'react';

// TypeScript props interface
interface FormComponentProps {
  year?: string; // Optional year prop
  onSearch?: () => void; // Optional search button handler
  onOk?: () => void; // Optional OK button handler
  onClear?: () => void; // Optional clear button handler
  onCancel?: () => void; // Optional cancel button handler
}

// Component definition
const FormComponent: React.FC<FormComponentProps> = ({
  year = '平成29', // Default year
  onSearch,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
          年度
        </label>
        <select
          id="year"
          defaultValue={year}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option>平成29</option>
          {/* Other options can be added here */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">貸方</label>
        <input
          type="text"
          defaultValue="001 020619 外・その他雑収益"
          className="mt-1 block w-full py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">細節</label>
        <input
          type="text"
          defaultValue="0083 その他雑収益・外・不"
          className="mt-1 block w-full py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">明細</label>
        <input
          type="text"
          defaultValue="0007 その他雑収益 (不"
          className="mt-1 block w-full py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>

      <button
        onClick={onSearch}
        className="w-full py-2 mb-4 bg-indigo-600 text-white rounded hover:bg-indigo-500 focus:outline-none"
      >
        科目検索
      </button>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onOk}
          className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-500 focus:outline-none"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="py-2 px-4 bg-yellow-600 text-white rounded hover:bg-yellow-500 focus:outline-none"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-500 focus:outline-none"
        >
          キャンセル
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-500">税区分: 不課税</p>
    </div>
  );
};

export default FormComponent;
