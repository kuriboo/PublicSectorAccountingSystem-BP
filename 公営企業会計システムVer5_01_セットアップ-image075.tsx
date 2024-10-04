```tsx
// Imports
import React from 'react';

// TypeScript type definitions for props
type FormProps = {
  year?: string;
  tableCode?: string;
  collectionNumber?: number;
  itemDivision?: string;
  amountDivision?: string;
  editType?: string;
  onSubmit?: () => void;
  onClear?: () => void;
};

// Functional component
const FinancialForm: React.FC<FormProps> = ({
  year = '平成29',
  tableCode = '02',
  collectionNumber = 100,
  itemDivision = '',
  amountDivision = '',
  editType = '1',
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 bg-gray-50 rounded-md shadow-lg">
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">年度</label>
        <input
          className="w-full px-3 py-2 border rounded"
          type="text"
          value={year}
          disabled
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">集計表区コード</label>
        <input
          className="w-full px-3 py-2 border rounded"
          type="text"
          value={tableCode}
          disabled
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">集計番号</label>
        <input
          className="w-full px-3 py-2 border rounded"
          type="number"
          value={collectionNumber}
          disabled
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">項目区分</label>
        <input
          className="w-full px-3 py-2 border rounded"
          type="text"
          value={itemDivision}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">金額印字区分</label>
        <input
          className="w-full px-3 py-2 border rounded"
          type="text"
          value={amountDivision}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">改行区分</label>
        <input
          className="w-full px-3 py-2 border rounded"
          type="text"
          value={editType}
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-gray-400 rounded hover:bg-gray-600"
          onClick={onClear}
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default FinancialForm;
```