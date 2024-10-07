import React from 'react';

interface ItemFormProps {
  itemNumber?: string;
  itemName?: string;
  itemSpec?: string;
  unit?: string;
  quantity?: number;
  unitPrice?: number;
  totalPrice?: number;
  onOk?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({
  itemNumber = '',
  itemName = '',
  itemSpec = '',
  unit = '',
  quantity = 1,
  unitPrice = 0,
  totalPrice = 0,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded max-w-md">
      <div className="mb-4">
        <label className="block text-gray-800 font-bold mb-1">品番</label>
        <input
          type="text"
          value={itemNumber}
          className="border rounded w-full p-2"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-bold mb-1">品名</label>
        <p>{itemName}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-bold mb-1">規格</label>
        <p>{itemSpec}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-bold mb-1">単位</label>
        <p>{unit}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-bold mb-1">数量</label>
        <input
          type="number"
          value={quantity}
          className="border rounded w-full p-2"
          readOnly
        />
      </div>
      <div className="mb-4 flex justify-between">
        <div>
          <span className="block text-gray-800 font-bold">単価</span>
          <p>{unitPrice.toLocaleString()}</p>
        </div>
        <div>
          <span className="block text-gray-800 font-bold">金額</span>
          <p>{totalPrice.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onOk}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ItemForm;
