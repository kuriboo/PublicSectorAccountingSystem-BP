import React from 'react';

type ProductInfoProps = {
  productCode: string;
  productName: string;
  specification: string;
  quantity: number;
  unit: string;
  averagePrice: number;
  provisionalStock: number;
  currentStock: number;
  amount: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  productCode,
  productName,
  specification,
  quantity,
  unit,
  averagePrice,
  provisionalStock,
  currentStock,
  amount,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-bold">品番</label>
          <input
            type="text"
            value={productCode}
            readOnly
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="font-bold">品名</label>
          <input
            type="text"
            value={productName}
            readOnly
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="font-bold">規格</label>
          <input
            type="text"
            value={specification}
            readOnly
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="font-bold">数量</label>
          <input
            type="number"
            value={quantity}
            readOnly
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="font-bold">単位</label>
          <input
            type="text"
            value={unit}
            readOnly
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="font-bold">平均単価</label>
          <input
            type="number"
            value={averagePrice.toFixed(2)}
            readOnly
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="font-bold">仮出庫数</label>
          <input
            type="number"
            value={provisionalStock}
            readOnly
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="font-bold">現在庫数</label>
          <input
            type="number"
            value={currentStock}
            readOnly
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="font-bold">金額</label>
          <input
            type="number"
            value={amount.toFixed(2)}
            readOnly
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-200 text-black px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-200 text-black px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
