```tsx
import React from 'react';

type EmployeeSearchProps = {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onDisplayClick: () => void;
  employees: Array<{ code: string; name: string }>;
  onSelect: (code: string) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const EmployeeSearch: React.FC<EmployeeSearchProps> = ({
  searchTerm,
  onSearchChange,
  onDisplayClick,
  employees,
  onSelect,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      {/* Search Box */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">氏名検索文字列</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Display Button */}
      <button
        onClick={onDisplayClick}
        className="mb-4 py-2 px-4 bg-gray-200 hover:bg-gray-300 transition rounded"
      >
        表示
      </button>

      {/* Employee Table */}
      <div className="overflow-y-auto h-48 mb-4">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">担当者コード</th>
              <th className="border px-4 py-2 text-left">担当者氏名</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.code} className="hover:bg-gray-100 cursor-pointer" onClick={() => onSelect(employee.code)}>
                <td className="border px-4 py-2">{employee.code}</td>
                <td className="border px-4 py-2">{employee.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button onClick={onOk} className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 transition rounded">
          OK
        </button>
        <button onClick={onClear} className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 transition rounded">
          クリア
        </button>
        <button onClick={onCancel} className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 transition rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default EmployeeSearch;
```