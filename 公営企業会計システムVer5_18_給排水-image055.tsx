```tsx
import React from 'react';
import { useState } from 'react';

// プロパティの型定義
type PricingComponentProps = {
  initialUnitPrice?: number;
  initialQuantity?: number;
  taxRate?: number;
  onSubmit?: (total: number) => void;
  onClear?: () => void;
  onCancel?: () => void;
};

const PricingComponent: React.FC<PricingComponentProps> = ({
  initialUnitPrice = 157500,
  initialQuantity = 1,
  taxRate = 0,
  onSubmit,
  onClear,
  onCancel,
}) => {
  const [unitPrice, setUnitPrice] = useState(initialUnitPrice);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [tax, setTax] = useState(taxRate);

  // 金額を計算
  const calculateTotal = () => {
    const total = unitPrice * quantity;
    const taxAmount = (total * tax) / 100;
    return total + taxAmount;
  };

  const handleOkClick = () => {
    if (onSubmit) {
      onSubmit(calculateTotal());
    }
  };

  const handleClearClick = () => {
    setUnitPrice(initialUnitPrice);
    setQuantity(initialQuantity);
    setTax(taxRate);
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">単価</label>
        <input
          type="number"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={unitPrice}
          onChange={(e) => setUnitPrice(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">数量</label>
        <input
          type="number"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <div className="mb-4 flex">
        <label className="block text-sm font-medium text-gray-700 mr-2">消費税率</label>
        <input
          type="number"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={tax}
          onChange={(e) => setTax(Number(e.target.value))}
        />
        <span className="ml-2">%</span>
      </div>
      <div className="mb-4 text-right">
        <span className="block text-sm font-medium text-gray-700">金額: {calculateTotal()}</span>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
          onClick={handleOkClick}
        >
          OK
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
          onClick={handleClearClick}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PricingComponent;
```