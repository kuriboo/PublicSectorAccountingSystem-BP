import React from 'react';

interface InventoryFormProps {
  locationCode: string;
  locationName: string;
  itemNumber: string;
  itemName: string;
  specification: string;
  quantity: number;
  unit: string;
  averagePrice: number;
  provisionalNumber: number;
  currentStock: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const InventoryForm: React.FC<InventoryFormProps> = ({
  locationCode,
  locationName,
  itemNumber,
  itemName,
  specification,
  quantity,
  unit,
  averagePrice,
  provisionalNumber,
  currentStock,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-xl">
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Location section */}
        <div>
          <label className="block font-bold">保管場所</label>
          <div>{locationCode} {locationName}</div>
        </div>
        <div>
          <label className="block font-bold">担当所属</label>
          <div>予算編成最高権限</div>
        </div>

        {/* Item section */}
        <div>
          <label className="block font-bold">品番</label>
          <div>{itemNumber}</div>
        </div>
        <div className="col-span-3">
          <label className="block font-bold">品名</label>
          <div>{itemName}</div>
        </div>
        <div>
          <label className="block font-bold">規格</label>
          <div>{specification}</div>
        </div>
      </div>

      {/* Quantity section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-bold">数量</label>
          <input
            type="number"
            value={quantity}
            readOnly
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-bold">単位</label>
          <div>{unit}</div>
        </div>
        <div>
          <label className="block font-bold">平均単価</label>
          <div>{averagePrice.toLocaleString()}</div>
        </div>
      </div>

      {/* Stock section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-bold">仮出庫数</label>
          <div>{provisionalNumber}</div>
        </div>
        <div>
          <label className="block font-bold">現在庫数</label>
          <div>{currentStock}</div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InventoryForm;