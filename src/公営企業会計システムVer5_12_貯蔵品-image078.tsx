// Import necessary libraries
import React from 'react';

// Define TypeScript types for component props
type InventoryItemProps = {
  code: string;
  name: string;
  specification: string;
  evaluationMethod: string;
  storageLocationCode: string;
  currentStock: number;
  unit: string;
  unitPrice: number;
  totalAmount: number;
  adjustAmount: number;
};

// Define the InventoryItem component
const InventoryItem: React.FC<InventoryItemProps> = ({
  code,
  name,
  specification,
  evaluationMethod,
  storageLocationCode,
  currentStock,
  unit,
  unitPrice,
  totalAmount,
  adjustAmount,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      {/* Code Input */}
      <div className="mb-2">
        <label className="block text-sm font-semibold">品番</label>
        <input
          type="text"
          value={code}
          readOnly
          className="w-full border rounded p-1"
        />
      </div>

      {/* Name and Specification */}
      <div className="mb-2">
        <label className="block text-sm font-semibold">品名</label>
        <div className="text-lg">{name}</div>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-semibold">規格</label>
        <div className="text-lg">{specification}</div>
      </div>

      {/* Evaluation Method and Location Code */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <label className="block text-sm font-semibold">評価方法区分</label>
          <div className="text-lg">{evaluationMethod}</div>
        </div>
        <div>
          <label className="block text-sm font-semibold">保管場所コード</label>
          <input
            type="text"
            value={storageLocationCode}
            readOnly
            className="w-full border rounded p-1"
          />
        </div>
      </div>

      {/* Current Stock and Shelf Height */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <label className="block text-sm font-semibold">現在在庫数</label>
          <div className="text-lg">{currentStock}</div>
        </div>
        <div>
          <label className="block text-sm font-semibold">棚卸高</label>
          <input
            type="text"
            value={currentStock}
            readOnly
            className="w-full border rounded p-1"
          />
        </div>
      </div>

      {/* Unit and Unit Price */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <label className="block text-sm font-semibold">単位</label>
          <div className="text-lg">{unit}</div>
        </div>
        <div>
          <label className="block text-sm font-semibold">単価</label>
          <input
            type="text"
            value={unitPrice.toFixed(2)}
            readOnly
            className="w-full border rounded p-1"
          />
        </div>
      </div>

      {/* Total Amount and Adjust Amount */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <label className="block text-sm font-semibold">金額</label>
          <div className="text-lg">{totalAmount}</div>
        </div>
        <div>
          <label className="block text-sm font-semibold">調整金額</label>
          <input
            type="text"
            value={adjustAmount.toFixed(0)}
            readOnly
            className="w-full border rounded p-1"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button className="px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button className="px-4 py-2 bg-gray-300 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default InventoryItem;
```