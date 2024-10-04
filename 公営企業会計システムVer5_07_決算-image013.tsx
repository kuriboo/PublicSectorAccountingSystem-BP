```tsx
// components/FormComponent.tsx

import React from 'react';

// Props type definition
interface FormComponentProps {
  startYear: number;
  endYear: number;
  tableNumber: number;
  onStartYearChange: (year: number) => void;
  onEndYearChange: (year: number) => void;
  onTableNumberChange: (tableNumber: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  startYear,
  endYear,
  tableNumber,
  onStartYearChange,
  onEndYearChange,
  onTableNumberChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="bg-blue-200 p-2 mb-4 rounded-md">
        <h1 className="text-lg font-bold">補てん財源経過表作成</h1>
      </div>

      {/* Form Section */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">作表範囲</label>
        
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="number"
            value={startYear}
            onChange={(e) => onStartYearChange(Number(e.target.value))}
            className="border rounded px-2 py-1"
          />
          <span className="mx-2">年度 ~</span>
          <input
            type="number"
            value={endYear}
            onChange={(e) => onEndYearChange(Number(e.target.value))}
            className="border rounded px-2 py-1"
          />
          <span className="ml-2">年度</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <label className="block text-sm font-medium">表 No.</label>
          <input
            type="number"
            value={tableNumber}
            onChange={(e) => onTableNumberChange(Number(e.target.value))}
            className="border rounded px-2 py-1"
          />
        </div>
      </div>

      {/* Button Section */}
      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```