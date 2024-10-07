import React from 'react';

interface SearchFormProps {
  year: string;
  businessCode: string;
  businessName: string;
  largeCategory: string;
  mediumCategory: string;
  smallCategory: string;
  searchKeyword: string;
  onSearch: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  year,
  businessCode,
  businessName,
  largeCategory,
  mediumCategory,
  smallCategory,
  searchKeyword,
  onSearch,
  onClear,
  onCancel,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <label className="col-span-1">年度</label>
        <input
          type="text"
          value={year}
          className="col-span-1 p-2 border border-gray-300 rounded"
          readOnly
        />

        <label className="col-span-1">事業</label>
        <div className="col-span-1 flex">
          <input
            type="text"
            value={businessCode}
            className="w-1/4 p-2 border border-gray-300 rounded"
            readOnly
          />
          <input
            type="text"
            value={businessName}
            className="flex-grow p-2 border border-gray-300 rounded"
            readOnly
          />
        </div>

        <label className="col-span-1">大分類</label>
        <input
          type="text"
          value={largeCategory}
          className="col-span-1 p-2 border border-gray-300 rounded"
          readOnly
        />

        <label className="col-span-1">中分類</label>
        <input
          type="text"
          value={mediumCategory}
          className="col-span-1 p-2 border border-gray-300 rounded"
          readOnly
        />

        <label className="col-span-1">小分類</label>
        <input
          type="text"
          value={smallCategory}
          className="col-span-1 p-2 border border-gray-300 rounded"
          readOnly
        />

        <label className="col-span-1">検索文字列</label>
        <input
          type="text"
          value={searchKeyword}
          className="col-span-1 p-2 border border-gray-300 rounded"
          readOnly
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          検索
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
```