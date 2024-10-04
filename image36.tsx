```tsx
// components/SearchForm.tsx

import React from 'react';

type SearchFormProps = {
  year: number;
  startDate: string;
  endDate: string;
  accountNumber?: string;
  amountRange?: [number, number];
  onSearch: () => void;
};

const SearchForm: React.FC<SearchFormProps> = ({
  year,
  startDate,
  endDate,
  accountNumber = '',
  amountRange = [0, 999999999],
  onSearch,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Year Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <input
          type="text"
          value={year}
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Date Range Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">振替日</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={startDate}
            readOnly
            className="flex-1 mt-1 p-2 border border-gray-300 rounded-md"
          />
          <span>~</span>
          <input
            type="text"
            value={endDate}
            readOnly
            className="flex-1 mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Account Number Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">振替番号</label>
        <input
          type="text"
          value={accountNumber}
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Amount Range Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">振替金額</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={amountRange[0]}
            readOnly
            className="flex-1 mt-1 p-2 border border-gray-300 rounded-md"
          />
          <span>~</span>
          <input
            type="text"
            value={amountRange[1]}
            readOnly
            className="flex-1 mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="mb-4">
        <button
          onClick={onSearch}
          className="w-full p-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
        >
          表示
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
```