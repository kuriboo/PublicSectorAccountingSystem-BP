// components/InvoiceSearch.tsx
import React from 'react';

type InvoiceSearchProps = {
  onSearch: () => void;
  onClear: () => void;
  onShowDetails: () => void;
  onShowHistory: () => void;
};

const InvoiceSearch: React.FC<InvoiceSearchProps> = ({ onSearch, onClear, onShowDetails, onShowHistory }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-blue-900">伝票照会</h1>
        <div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700" onClick={onClear}>
            クリア
          </button>
          <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">
            終了
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <label className="w-24 text-sm">伝票区分:</label>
            <input type="text" className="flex-1 p-2 border rounded-md" />
          </div>
          <div className="flex items-center">
            <label className="w-24 text-sm">伝票番号:</label>
            <input type="text" className="flex-1 p-2 border rounded-md" />
            <span className="mx-2">~</span>
            <input type="text" className="flex-1 p-2 border rounded-md" />
          </div>
          <button className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400" onClick={onShowDetails}>
            詳細
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <label className="w-24 text-sm">起案日:</label>
            <input type="text" className="flex-1 p-2 border rounded-md" />
            <span className="mx-2">~</span>
            <input type="text" className="flex-1 p-2 border rounded-md" />
          </div>
          <button className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400" onClick={onShowHistory}>
            履歴
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700" onClick={onSearch}>
          表示
        </button>
      </div>
    </div>
  );
};

export default InvoiceSearch;
```