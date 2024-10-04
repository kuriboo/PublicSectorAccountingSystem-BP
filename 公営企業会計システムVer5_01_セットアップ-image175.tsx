```tsx
import React from 'react';

// 型定義
interface FormProps {
  year: number;
  departmentStart: string;
  departmentEnd: string;
  personCode: string;
  groupCode: string;
  onYearChange: (year: number) => void;
  onDepartmentStartChange: (value: string) => void;
  onDepartmentEndChange: (value: string) => void;
  onPersonCodeChange: (value: string) => void;
  onGroupCodeChange: (value: string) => void;
  onOk: () => void;
  onClear: () => void;
  onEnd: () => void;
}

const FormComponent: React.FC<FormProps> = ({
  year,
  departmentStart,
  departmentEnd,
  personCode,
  groupCode,
  onYearChange,
  onDepartmentStartChange,
  onDepartmentEndChange,
  onPersonCodeChange,
  onGroupCodeChange,
  onOk,
  onClear,
  onEnd,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="number"
          value={year}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <fieldset className="border p-4 mb-4">
        <legend className="text-blue-600">範囲指定</legend>

        {/* 所属範囲 */}
        <div className="flex items-center mb-2">
          <label className="text-gray-700 mr-2">所属</label>
          <input
            type="text"
            value={departmentStart}
            onChange={(e) => onDepartmentStartChange(e.target.value)}
            className="mr-2 p-2 border rounded"
          />
          <label className="text-gray-700 mr-2">〜</label>
          <input
            type="text"
            value={departmentEnd}
            onChange={(e) => onDepartmentEndChange(e.target.value)}
            className="p-2 border rounded"
          />
        </div>

        {/* 担当コード */}
        <div className="flex items-center mb-2">
          <label className="text-gray-700 mr-2">担当コード</label>
          <input
            type="text"
            value={personCode}
            onChange={(e) => onPersonCodeChange(e.target.value)}
            className="p-2 border rounded"
          />
        </div>

        {/* APグループコード */}
        <div className="flex items-center">
          <label className="text-gray-700 mr-2">APグループコード</label>
          <input
            type="text"
            value={groupCode}
            onChange={(e) => onGroupCodeChange(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
      </fieldset>

      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="px-4 py-2 bg-blue-600 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-400 text-white rounded">
          クリア
        </button>
        <button onClick={onEnd} className="px-4 py-2 bg-red-600 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```