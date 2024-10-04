```tsx
// Import necessary modules and components
import React from 'react';

// Define the types for component props
type AccountingFormProps = {
  fiscalYear: string;
  setFiscalYear: (year: string) => void;
  startDate: string;
  endDate: string;
  segment: string;
  setSegment: (segment: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

// Define the functional component
const AccountingForm: React.FC<AccountingFormProps> = ({
  fiscalYear,
  setFiscalYear,
  startDate,
  endDate,
  segment,
  setSegment,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-blue-600">
        範囲指定
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700">会計年度</label>
        <input
          type="text"
          value={fiscalYear}
          onChange={(e) => setFiscalYear(e.target.value)}
          className="border rounded w-full py-1 px-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">課税期間</label>
        <div className="flex items-center">
          <span className="mr-2">{startDate}</span>
          <span className="mx-2">～</span>
          <span>{endDate}</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">セグメント</label>
        <input
          type="text"
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
          className="border rounded w-full py-1 px-2"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button 
          onClick={onSubmit} 
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-300 text-gray-800 px-4 py-1 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button 
          onClick={onClose} 
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;
```