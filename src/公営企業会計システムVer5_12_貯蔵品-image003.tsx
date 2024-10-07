import React from 'react';

type ItemDetailProps = {
  itemCode: string;
  itemName: string;
  specification: string;
  quantity: number;
  unitPrice: number;
  unit: string;
  totalAmount: number;
  onQuantityChange: (quantity: number) => void;
  onUnitPriceChange: (unitPrice: number) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ItemDetail: React.FC<ItemDetailProps> = ({
  itemCode,
  itemName,
  specification,
  quantity,
  unitPrice,
  unit,
  totalAmount,
  onQuantityChange,
  onUnitPriceChange,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700">品番</label>
        <input 
          type="text" 
          value={itemCode} 
          readOnly 
          className="w-full bg-gray-100 px-2 py-1" 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">品名</label>
        <div className="text-gray-900">{itemName}</div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">規格</label>
        <div className="text-gray-900">{specification}</div>
      </div>
      <div className="mb-4 flex">
        <div className="mr-2">
          <label className="block text-gray-700">数量</label>
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => onQuantityChange(Number(e.target.value))} 
            className="w-20 border px-2 py-1" 
          />
        </div>
        <div className="mr-2">
          <label className="block text-gray-700">単位</label>
          <div className="text-gray-900">{unit}</div>
        </div>
        <div>
          <label className="block text-gray-700">単価</label>
          <input 
            type="number" 
            value={unitPrice} 
            onChange={(e) => onUnitPriceChange(Number(e.target.value))} 
            className="w-20 border px-2 py-1" 
          />
        </div>
      </div>
      <div className="mb-4">
        <div>金額: {totalAmount.toLocaleString()}</div>
      </div>
      <div className="flex justify-end space-x-4">
        <button 
          onClick={onOk} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
