// Import necessary modules from React and Next.js
import React from 'react';

// Define the types for the component props
type SelectionFormProps = {
  year: string[];
  division: string[];
  items: string[];
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

// Define the functional component
const SelectionForm: React.FC<SelectionFormProps> = ({
  year,
  division,
  items,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-50 max-w-md mx-auto border rounded shadow-lg">
      <h1 className="text-lg font-bold mb-4">指名業者選定調書</h1>

      <div className="mb-4">
        <label htmlFor="yearSelect" className="block text-sm font-medium text-gray-700">
          年度
        </label>
        <select id="yearSelect" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
          {year.map((y, index) => (
            <option key={index} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="divisionSelect" className="block text-sm font-medium text-gray-700">
          受付区分
        </label>
        <select id="divisionSelect" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
          {division.map((d, index) => (
            <option key={index} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">物件</label>
        <textarea
          className="form-textarea mt-1 block w-full border rounded-md shadow-sm h-24"
          readOnly
          value={items.join('\n')}
        />
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">全選択</span>
        </label>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={onOk}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default SelectionForm;
```