import React from 'react';

type InventoryFormProps = {
  productCode: string;
  productName: string;
  specification: string;
  currentStock: number;
  currentAmount: number;
  averageUnitPrice: number;
  fiscalYear: string;
  initialStockNumber: number;
  quantity: number;
  unit: string;
  unitPrice: number;
  amount: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const InventoryForm: React.FC<InventoryFormProps> = ({
  productCode,
  productName,
  specification,
  currentStock,
  currentAmount,
  averageUnitPrice,
  fiscalYear,
  initialStockNumber,
  quantity,
  unit,
  unitPrice,
  amount,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">品番</label>
        <input
          type="text"
          value={productCode}
          className="w-full mt-1 border rounded px-3 py-2"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">品名</label>
        <input
          type="text"
          value={productName}
          className="w-full mt-1 border rounded px-3 py-2"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">規格</label>
        <input
          type="text"
          value={specification}
          className="w-full mt-1 border rounded px-3 py-2"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">現在庫数量</label>
        <input
          type="number"
          value={currentStock}
          className="w-full mt-1 border rounded px-3 py-2"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">現在庫金額</label>
        <input
          type="number"
          value={currentAmount}
          className="w-full mt-1 border rounded px-3 py-2"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">平均単価</label>
        <input
          type="number"
          value={averageUnitPrice}
          className="w-full mt-1 border rounded px-3 py-2"
          readOnly
        />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">当初入庫年度</label>
          <input
            type="text"
            value={fiscalYear}
            className="w-full mt-1 border rounded px-3 py-2"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">当初入庫番号</label>
          <input
            type="number"
            value={initialStockNumber}
            className="w-full mt-1 border rounded px-3 py-2"
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">数量</label>
        <input
          type="number"
          value={quantity}
          className="w-full mt-1 border rounded px-3 py-2"
          readOnly
        />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">単位</label>
          <input
            type="text"
            value={unit}
            className="w-full mt-1 border rounded px-3 py-2"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">単価</label>
          <input
            type="number"
            value={unitPrice}
            className="w-full mt-1 border rounded px-3 py-2"
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">金額</label>
        <input
          type="number"
          value={amount}
          className="w-full mt-1 border rounded px-3 py-2"
          readOnly
        />
      </div>
      <div className="flex justify-end space-x-3">
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InventoryForm;
```