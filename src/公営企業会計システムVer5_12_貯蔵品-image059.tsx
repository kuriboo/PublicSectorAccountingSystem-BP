import React from 'react';
import 'tailwindcss/tailwind.css';

// TypeScriptの型定義
interface StatementCreationProps {
  startDate: string;
  endDate: string;
  managementUnit: string;
  property: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onManagementUnitChange: (value: string) => void;
  onPropertyChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

// コンポーネント定義
const StatementCreation: React.FC<StatementCreationProps> = ({
  startDate,
  endDate,
  managementUnit,
  property,
  onStartDateChange,
  onEndDateChange,
  onManagementUnitChange,
  onPropertyChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="max-w-xl mx-auto my-8 p-4 border rounded shadow-sm">
      <h1 className="text-xl font-bold text-center mb-4">入出庫明細表作成</h1>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">範囲入力</h2>
        <div className="flex mb-2">
          <label className="mr-2">管理者</label>
          <input
            type="text"
            value={managementUnit}
            onChange={(e) => onManagementUnitChange(e.target.value)}
            className="border p-1 flex-1"
          />
          <label className="mx-2">予物</label>
          <input
            type="text"
            value={property}
            onChange={(e) => onPropertyChange(e.target.value)}
            className="border p-1 flex-1"
          />
        </div>
        <div className="flex space-x-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="border p-1 flex-1"
          />
          <span className="self-center">〜</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="border p-1 flex-1"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">
          クリア
        </button>
      </div>
    </div>
  );
};

export default StatementCreation;
```