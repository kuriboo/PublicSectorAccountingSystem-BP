```tsx
// components/ProductDetail.tsx

import React from 'react';

// TypeScript types for prop definitions
type ProductDetailProps = {
  productNumber: string;
  productName: string;
  specification: string;
  quantity: number;
  unitPrice: number;
  scheduledDate: string;
  unit: string;
  onOK: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ProductDetail: React.FC<ProductDetailProps> = ({
  productNumber,
  productName,
  specification,
  quantity,
  unitPrice,
  scheduledDate,
  unit,
  onOK,
  onClear,
  onCancel,
}) => {
  // Calculate the total amount
  const amount = unitPrice * quantity;

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-gray-700">品番</label>
          <input 
            type="text"
            value={productNumber}
            readOnly
            className="border p-2 bg-blue-100 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">品名</label>
          <div className="p-2">{productName}</div>
        </div>
      </div>

      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-gray-700">規格</label>
          <div className="p-2">{specification}</div>
        </div>
        <div>
          <label className="block text-gray-700">数量</label>
          <input 
            type="number"
            value={quantity}
            readOnly
            className="border p-2 bg-blue-100 rounded"
          />
        </div>
      </div>

      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-gray-700">単価</label>
          <div className="p-2">{unitPrice.toLocaleString()}</div>
        </div>
        <div>
          <label className="block text-gray-700">単位</label>
          <div className="p-2">{unit}</div>
        </div>
      </div>

      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-gray-700">出庫予定日</label>
          <div className="p-2 bg-blue-200 rounded">{scheduledDate}</div>
        </div>
        <div>
          <label className="block text-gray-700">金額</label>
          <div className="p-2">{amount.toLocaleString()}</div>
        </div>
      </div>

      <div className="flex justify-end space-x-2 mt-4">
        <button 
          onClick={onOK}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          OK
        </button>
        <button 
          onClick={onClear}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          クリア
        </button>
        <button 
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
```