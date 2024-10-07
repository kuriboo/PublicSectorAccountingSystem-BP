// Import necessary modules
import React from 'react';

// Define TypeScript types for props
type ShopMasterListProps = {
  selectedDate: string;
  startShopCode: string;
  endShopCode: string;
  onDateChange: (date: string) => void;
  onStartShopCodeChange: (code: string) => void;
  onEndShopCodeChange: (code: string) => void;
  onSubmit: () => void;
  onClear: () => void;
};

// Define the ShopMasterList component
const ShopMasterList: React.FC<ShopMasterListProps> = ({
  selectedDate,
  startShopCode,
  endShopCode,
  onDateChange,
  onStartShopCodeChange,
  onEndShopCodeChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <h1 className="text-lg font-bold mb-4">指定工事店マスタリスト</h1>
      <div className="border p-4 rounded mb-4">
        <div className="mb-2">
          <label className="font-bold mr-2">作表日:</label>
          <input
            type="text"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          />
        </div>
        <div className="mb-2 flex items-center">
          <label className="mr-2">工事店:</label>
          <input
            type="text"
            value={startShopCode}
            onChange={(e) => onStartShopCodeChange(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={endShopCode}
            onChange={(e) => onEndShopCodeChange(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          />
        </div>
        <div className="mb-2">
          <input type="checkbox" id="validOnly" className="mr-2" />
          <label htmlFor="validOnly">作表日時で有効期限切れの工事店のみ出力</label>
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={onClear} className="bg-gray-500 text-white rounded px-4 py-2 mr-2">
          クリア
        </button>
        <button onClick={onSubmit} className="bg-blue-500 text-white rounded px-4 py-2">
          OK
        </button>
      </div>
    </div>
  );
};

export default ShopMasterList;
```