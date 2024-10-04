```tsx
// Import necessary modules
import React from 'react';

// Define props with TypeScript
interface SearchComponentProps {
  fiscalYear: string;
  voucherNumber?: string;
  fromDate: string;
  toDate: string;
  amountFrom?: number;
  amountTo?: number;
  remark?: string;
  onSearch: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Define the SearchComponent
const SearchComponent: React.FC<SearchComponentProps> = ({
  fiscalYear,
  voucherNumber,
  fromDate,
  toDate,
  amountFrom,
  amountTo,
  remark,
  onSearch,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
      {/* Fiscal Year and Voucher Number */}
      <div className="mb-4">
        <label className="block text-gray-700">
          年度:
          <input
            type="text"
            value={fiscalYear}
            className="ml-2 border rounded p-1"
            readOnly
          />
        </label>
        <label className="block text-gray-700 mt-2">
          振替番号:
          <input
            type="text"
            value={voucherNumber || ''}
            className="ml-2 border rounded p-1"
          />
        </label>
      </div>

      {/* Date Range */}
      <div className="mb-4">
        <label className="block text-gray-700">
          振替日:
          <input
            type="date"
            value={fromDate}
            className="ml-2 border rounded p-1"
          />
          ～
          <input
            type="date"
            value={toDate}
            className="ml-2 border rounded p-1"
          />
        </label>
      </div>

      {/* Amount Range */}
      <div className="mb-4">
        <label className="block text-gray-700">
          振替金額:
          <input
            type="number"
            value={amountFrom || 0}
            className="ml-2 border rounded p-1"
            placeholder="0"
          />
          ～
          <input
            type="number"
            value={amountTo || 999_999_999_999}
            className="ml-2 border rounded p-1"
            placeholder="999,999,999,999"
          />
        </label>
      </div>

      {/* Remark */}
      <div className="mb-4">
        <label className="block text-gray-700">
          摘要:
          <input
            type="text"
            value={remark || ''}
            className="ml-2 border rounded p-1"
          />
        </label>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={onSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          表示
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 text-black rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

// Export the component
export default SearchComponent;
```