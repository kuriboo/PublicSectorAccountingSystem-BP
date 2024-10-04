```tsx
import React from 'react';

// TypeScript props interface
interface StorageStatusProps {
  startDate: string;
  endDate: string;
  storageLocation: string;
  itemNumber: string;
  onCsvExport: () => void;
  onClear: () => void;
  onClose: () => void;
}

const StorageStatus: React.FC<StorageStatusProps> = ({
  startDate,
  endDate,
  storageLocation,
  itemNumber,
  onCsvExport,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Header */}
      <h1 className="text-xl font-bold text-purple-600">貯蔵入庫状況一覧</h1>
      
      {/* Input Section */}
      <div className="mt-4 p-4 bg-white border">
        <p>入庫状況一覧範囲入力</p>
        
        {/* Date Inputs */}
        <div className="flex items-center my-2">
          <label className="w-24">処理年月日</label>
          <input
            type="text"
            value={startDate}
            className="w-40 border p-1 mx-2"
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            value={endDate}
            className="w-40 border p-1 mx-2"
            readOnly
          />
        </div>
        
        {/* Storage Location */}
        <div className="flex items-center my-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">保管場所</button>
          <input
            type="text"
            value={storageLocation}
            className="ml-2 border p-1 w-40"
            readOnly
          />
        </div>
        
        {/* Item Number */}
        <div className="flex items-center my-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">品番</button>
          <input
            type="text"
            value={itemNumber}
            className="ml-2 border p-1 w-64"
            readOnly
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={onCsvExport}
          className="bg-gray-300 text-black px-4 py-2 mx-2 rounded hover:bg-gray-400"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 mx-2 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-black px-4 py-2 mx-2 rounded hover:bg-gray-400"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default StorageStatus;
```